import profilePic from "../assets/profilePic.png"; // Put your photo in /src/assets

function Header() {
    return (
        <header className="header">
            <a
                href="/"
                className="hover:text-cyan-500 transition-colors"
            >
                <div className="header-left">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <h1 className="site-title">Roger Campo | Professional Portfolio</h1>
                </div>
            </a>
            <nav>
                <ul className="nav-list">
                    <li><a className="nav-link" href="/about">About Me</a></li>
                    <li><a className="nav-link" href="/projects">Projects</a></li>
                    <li><a className="nav-link" href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
