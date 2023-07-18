import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Home.jsx";
import Nav from './components/Nav.jsx';
import InfoPage from './components/InfoPage.jsx';

function App() {
  function resetActivePage(input) {
    let links = document.getElementsByClassName('nav__link')
    for (let i = 0; i < links.length; i++){
        links[i].classList.remove("active-page")
    }
    const current = document.getElementById(input)
    current.classList += " active-page" 
}

  return (
    <div className='app'>
      <Router>
        <h1 className='title'>My Personal Code Knowledgebase</h1>
        <Nav />
        <Routes>
          <Route path="/MyCodeKnowledgeBase" element={<Home reset={resetActivePage}/>} />
          <Route path="/MyCodeKnowledgeBase/programming/:name" element={<InfoPage reset={resetActivePage}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
