import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SidebarCandidate from "../sidebar_candidate/SidebarCandidate";
import HeaderCandidate from "../header-candidate/HeaderCandidate";
import "./DashboardCandidate.css";

import number1 from "../../images/1.svg";
import number2 from "../../images/2.svg";
import number3 from "../../images/3.svg";

function DashboardCandidate() {
  const [candidates, setCandidates] = useState([]);
  const [contador, setContador] = useState(0);

  let date = new Date();
  let monName = new Array(
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "Maio",
    "junho",
    "agosto",
    "outubro",
    "novembro",
    "dezembro"
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://contrate-me-api.herokuapp.com/candidates"
        );
        setCandidates(response.data);
      } catch (err) {}
    }
    fetchData();
  }, []);

  function atualizaContador(){
    setContador(contador+1);
  }

  return (
    <div className="candidate-dashboard-container">
      <SidebarCandidate />
      <div>
        <HeaderCandidate />
        <div className="candidate-dashboard-content">
          <div>
            <h1>Visão geral dos testes</h1>
            <div className="candidate-dashboard-infos">
              <div className="candidate-dashboard-tests">
                <p>Cadastrados</p>
                <p className="number">5</p>
              </div>
              <div className="candidate-dashboard-tests">
                <p>Em andamento</p>
                <p className="number">1</p>
              </div>
              <div className="candidate-dashboard-tests">
                <p>Aguardando Avaliação</p>
                <p className="number">2</p>
              </div>
            </div>
          </div>
          <div className="candidate-ranking">
            <h2 className="candidate-ranking-title">Ranking de candidatos</h2>
            <small>
              Atualizado em {date.getDate()} de {monName[date.getMonth()]} de{" "}
              {date.getFullYear()}{" "}
            </small>
            <div className="candidate-ranking-positions">
              {candidates[0] && (
              <div className="candidate-cards">
                <div className="candidate-card">
                  <div className="card-head">
                    <img src={number1} />
                    <h3>{candidates[0].nome}</h3>
                  </div>
                  <p className="card-candidate-function">Função</p>
                  <p className="card-candidate-score">
                  {candidates[0].testesResolvidos>0?candidates[0].testesResolvidos:0} testes/<strong>{candidates[0].testesResolvidos>0?(candidates[0].somaTotal/candidates[0].testesResolvidos):''}</strong>
                  </p>
                </div>
                <div className="candidate-card">
                  <div className="card-head">
                    <img src={number2} />
                    <h3>{candidates[1].nome}</h3>
                  </div>
                  <p className="card-candidate-function">Função</p>
                  <p className="card-candidate-score">
                  {candidates[1].testesResolvidos>1?candidates[1].testesResolvidos:0} testes/<strong>{candidates[1].testesResolvidos>0?(candidates[1].somaTotal/candidates[1].testesResolvidos):''}</strong>
                  </p>
                </div>
                <div className="candidate-card">
                  <div className="card-head">
                    <img src={number3} />
                    <h3>{candidates[2].nome}</h3>
                  </div>
                  <p className="card-candidate-function">Função</p>
                  <p className="card-candidate-score">
                  {candidates[2].testesResolvidos>2?candidates[2].testesResolvidos:2}testes/<strong>{candidates[2].testesResolvidos>2?(candidates[2].somaTotal/candidates[2].testesResolvidos):''}</strong>
                  </p>
                </div>
              </div>
              )}
              <div className="candidate-ranking-other-positions">
                <table>
                  <thead>
                    <tr>
                      <th className="th-position">Posição</th>
                      <th className="th-candidate">Candidato</th>
                      <th className="th-area">Área de atuação</th>
                      <th className="th-testes">Testes resolvidos</th>
                      <th className="th-score">Nota geral</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      candidates.map(candidate =>(                        
                         candidate._id != '60207d178571860015e01c1f' && candidate._id != '60207d4b8571860015e01c20' && candidate._id != '60207d6e8571860015e01c21' && (
                              <tr className="purple-bg">
                                <td>
                                  <strong>4</strong>
                                </td>
                                <td>
                                  <strong>{candidate.nome}</strong>
                                </td>
                                <td>
                                  <p className="small">{candidate.areaInteresse}</p>
                                </td>
                                <td>
                                  <strong>{candidate.testesResolvidos}</strong>
                                </td>
                                <td>
                                  <strong>{candidate.testesResolvidos>0?(candidate.somaTotal/candidate.testesResolvidos):''}</strong>
                                </td>
                              </tr> 

                         )
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCandidate;
