export default function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <h1>
          Kidney<span>pedia</span>
        </h1>
        <h2>Connected Nephrology Education</h2>
        <p>
          Your trusted, comprehensive, and up-to-date resource for nephrology
          knowledge. For physicians, students, and patients worldwide.
        </p>

        <div className="heroButtons">
          <a className="btn navy" href="#physicians">For Physicians</a>
          <a className="btn green" href="#patients">For Patients</a>
          <a className="btn outline" href="#topics">Browse Topics</a>
        </div>
      </div>

      <div className="heroGraphic" aria-hidden="true">
        <div className="medicalOrbit">
          <div className="kidneys">
            <span className="kidney leftKidney"></span>
            <span className="kidney rightKidney"></span>
            <span className="ureter"></span>
          </div>
          <div className="pulseLine"></div>
        </div>
      </div>

      <div className="heroList">
        <div><strong>Evidence Based</strong><span>Latest guidelines and research</span></div>
        <div><strong>Multilingual</strong><span>Available in multiple languages</span></div>
        <div><strong>Multimedia Learning</strong><span>Videos, presentations, infographics</span></div>
        <div><strong>Patient Friendly</strong><span>Simple kidney health education</span></div>
      </div>

      <div className="searchBox">
        <input placeholder="Search for topics, diseases, symptoms, treatments..." />
        <button>Search</button>
      </div>
    </section>
  );
}
