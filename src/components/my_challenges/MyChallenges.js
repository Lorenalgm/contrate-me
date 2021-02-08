import React, { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api';
import Sidebar from "../sidebar_candidate/SidebarCandidate";
import Header from "../header-candidate/HeaderCandidate";
import './MyChallenges.css';
import react from "../../images/react-icon.svg";

function MyChallenges() {
    const [challenges, setChallenges] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [linkGithub, setLinkGithub] = useState();
    const candidato = localStorage.getItem('candidatoId');
   

    useEffect(() => {
        async function SearchChallenges(){
            const response = await api.get(`/solutions`);

            setChallenges(response.data);
        }

        SearchChallenges();
    }, []);

    async function sendSolution(id){
      const response = await api.put(`/solutions`, {
          dataFim: Date(),
          status: 'Aguardando avaliação',
          linkGithub: linkGithub
        })

      setSolutions(response.data);
    }

  return (
    <div className="my-challenges-section">
        <Sidebar /> 
        <div className="my-challenges-content">
          <Header /> 
          <div>
            <h1>Meus testes</h1>
            <div className="my-challenges-list">
                {
                    challenges.map(challenge =>(
                        <div className="my-challenge">
                          <img src={react} alt="Desafio" />
                          <div className="mysolution">
                            <h3>Criar uma landing page de restaurante</h3>
                            <p>Status: {challenge.status}</p>
                            {challenge.linkGithub? 
                              (<p>Link: {challenge.linkGithub}</p>):
                              
                              <form onSubmit={sendSolution(challenge._id)}>
                                <div className="text-input">
                                  <label htmlFor="novolinkGithub">Link github</label>
                                  <input
                                    type="text"
                                    id="novolinkGithub"
                                    name="linkGithub"
                                    onChange={e => setLinkGithub(e.target.value)}
                                    value={linkGithub}
                                  />
                                </div>
                                <button className="send-btn" type="submit">
                                  Enviar
                                </button>
                              </form>
                            
                            }
                            {challenge.nota > 0 && (
                              <div className="grade">
                                <p className="total">Nota geral: {challenge.nota}</p>
                                <p>Boas práticas: {challenge.boasPraticas}</p>
                                <p>Documentação: {challenge.documentacao}</p>
                                <p>Código limpo: {challenge.codigoLimpo}</p>
                                <p>Controle de qualidade: {challenge.controleQualidade}</p>
                                <p>Requisitos completos: {challenge.entrega}</p>
                              </div>
                            )}
                          </div>
                        </div>
                    ))
                }
            </div>

          </div>
        </div>
    </div>
  );
}

export default MyChallenges;
