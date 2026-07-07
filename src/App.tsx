import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

const projects = [
  {
    title: "Week 03 Todo App",
    description:
      "DOM, event, array, object ve localStorage kullanılarak yapılmış görev listesi uygulaması.",
    tech: "JavaScript • DOM • localStorage",
  },
  {
    title: "Week 04 Portfolio",
    description:
      "Semantic HTML, CSS Grid, responsive tasarım ve erişilebilirlik temelleriyle hazırlanmış portfolyo sayfası.",
    tech: "HTML • CSS • Responsive",
  },
  {
    title: "Week 05 React Intro",
    description:
      "React component, JSX, import/export ve props mantığını öğrenmek için hazırlanmış başlangıç projesi.",
    tech: "React • TypeScript • Vite",
  },
];

function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <section className="section-title">
          <p className="eyebrow">Component Practice</p>
          <h2>Projeler</h2>
          <p>
            Bu sayfa React component, import/export ve props mantığını öğrenmek
            için hazırlandı.
          </p>
        </section>

        <section className="project-list">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;