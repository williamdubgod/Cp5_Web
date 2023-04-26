import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
