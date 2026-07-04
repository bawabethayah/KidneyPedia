const features = [
  ["Physicians Hub", "In-depth medical content, guidelines, presentations, and clinical resources."],
  ["Patient Education", "Easy-to-understand information about kidney diseases, treatments, and healthy living."],
  ["Infographics", "Visual summaries of key nephrology topics for quick learning."],
  ["Resources", "Access guidelines, articles, books, and useful nephrology references."],
];

export default function FeatureCards() {
  return (
    <section className="featureGrid">
      {features.map(([title, text]) => (
        <article className="featureCard" key={title}>
          <div className="icon">✦</div>
          <h3>{title}</h3>
          <p>{text}</p>
          <a href="#">Explore →</a>
        </article>
      ))}
    </section>
  );
}
