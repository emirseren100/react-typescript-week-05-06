import { useState } from "react";
import ProjectList from "./ProjectList";
import type { Project } from "../types/project";

type ViewState = "loading" | "error" | "empty" | "success";

type ProjectStateDemoProps = {
  projects: Project[];
};

function ProjectStateDemo({ projects }: ProjectStateDemoProps) {
  const [viewState, setViewState] = useState<ViewState>("success");

function renderContent() {
  if (viewState === "loading") {
    return (
      <div className="feedback-card feedback-loading">
        <h3>Projeler yükleniyor...</h3>
        <p>Lütfen kısa bir süre bekleyin.</p>
      </div>
    );
  }

  if (viewState === "error") {
    return (
      <div className="feedback-card feedback-error">
        <h3>Projeler alınamadı</h3>
        <p>Bir hata oluştu. Daha sonra tekrar deneyin.</p>

        <button onClick={() => setViewState("success")}>
          Tekrar Dene
        </button>
      </div>
    );
  }

  if (viewState === "empty" || projects.length === 0) {
    return (
      <div className="feedback-card feedback-empty">
        <h3>Henüz proje bulunmuyor</h3>
        <p>
          Burada gösterebileceğimiz bir proje yok. Yeni projeler eklendiğinde
          bu alanda görünecek.
        </p>

        <button onClick={() => setViewState("success")}>
          Örnek Projeleri Göster
        </button>
      </div>
    );
  }

  return <ProjectList projects={projects} />;
}

  return (
    <section className="project-state-demo">
<div className="state-controls">
  <button
    className={viewState === "success" ? "is-active" : ""}
    onClick={() => setViewState("success")}
  >
    Başarılı
  </button>

  <button
    className={viewState === "loading" ? "is-active" : ""}
    onClick={() => setViewState("loading")}
  >
    Yükleniyor
  </button>

  <button
    className={viewState === "error" ? "is-active" : ""}
    onClick={() => setViewState("error")}
  >
    Hata
  </button>

  <button
    className={viewState === "empty" ? "is-active" : ""}
    onClick={() => setViewState("empty")}
  >
    Boş
  </button>
</div>

      {renderContent()}
    </section>
  );
}

export default ProjectStateDemo;    