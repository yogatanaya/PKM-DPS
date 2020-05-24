import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavbarComponents from './components/NavbarComponents';
import Home from './pages/Home';
import About from './pages/About';
import Mapping from './pages/Mapping';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponents/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/map" component={Mapping}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
