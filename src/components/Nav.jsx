import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <div className="nav">
            <Link className='nav__link' id='Home' to="/MyCodeKnowledgeBase/">Home</Link>
            <Link className='nav__link' id='HTML' to="/MyCodeKnowledgeBase/programming/HTML">HTML</Link>
            <Link className='nav__link' id='CSS' to="/MyCodeKnowledgeBase/programming/CSS">CSS</Link>
            <Link className='nav__link' id='JavaScript' to="/MyCodeKnowledgeBase/programming/JavaScript">JavaScript</Link>
            <Link className='nav__link' id='React' to="/MyCodeKnowledgeBase/programming/React">React</Link>
        </div>
    );
}

export default Nav;