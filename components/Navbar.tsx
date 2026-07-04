import { languages } from "../data/siteData";
export default function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="/">
        <span className="logoIcon">♾</span>
        <span>
          <strong>
            Kidney<span>Pedia</span>
          </strong>
          <small>Connected Nephrology Education</small>
        </span>
      </a>

      <nav>
        <a href="/">Home</a>
        <a href="#physicians">Physicians</a>
        <a href="#patients">Patients</a>
        <a href="#infographics">Infographics</a>
        <a href="#resources">Resources</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>

      <select aria-label="Language selector">
        {languages.map((language) => (
          <option key={language}>{language}</option>
        ))}
      </select>
    </header>
  );
}
