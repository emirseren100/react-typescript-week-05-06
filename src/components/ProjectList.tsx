import Card from "./Card";
import type { Project } from "../types/project";

type ProjectListProps = {
  projects: Project[];
};

function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="project-list">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;