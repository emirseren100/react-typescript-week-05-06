import TodoApp from "../components/TodoApp";

function ProjectsPage() {
  return (
    <section
      className="route-page"
      aria-labelledby="projects-page-title"
    >
      <p className="route-eyebrow">
        Projeler
      </p>

      <h1 id="projects-page-title">
        Öğrenme Projelerim
      </h1>

      <p className="route-description">
        İlk haftalarda geliştirdiğim uygulama örnekleri.
      </p>

      <div className="route-card-grid">
        <article className="route-card">
          <h2>Todo App</h2>

          <p>
            Array state, event yönetimi ve filtreleme
            mantığını öğrenmek için oluşturuldu.
          </p>
        </article>

        <article className="route-card">
          <h2>Portfolio</h2>

          <p>
            Semantic HTML, responsive CSS ve
            erişilebilirlik temellerini içeriyor.
          </p>
        </article>

        <article className="route-card">
          <h2>Tic-Tac-Toe</h2>

          <p>
            React component, props, state ve immutable
            update mantığını kullanıyor.
          </p>
        </article>
      </div>

      <TodoApp />
    </section>
  );
}

export default ProjectsPage;