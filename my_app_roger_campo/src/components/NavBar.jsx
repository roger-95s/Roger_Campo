// src/components/NavBar.jsx
import { Link } from "react-router-dom"; // Import Link
import profilePic from "../assets/profilePic.png";
import '../NavBar.css'; // Import the specific CSS

const NavBar = () => {
    return (
        <header className="navbar-container nav-glass">
            <div className="navbar-content">

                {/* Logo Section */}
                {/* Use Link instead of 'a' for internal pages */}
                <Link to="/" className="logo-group">
                    <div className="profile-wrapper">
                        <img src={profilePic} alt="Roger Campo" className="profile-pic" />
                    </div>
                    <span className="logo-text">Roger Campo</span>
                </Link>

                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default NavBar;