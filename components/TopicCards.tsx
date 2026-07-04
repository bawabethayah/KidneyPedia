import TopicCard from "./TopicCard";

const topics = [
  {
    title: "Chronic Kidney Disease",
    description:
      "Definition, staging, evaluation and management.",
    icon: "/icons/ckd.png",
  },

  {
    title: "Dialysis",
    description:
      "Hemodialysis, adequacy and complications.",
    icon: "/icons/dialysis.png",
  },

  {
    title: "Hypertension",
    description:
      "Evaluation and treatment strategies.",
    icon: "/icons/hypertension.png",
  },

  {
    title: "Glomerular Diseases",
    description:
      "Classification, diagnosis and treatment.",
    icon: "/icons/glomerular.png",
  },
];

export default function TopicCards() {
  return (
    <section className="topicsSection">

      <div className="sectionHeader">

        <h2>Popular Topics</h2>

        <a href="#">
          View all →
        </a>

      </div>

      <div className="topicGrid">

        {topics.map((topic) => (

          <TopicCard
            key={topic.title}
            {...topic}
          />

        ))}

      </div>

    </section>
  );
}
