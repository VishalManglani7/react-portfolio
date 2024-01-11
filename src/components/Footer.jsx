import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="FooterClass">
        <h2 className="title"></h2>
        <nav id="contactme-nav">
          <a href="tel:888-777-6666">888•777•6666</a>
          <a href="mailto:vishal@gmail.com">vishal@gmail.com</a>
          <a href="https://github.com/VishalManglani7">GitHub</a>
        </nav>
      </div>
      {/* <Link to="/" className="headerText">
        Footer
      </Link> */}
    </footer>
  );
}

export default Footer;