const topics = ['CKD', 'AKI', 'Dialysis', 'Glomerular Diseases', 'Kidney Transplantation', 'Hypertension', 'Electrolytes', 'Onco-Nephrology'];
const socials = ['YouTube', 'LinkedIn', 'Facebook', 'Instagram', 'X', 'Threads'];

export default function Home() {
  return (
    <main>
      <header className="header">
        <nav className="nav">
          <a className="logo" href="#home">Kidney <span>Pedia</span></a>
          <div className="links">
            <a href="#physicians">Physicians</a>
            <a href="#infographics">Infographics</a>
            <a href="#patients">Patients</a>
            <a href="#resources">Resources</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
            <select className="lang" aria-label="Choose language">
              <option>English</option><option>Arabic</option><option>French</option><option>Spanish</option>
            </select>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div>
            <span className="badge">Multilingual Nephrology Education Platform</span>
            <h1>Kidney Pedia</h1>
            <p>Connected nephrology education for physicians and patients: teaching presentations, YouTube lessons, infographics, and patient-friendly kidney health resources.</p>
            <div className="buttons">
              <a className="btn primary" href="#physicians">Physicians Hub</a>
              <a className="btn secondary" href="#patients">Patient Education</a>
              <a className="btn secondary" href="#topics">Browse Topics</a>
            </div>
          </div>
          <div className="visual" aria-hidden="true"><div className="kidney" /></div>
        </div>
      </section>

      <section id="physicians">
        <div className="container">
          <h2 className="section-title">Built for Physicians and Patients</h2>
          <p className="section-subtitle">Start with a simple educational hub. Later, Kidney Pedia can grow into a full platform with upload dashboards, search, multilingual topic pages, and certificates.</p>
          <div className="grid">
            <div className="card"><h3>Physician Education</h3><p>Teaching topics, presentations, YouTube video lessons, references, and structured learning pathways for nephrology professionals.</p></div>
            <div className="card"><h3>Infographics</h3><p>Each medical topic can include matching infographic content connected to LinkedIn, Facebook, Instagram, X, and Threads.</p></div>
            <div className="card"><h3>Patient Education</h3><p>Clear, reassuring kidney health information written for patients and families in simple language.</p></div>
          </div>
        </div>
      </section>

      <section id="topics" className="soft">
        <div className="container">
          <h2 className="section-title">Core Nephrology Topics</h2>
          <p className="section-subtitle">These starter cards will become full topic pages with videos, presentations, infographics, patient versions, references, and language options.</p>
          <div className="topic-grid">
            {topics.map((topic) => <div className="topic-card" key={topic}><h3>{topic}</h3><p>YouTube lesson · Presentation · Infographic · Patient version · Languages</p></div>)}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="container">
          <h2 className="section-title">Learn in Your Preferred Language</h2>
          <p className="section-subtitle">The website, presentations, infographics, videos, and patient education pages can be organized by language.</p>
          <div className="tags"><span className="tag">English</span><span className="tag">العربية</span><span className="tag">Français</span><span className="tag">Español</span></div>
        </div>
      </section>

      <section id="infographics">
        <div className="container">
          <h2 className="section-title">Connected Educational Network</h2>
          <p className="section-subtitle">Each topic can connect a YouTube teaching presentation with matching infographics shared across social platforms.</p>
          <div className="tags">{socials.map((s) => <span className="tag" style={{color:'#071b3a'}} key={s}>{s}</span>)}</div>
        </div>
      </section>

      <section id="patients" className="soft">
        <div className="container">
          <h2 className="section-title">Patient Education</h2>
          <div className="grid">
            <div className="card"><h3>Kidney Disease Basics</h3><p>Simple explanations of kidney function, common conditions, and how patients can prepare for clinic visits.</p></div>
            <div className="card"><h3>Blood Pressure & Diabetes</h3><p>Patient-friendly guidance on two of the most important risk factors for kidney disease.</p></div>
            <div className="card"><h3>Dialysis & Lifestyle</h3><p>Introductory education about dialysis, nutrition, medications, and when to seek professional care.</p></div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <h2 className="section-title">Nephrology Physicians Team</h2>
          <div className="grid">
            <div className="card"><h3>Physician Editor</h3><p>Topic development, scientific review, and education planning.</p></div>
            <div className="card"><h3>Infographic Lead</h3><p>Visual education, social media adaptation, and patient communication.</p></div>
            <div className="card"><h3>Content Coordinator</h3><p>Language organization, upload workflow, and resource archive.</p></div>
          </div>
        </div>
      </section>

      <section id="resources" className="soft">
        <div className="container">
          <h2 className="section-title">Resources</h2>
          <p className="section-subtitle">Future filters: audience, topic, format, language, video, presentation, infographic, and patient guide.</p>
          <p className="disclaimer">Kidney Pedia is for education only and does not replace personalized medical advice. Patients should consult their healthcare professional.</p>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact and Collaborate</h2>
          <p className="section-subtitle">For collaborations, teaching content, infographic partnerships, and future platform development.</p>
          <div className="buttons"><a className="btn primary" href="mailto:researchandrenal@gmail.com">Email Kidney Pedia</a></div>
        </div>
      </section>

      <footer className="footer"><div className="footer-inner"><strong>Kidney Pedia</strong><span>Physicians · Patients · Infographics · Multilingual Education</span></div></footer>
    </main>
  );
}
