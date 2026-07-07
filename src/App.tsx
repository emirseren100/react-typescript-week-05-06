import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

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
          <Card />
        </section>
      </main>
    </>
  );
}

export default App;