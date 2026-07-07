import Button from "./Button";
import type { Project } from "../types/project";

type CardProps = {
  project: Project;
};

function Card({ project }: CardProps) {
  return (
    <article className="project-card">
      <p className="card-tech">{project.tech}</p>

      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <div className="card-meta">
        <span>{project.category}</span>
        <span className={`status-badge status-${project.status}`}>
          {project.status}
        </span>
      </div>

      <Button label="Projeyi Gör" />
    </article>
  );
}

export default Card;