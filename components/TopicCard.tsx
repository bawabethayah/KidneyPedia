type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function TopicCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <article className="topicCard">
      <div className="topicImage">
        <img src={icon} alt={title} />
      </div>

      <div className="topicContent">
        <h3>{title}</h3>

        <p>{description}</p>

        <a href="#">
          Learn more →
        </a>
      </div>
    </article>
  );
}
