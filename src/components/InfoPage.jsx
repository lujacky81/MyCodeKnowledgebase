import {useParams} from 'react-router-dom';
import HtmlInfo from './HtmlInfo.jsx';
import CssInfo from './CssInfo.jsx';
import JavascriptInfo from './JavascriptInfo.jsx';
import ReactInfo from './ReactInfo.jsx';
import React, {useEffect} from 'react';
import './InfoPage.css'


function InfoPage() {
    const { name } = useParams()

    function resetActivePage() {
        let links = document.getElementsByClassName('nav__link')
        for (let i = 0; i < links.length; i++){
            links[i].classList.remove("active-page")
        }
        const current = document.getElementById(name)
        current.classList += " active-page" 
    }

    useEffect(()=>{
        resetActivePage()
    })

    switch(name){
        case 'HTML':
            return(<HtmlInfo />)
            
        case 'CSS':
            return(<CssInfo />)
        
        case 'JavaScript':
            return(<JavascriptInfo />)
        
        case 'React':
            return(<ReactInfo />)

    }
    
}

export default InfoPage;