function HomePage() {
  return (
    <section
      className="route-page"
      aria-labelledby="home-page-title"
    >
      <p className="route-eyebrow">Ana Sayfa</p>

      <h1 id="home-page-title">
        React Router Öğrenme Projesi
      </h1>

      <p className="route-description">
        Bu uygulamada URL ile React componentleri arasında bağlantı
        kuruyoruz.
      </p>

      <div className="route-card-grid">
        <article className="route-card">
          <h2>React Router</h2>
          <p>
            URL değiştiğinde hangi sayfa componentinin gösterileceğini
            yönetir.
          </p>
        </article>

        <article className="route-card">
          <h2>Client-side Navigation</h2>
          <p>
            Sayfa tamamen yenilenmeden uygulama içinde farklı bölümlere
            geçmeyi sağlar.
          </p>
        </article>
      </div>
    </section>
  );
}

export default HomePage;