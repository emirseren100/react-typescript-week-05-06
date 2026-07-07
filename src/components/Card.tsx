import Button from "./Button";

type CardProps = {
  title: string;
  description: string;
  tech: string;
};

function Card({ title, description, tech }: CardProps) {
  return (
    <article className="project-card">
      <p className="card-tech">{tech}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button label="Projeyi Gör" />
    </article>
  );
}

export default Card;