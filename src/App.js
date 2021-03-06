import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "../src/components/homepage/Homepage";
import BusinessHome from "../src/components/business/BusinessHome";
import Candidate from "../src/components/candidate/Candidate";
import Company from "../src/components/company/Company";
import NewChallenge from "../src/components/new_challenge/NewChallenge";
import DashboardCandidate from "../src/components/dashboard-candidate/DashboardCandidate";
import DashboardBusiness from "../src/components/dashboard-business/DashboardBusiness";
import Challenges from "../src/components/challenges/Challenges";
import MyChallenges from "../src/components/my_challenges/MyChallenges";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          {/* Candidato */}
          <Route exact path="/" component={Homepage} />
          <Route exact path="/candidato" component={Candidate} />
          <Route path="/dashboard" component={DashboardCandidate} />

          <Route path="/meus_desafios" component={MyChallenges} />
          <Route path="/desafios" component={Challenges} />

          {/* Empresa */}
          <Route exact path="/business" component={BusinessHome} />
          <Route exact path="/empresa" component={Company} />
          <Route path="/novo_desafio" component={NewChallenge} />
          <Route path="/dashboard_empresa" component={DashboardBusiness} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
