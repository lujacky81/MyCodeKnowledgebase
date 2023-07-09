import {useParams} from 'react-router-dom';
import './Html.jsx';
import './Css.jsx';
import './Javascript.jsx';
import './React.jsx';
import React, {useEffect} from 'react';

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

    return(
        <div>

        </div>
    );
}

export default InfoPage;