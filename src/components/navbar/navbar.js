import './navbar.css';
import { Link } from 'react-scroll';
export default function Navbar() {
    return (
        <header className="header">
            <a href="/" className="logo"></a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li>
                    <Link activeClass="active" smooth spy to="about">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="education">
                        Education
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="project">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="contact">
                        Contact Me
                    </Link>
                </li>
                <li>
                    <Link activeClass="active">

                    </Link>
                </li>
            </ul>
        </header>
    )
}