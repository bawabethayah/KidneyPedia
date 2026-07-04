// TopicCards component
import { topics } from "@/data/siteData";

export default function TopicCards() {
  return (
    <section id="topics" className="topicsSection">
      <div className="sectionHeader">
        <h2>Popular Topics</h2>
        <a href="#">View all topics →</a>
      </div>

      <div className="topicGrid">
        {topics.slice(0, 4).map((topic) => (
          <article className="topicCard" key={topic}>
            <div className="topicIcon">🩵</div>
            <div>
              <h3>{topic}</h3>
              <p>Definition, staging, evaluation, and management.</p>
              <a href="#">Learn more →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
