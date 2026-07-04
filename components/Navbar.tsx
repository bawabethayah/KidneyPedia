import { languages } from "../data/siteData";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="/">
        <span className="logoMark">
          <span></span>
          <span></span>
        </span>

        <span className="logoText">
          <strong>
            Kidney<span>Pedia</span>
          </strong>
          <small>Connected Nephrology Education</small>
        </span>
      </a>

      <nav>
        <a className="active" href="/">Home</a>
        <a href="#physicians">Physicians</a>
        <a href="#patients">Patients</a>
        <a href="#infographics">Infographics</a>
        <a href="#resources">Resources</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navRight">
        <select aria-label="Language selector">
          {languages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
        <a href="#">in</a>
        <a href="#">f</a>
        <a href="#">◎</a>
        <a href="#">𝕏</a>
      </div>
    </header>
  );
}
