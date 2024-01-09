import {Link} from "react-router-dom"

function Header() {
    return (
    <header>
    <h1>Vishal Manglani</h1>
    <nav className="menu">
        <Link to="/" className="headerText">About Me</Link>
        <Link to="/Portfolio" className="headerText">My Work</Link>
        <Link to="/Resume" className="headerText">Resume</Link>
        <Link to="/Contact" className="headerText">Contact Me</Link>
    </nav>
    </header>
    );
  }
  
  export default Header;