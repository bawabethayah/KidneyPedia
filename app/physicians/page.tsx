import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const topics = [
  "Chronic Kidney Disease",
  "Acute Kidney Injury",
  "Dialysis",
  "Glomerular Diseases",
  "Kidney Transplantation",
  "Hypertension",
  "Electrolytes",
  "Onco-Nephrology",
];

export default function PhysiciansPage() {
  return (
    <main>
      <Navbar />

      <section className="pageHero">
        <h1>Physicians Hub</h1>
        <p>
          Structured nephrology education for physicians, fellows, residents,
          and healthcare learners.
        </p>
      </section>

      <section className="pageGrid">
        {topics.map((topic) => (
          <article className="learningCard" key={topic}>
            <h3>{topic}</h3>
            <p>YouTube lecture, presentation, infographic, references, and multilingual content.</p>
            <div>
              <span>Video</span>
              <span>Slides</span>
              <span>Infographic</span>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
