import React from "react";
import { Link } from "react-router-dom";
import "./BusinessHome.css";

import FooterBusiness from "../footer-business/FooterBusiness";

import headerImage from "../../images/Group 24.svg";
import triangulo1 from "../../images/triangulo roxo.svg";
import triangulo2 from "../../images/triangulo amarelo.svg";
import triangulo3 from "../../images/triangulo azul.svg";

import provi from "../../images/PROVI.svg";
import partners1 from "../../images/Frame 22.svg";
import partners2 from "../../images/Frame 23.svg";

import notificationsImage from "../../images/Group 25.svg";
import cards from "../../images/Group 35.svg";
import rectangle from "../../images/Rectangle.svg";
import team from "../../images/Workflow Teamwork.svg";
import boat from "../../images/Group 26.svg";
import user1 from "../../images/user1.svg";
import user2 from "../../images/user2.svg";
import user3 from "../../images/user3.svg";
import logo from "../../images/logo.svg";
import linkedin from "../../images/LinkedIn - Negative.svg";
import instagram from "../../images/Instagram - Negative.svg";
import avatars from "../../images/fotinhas.svg";
import down from "../../images/down.svg";
import up from "../../images/up.svg";

function BusinessHome() {
  function handleWorksScroll() {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  }

  function handleDoubtsScroll() {
    window.scrollTo({ top: 4100, behavior: "smooth" });
  }

  function ScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="business-home">
      <div className="business-navbar">
        <div className="logo-div">
          <img className="logo-image" src={logo} />
        </div>

        <div className="business-links-div">
          <p onClick={handleWorksScroll}>Como funciona?</p>
          <p onClick={handleDoubtsScroll}>Dúvidas</p>
          <Link className="business-navbar-candidato" to="/">
            Candidato
          </Link>
        </div>
        <div className="business-login-div">
          <Link className="business-navbar-entrar" to="/">
            Entrar
          </Link>
          <Link className="business-navbar-btn" to="/empresa">
            Crescer minha empresa
          </Link>
        </div>
      </div>
      <header className="business-header-container">
        <div className="business-header-content">
          <div className="business-header-info">
            <h1 className="business-h1">
              Encontre os melhores profissionais inciantes para crescer sua
              empresa
            </h1>
            <h2 className="business-h2">
              Veja testes nas principais linguagens pedidas pelos seus clientes
              e presentes nos produtos que vêm se destacando no mercado
            </h2>
            <Link className="business-header-btn" to="/">
              Crescer minha empresa
            </Link>
            <div className="business-header-avatars-div">
              <img src={avatars} />
              <p>
                Junte-se a <strong>50+</strong> empresas parceiras
              </p>
            </div>
          </div>
          <div>
            <img className="business-header-image" src={headerImage} />
          </div>
        </div>
      </header>

      {/* NUMBERS */}

      <section className="business-numbers-section">
        <div>
          <h4>54</h4>
          <p>empresas parceiras</p>
        </div>
        <img src={rectangle} />
        <div>
          <h4>1270+</h4>
          <p>profissionais cadastrados</p>
        </div>
        <img src={rectangle} />

        <div>
          <h4>733</h4>
          <p>testes técnicos submetidos</p>
        </div>
      </section>

      {/* PARTNERS */}

      <section className="business-partners-section">
        <img className="logo-provi" src={provi} />
        <div className="business-partners-section-logos">
          <img src={partners1} />
          <img src={partners2} />
        </div>
      </section>

      {/* SERVICES */}

      <section className="business-services-section">
        <div className="business-services-section-header">
          <h5>Como funciona?</h5>
          <p>
            Seja o primeiro a achar candidatos incríveis onde nem todo mundo
            procura.e destacar!
          </p>
        </div>

        <div className="business-services-card">
          <img src={triangulo1} />
          <div className="business-services-card-text">
            <h6>Solicite testes técnicos de nivelamento para suas vagas</h6>
            <p>
              Categorize por linguagem, framework e área de atuação para
              encontrar o profissional que sua empresa precisa.
            </p>
          </div>
        </div>

        <div className="business-services-card">
          <img src={triangulo3} />
          <div className="business-services-card-text">
            <h6>Tenha acesso ao ranking de candidatos com mais destaque</h6>
            <p>
              Veja quais candidatos completaram mais testes e chegaram ao top 10
              da semana.
            </p>
          </div>
        </div>

        <div className="business-services-card">
          <img src={triangulo1} />
          <div className="business-services-card-text">
            <h6>Veja os links externos e conheça os candidatos</h6>
            <p>
              Linkedin, Github, portfólio pessoal, CV, todas informações ao seu
              dispor.
            </p>
          </div>
        </div>
      </section>

      {/* TESTE */}

      <section className="business-notifications-section">
        <img src={notificationsImage} />
        <div>
          <h5>Teste gratuitamente por 7 dias</h5>
          <p>
            Conheça a plataforma e os candidatos que estão se destacando durante
            uma semana sem nenhum custo. Após esse período, o seu plano
            escolhido entra em vigência.
          </p>
        </div>
      </section>

      {/* PLANOS */}

      <section className="planos-section">
        <img className="planos-section-image" src={cards} />
        <div className="planos-section-btns">
          <a className="planos-section-btn-teste">Começar teste de 7 dias</a>
          <a className="planos-section-btn-crescer">Crescer minha empresa</a>
        </div>
      </section>

      {/* FAQ */}

      <section className="business-faq">
        <div className="business-faq-group">
          <h5>Dúvidas</h5>
          <div className="business-question">
            <div className="business-question-head">
              <h3>Qual é o custo para utilizar a plataforma?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-block">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
          <div className="business-question">
            <div className="business-question-head">
              <h3>Como visualizo as vagas disponíveis?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-none">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
          <div className="business-question">
            <div className="business-question-head">
              <h3>Quem poderá ver meus testes?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-none">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
          <div className="business-question">
            <div className="business-question-head">
              <h3>Vou receber um certificado?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-none">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="business-notifications-section">
        <img src={boat} />
        <div className="business-action-content">
          <h5>
            Seja o primeiro a achar candidatos incríveis onde nem todo mundo
            procura
          </h5>
          <a
            href="https://contrate-me.vercel.app/"
            alt="Testar"
            className="business-home-btn"
          >
            Crescer minha empresa
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="business-testimonials-section">
        <h1>O que as empresas dizem?</h1>
        <p className="business-testimonials-subtitle">
          Entenda como o processo ajudou centenas de profissionais a se
          colocarem no mercado.
        </p>
        <div className="business-testimonials">
          <div className="business-testimonial">
            <p>
              “A Contrate-me acelerou muito o nosso processo de contratação de
              pessoas em início de carreira por facilitar o processo de seleção
              já destacando os candidatos com as habilidades técnicas mostradas
              na prática. Muito bom!”
            </p>
            <div className="business-testimonial-user">
              <img src={user1} />
              <div className="business-testimonial-user-identification">
                <p>
                  <b>Henk Fortuin</b>
                </p>
                <p>CTO Crips</p>
              </div>
            </div>
          </div>
          <div className="business-testimonial">
            <p>
              “A plataforma resolve um dos grandes problemas para as
              recrutadoras, que não conseguiam ter uma visibilidade dos skills
              técnicos dos candidatos por só avaliar currículos, e muitas vezes
              os candidatos não possuem certos requisitos exigidos no currículo,
              mas na prática demonstram total domínio das habilidades exigidas
              para o cargo”
            </p>
            <div className="business-testimonial-user">
              <img src={user2} />
              <div className="business-testimonial-user-identification">
                <p>
                  <b>Henk Fortuin</b>
                </p>
                <p>CEO Crips</p>
              </div>
            </div>
          </div>
          <div className="business-testimonial">
            <p>
              “Excelente plataforma! Fácil, intuitiva e que consegue exibir
              diretamente as habilidades dos candidatos”
            </p>
            <div className="business-testimonial-user">
              <img src={user3} />
              <div className="business-testimonial-user-identification">
                <p>
                  <b>Henk Fortuin</b>
                </p>
                <p>Recruiter Crips</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <FooterBusiness />
    </div>
  );
}

export default BusinessHome;
