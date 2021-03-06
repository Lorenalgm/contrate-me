import React, { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import Sidebar from "../sidebar_candidate/SidebarCandidate";
import Header from "../header-candidate/HeaderCandidate";
import './Challenges.css';
import react from "../../images/react-icon.svg";

function Challenges() {
    const [challenges, setChallenges] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const candidato = localStorage.getItem('candidatoId');
    const history = useHistory();

    useEffect(() => {
        async function SearchChallenges(){
            const response = await api.get(`/challenges`)
            setChallenges(response.data);
        }

        SearchChallenges();
    }, []);

    async function createSolution(id){
      
      const response = await api.post(`/solutions`, {
          dataInicio: Date().toLocaleString(),
          status: 'Em andamento',
          candidatoId: candidato,
          desafioId: id
      })

      setSolutions(response.data);
      history.push('/meus_desafios');
    }

    function handleArea(){

    }

    function handleTech(){

    }

  return (
    <div className="challenges-section">
        <Sidebar /> 
        <div className="challenges-content">
          <Header /> 
          <div className="challenge-container">
            <div className="challenge-container-search">
              <h1>Buscar testes</h1>
              <div className="challenges-list">
                  {
                      challenges.map(challenge =>(
                          <div className="challenge">
                              <img src={react} alt="Desafio" />
                              <div className="challenge-content">
                                <h3>{challenge.nome}</h3>
                                <p>para Provi</p>
                                <div className="detail">
                                  <span>{challenge.tecnologias}</span>
                                  <span>{challenge.destino}</span>
                                  <span>{challenge.area}</span>
                                </div>
                                <p>{challenge.descricao}</p>
                                <div className="challenges-buttons">
                                  <a className="link-btn" href={challenge.linkExterno} alt="Link externo">
                                    Link externo
                                    </a>
                                    <button onClick={() => createSolution(challenge._id)} className="challenge-btn">
                                      Começar agora
                                    </button>
                                </div>
                              </div>
                          </div>
                      ))
                  }
              </div>
            </div>
            <div className="filters">
                <h3>Buscar por área</h3>
                <div className="area-list">
                  <div>
                    <input
                      onChange={handleArea}
                      value="frontend"
                      type="checkbox"
                      id="frontend"
                      name="frontend"
                    ></input>
                    <label htmlFor="frontend">Front-end</label>
                  </div>
                  
                  <div>
                    <input
                      onChange={handleArea}
                      value="backend"
                      type="checkbox"
                      id="backend"
                      name="backend"
                    ></input>
                    <label htmlFor="backend">Back-end</label>
                  </div>

                  <div>
                    <input
                      onChange={handleArea}
                      value="fullstack"
                      type="checkbox"
                      id="fullstack"
                      name="fullstack"
                    ></input>
                    <label htmlFor="fullstack">Fullstack</label>
                  </div>
                </div>

                <h3>Buscar por tecnologia</h3>
                
                <div className="tech-list">
                <div>
                  <input
                      onChange={handleTech}
                      value="react"
                      type="checkbox"
                      id="react"
                      name="react"
                      ></input>
                    <label htmlFor="react">React</label>
                  </div>
                  
                  <div>
                    <input
                      onChange={handleTech}
                      value="javascript"
                      type="checkbox"
                      id="javascript"
                      name="javascript"
                      ></input>
                    <label htmlFor="javascript">Javascript</label>
                  </div>

                  <div>
                    <input
                      onChange={handleTech}
                      value="php"
                      type="checkbox"
                      id="php"
                      name="php"
                      ></input>
                    <label htmlFor="php">PHP</label>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Challenges;
