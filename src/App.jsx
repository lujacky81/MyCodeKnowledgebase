import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./components/Home.jsx";
import Nav from './components/Nav.jsx';
import InfoPage from './components/InfoPage.jsx';



function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/programming/:name" element={<InfoPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
