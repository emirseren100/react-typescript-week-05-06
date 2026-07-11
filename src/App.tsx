import Counter from "./components/Counter";
import ModalToggle from "./components/ModalToggle";
import InputPreview from "./components/InputPreview";
import Header from "./components/Header";
import ProjectStateDemo from "./components/ProjectStateDemo";
import type { Project } from "./types/project";
import "./App.css";

const projects: Project[] = [
  {
    id: 1,
    title: "Week 03 Todo App",
    description:
      "DOM, event, array, object ve localStorage kullanılarak yapılmış görev listesi uygulaması.",
    tech: "JavaScript • DOM • localStorage",
    category: "Frontend Practice",
    status: "completed",
  },
  {
    id: 2,
    title: "GameDev Task Manager",
    description:
      "Oyun geliştirme sürecinde görevleri takip etmek için tasarlanmış proje kartı ve görev yönetimi fikri.",
    tech: "React • TypeScript • Components",
    category: "Game Tool",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Semantic HTML, CSS Grid, responsive tasarım ve erişilebilirlik temelleriyle hazırlanmış kişisel portfolyo.",
    tech: "HTML • CSS • GitHub Pages",
    category: "Portfolio",
    status: "planned",
  },
];

function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <section className="section-title">
          <p className="eyebrow">Component Practice</p>
          <h2>Oyun ve Proje Kartları</h2>
          <p>
            Bu sayfa TypeScript props, component parçalama ve array üzerinden
            kart render etme mantığını öğrenmek için hazırlandı.
          </p>
        </section>

<ProjectStateDemo projects={projects} />
        <section className="state-practice">
  <Counter />
  <ModalToggle />
  <InputPreview />
</section>
      </main>
    </>
  );
}

export default App; 