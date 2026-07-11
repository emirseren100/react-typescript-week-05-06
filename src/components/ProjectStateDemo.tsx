import { useState } from "react";
import ProjectList from "./ProjectList";
import type { Project } from "../types/project";

type ViewState = "loading" | "error" | "success";

type ProjectStateDemoProps = {
  projects: Project[];
};

function ProjectStateDemo({ projects }: ProjectStateDemoProps) {
  const [viewState, setViewState] = useState<ViewState>("success");

  function renderContent() {
    if (viewState === "loading") {
      return (
        <div className="feedback-card">
          <h3>Projeler yükleniyor...</h3>
          <p>Lütfen kısa bir süre bekleyin.</p>
        </div>
      );
    }

    if (viewState === "error") {
      return (
        <div className="feedback-card">
          <h3>Projeler alınamadı</h3>
          <p>Bir hata oluştu. Daha sonra tekrar deneyin.</p>
        </div>
      );
    }

    return <ProjectList projects={projects} />;
  }

  return (
    <section className="project-state-demo">
      <div className="state-controls">
        <button onClick={() => setViewState("success")}>
          Başarılı
        </button>

        <button onClick={() => setViewState("loading")}>
          Yükleniyor
        </button>

        <button onClick={() => setViewState("error")}>
          Hata
        </button>
      </div>

      {renderContent()}
    </section>
  );
}

export default ProjectStateDemo;