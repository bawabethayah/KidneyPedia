import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const patientTopics = [
  "Understanding Kidney Disease",
  "Blood Pressure and Kidneys",
  "Diabetes and Kidneys",
  "Dialysis Basics",
  "Kidney-Friendly Lifestyle",
  "When to See a Kidney Doctor",
];

export default function PatientsPage() {
  return (
    <main>
      <Navbar />

      <section className="pageHero patientHero">
        <h1>Patient Education</h1>
        <p>
          Simple, clear kidney health education for patients, families, and caregivers.
        </p>
      </section>

      <section className="pageGrid patientGrid">
        {patientTopics.map((topic) => (
          <article className="learningCard patientCard" key={topic}>
            <h3>{topic}</h3>
            <p>
              Easy explanations, practical steps, warning signs, and questions to ask your healthcare team.
            </p>
            <a href="#">Read guide →</a>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
