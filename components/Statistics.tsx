const stats = [
  ["80+", "Topics"],
  ["40+", "Video Lessons"],
  ["120+", "Infographics"],
  ["4", "Languages"],
];

export default function Statistics() {
  return (
    <section className="statsSection">
      {stats.map(([number, label]) => (
        <div className="statCard" key={label}>
          <strong>{number}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
