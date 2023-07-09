import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <div className="nav">
            <Link className='nav__link' id='Home' to="/">Home</Link>
            <Link className='nav__link' id='HTML' to="/programming/HTML">HTML</Link>
            <Link className='nav__link' id='CSS' to="/programming/CSS">CSS</Link>
            <Link className='nav__link' id='JavaScript' to="/programming/JavaScript">JavaScript</Link>
            <Link className='nav__link' id='React' to="/programming/React">React</Link>
        </div>
    );
}

export default Nav;