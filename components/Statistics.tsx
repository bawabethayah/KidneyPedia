const stats = [
  {
    icon: "👥",
    title: "Trusted by Professionals",
    text: "Worldwide",
  },
  {
    icon: "📖",
    title: "1000+ Topics",
    text: "And growing",
  },
  {
    icon: "🌐",
    title: "Available In",
    text: "Multiple Languages",
  },
  {
    icon: "🛡️",
    title: "Evidence Based",
    text: "And reliable",
  },
];

export default function Statistics() {
  return (
    <section className="statsBar">
      {stats.map((item) => (
        <div className="statsItem" key={item.title}>
          <span className="statsIcon">{item.icon}</span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
