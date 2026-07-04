const topics = ['CKD', 'AKI', 'Dialysis', 'Glomerular Diseases', 'Kidney Transplantation', 'Hypertension', 'Electrolytes', 'Onco-Nephrology'];
const patientTopics = ['Understanding Kidney Disease', 'Blood Pressure and Kidneys', 'Diabetes and Kidneys', 'Dialysis Basics', 'Kidney-Friendly Lifestyle', 'When to See a Kidney Doctor'];
const languages = ['English', 'Arabic', 'French', 'Spanish'];
const socials = ['YouTube', 'LinkedIn', 'Facebook', 'Instagram', 'X', 'Threads'];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">Kidney Pedia</a>
        <nav>
          <a href="#physicians">Physicians</a>
          <a href="#infographics">Infographics</a>
          <a href="#patients">Patients</a>
          <a href="#resources">Resources</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
        <select aria-label="Language selector">
          {languages.map((language) => <option key={language}>{language}</option>)}
        </select>
      </header>

      <section id="home" className="hero">
        <div className="heroContent">
          <span className="eyebrow">Nephrology Education Platform</span>
          <h1>Kidney Pedia</h1>
          <p className="subtitle">Connected Nephrology Education for Physicians and Patients</p>
          <p className="heroText">A multilingual kidney education hub for teaching presentations, YouTube lessons, infographics, and patient-friendly learning.</p>
          <div className="actions">
            <a href="#physicians" className="button primary">Physicians Hub</a>
            <a href="#patients" className="button secondary">Patient Education</a>
            <a href="#resources" className="button ghost">Browse Topics</a>
          </div>
        </div>
        <div className="kidneyCard" aria-label="Abstract kidney education graphic">
          <div className="orb"></div>
          <h2>Kidney Learning Network</h2>
          <p>Video + Presentation + Infographic + Patient Version</p>
        </div>
      </section>

      <section className="section intro">
        <div className="sectionTitle">
          <span className="eyebrow dark">All connected together</span>
          <h2>One topic, multiple learning formats</h2>
          <p>Each nephrology topic can connect physician presentations to YouTube, pair them with social-ready infographics, and include a clear patient education version.</p>
        </div>
        <div className="grid three">
          <article className="card"><h3>Physician Education</h3><p>Teaching topics, clinical presentations, video lessons, references, and structured learning for nephrologists and physicians.</p></article>
          <article className="card"><h3>Infographics</h3><p>Shareable visual summaries linked to LinkedIn, Facebook, Instagram, X, and Threads.</p></article>
          <article className="card"><h3>Patient Education</h3><p>Simple, reassuring kidney health explanations for patients and families.</p></article>
        </div>
      </section>

      <section id="physicians" className="section light">
        <div className="sectionTitle"><h2>Core Nephrology Topics</h2><p>Start with the basics, then expand into a full educational library.</p></div>
        <div className="grid four">
          {topics.map((topic) => <article className="topic" key={topic}><h3>{topic}</h3><p>YouTube lesson</p><p>Presentation link</p><p>Infographic</p><span>Multilingual</span></article>)}
        </div>
      </section>

      <section id="infographics" className="section split">
        <div>
          <span className="eyebrow dark">Infographics Hub</span>
          <h2>Connected Educational Network</h2>
          <p>Each topic can include matching infographics and direct links to your social pages.</p>
        </div>
        <div className="socials">
          {socials.map((social) => <a href="#" key={social}>{social}</a>)}
        </div>
      </section>

      <section id="patients" className="section light">
        <div className="sectionTitle"><h2>Patient Education</h2><p>Clear kidney health education written for patients and families.</p></div>
        <div className="grid three">
          {patientTopics.map((topic) => <article className="card" key={topic}><h3>{topic}</h3><p>Patient-friendly explanation, practical advice, and links to related physician-level content.</p></article>)}
        </div>
      </section>

      <section id="resources" className="section">
        <div className="sectionTitle"><h2>Resources</h2><p>Future searchable archive with filters for audience, topic, format, and language.</p></div>
        <div className="filters"><button>Audience</button><button>Topic</button><button>Format</button><button>Language</button></div>
      </section>

      <section className="section language">
        <h2>Learn in Your Preferred Language</h2>
        <p>Website pages, presentations, infographics, videos, and patient education can be organized by language.</p>
        <div className="languageTags">{languages.map((language) => <span key={language}>{language}</span>)}</div>
      </section>

      <section id="team" className="section light">
        <div className="sectionTitle"><h2>Nephrology Physicians Team</h2><p>Introduce your educators and collaborators.</p></div>
        <div className="grid three">
          {[1,2,3].map((i) => <article className="profile" key={i}><div className="avatar">Dr</div><h3>Physician Profile {i}</h3><p>Nephrology educator and Kidney Pedia contributor.</p></article>)}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div><h2>Contact and Collaborate</h2><p>For education partnerships, topic contributions, and platform collaboration.</p></div>
        <form><input placeholder="Name" /><input placeholder="Email" /><textarea placeholder="Message" /><button type="button">Send Message</button></form>
      </section>

      <footer>
        <strong>Kidney Pedia</strong>
        <p>Educational content only. This website does not replace personalized medical advice. Patients should consult their healthcare professional.</p>
        <p>© 2026 Kidney Pedia</p>
      </footer>
    </main>
  );
}
