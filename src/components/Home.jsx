import './Home.css';
import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import HtmlLogo from '../imgs/html.svg';
import CssLogo from '../imgs/css.svg';
import JavascriptLogo from '../imgs/javascript.svg';
import ReactLogo from '../imgs/react.svg';


function Home({reset}) {
    useEffect(()=>{
        reset('Home')
      })
    return(
        <div className='grid'>
            <Link to="/programming/HTML">
                <img className='logo' src={HtmlLogo} alt="" />
            </Link>
            <Link to="/programming/CSS">
                <img className='logo' src={CssLogo} alt="" />
            </Link>
            <Link to="/programming/JavaScript">
                <img className='logo' src={JavascriptLogo} alt="" />
            </Link>
            <Link to="/programming/React">
                <img className='logo' src={ReactLogo} alt="" />
            </Link>
        </div>
    );
}

export default Home;