import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Roupas from './Components/Roupas';
import Calcados from './Components/Calçados';
import Acessorios from './Components/Acessorios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/roupas" element={<Roupas />}/>
            <Route path="/calcados" element={<Calcados />}/>
            <Route path="/acessorios" element={<Acessorios />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
