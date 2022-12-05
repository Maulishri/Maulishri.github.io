import './navbar.css';
import { Link } from 'react-scroll';
export default function Navbar(){
    return(
        <header className="header">
            <a href="/" className="logo"></a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li>
                    <Link activeClass="active" smooth spy to="about">
                        ABOUT ME
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="education">
                        EDUCATION
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="project">
                        PROJECT
                    </Link>
                </li>
                    <li>
                    <Link activeClass="active" smooth spy to="contact">
                        CONTACT ME
                    </Link>
                </li>
            </ul>
        </header>
    )
}