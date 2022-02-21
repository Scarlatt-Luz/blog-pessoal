import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route exact path='/'>
            <Login />
          </Route>
          
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastro-usuario'>
            <CadastroUsuario />
            </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
