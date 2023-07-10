import {useParams} from 'react-router-dom';
import HtmlInfo from './HtmlInfo.jsx';
import CssInfo from './CssInfo.jsx';
import JavascriptInfo from './JavascriptInfo.jsx';
import ReactInfo from './ReactInfo.jsx';
import React, {useEffect} from 'react';
import './InfoPage.css'
import Home from './Home.jsx';


function InfoPage({reset}) {
    const { name } = useParams()

    useEffect(()=>{
        reset(name)
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

        default:
            return (<Home />)
    }
    
}

export default InfoPage;