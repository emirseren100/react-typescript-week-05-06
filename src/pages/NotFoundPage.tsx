import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section
      className="route-page not-found-page"
      aria-labelledby="not-found-title"
    >
      <p className="not-found-code">
        404
      </p>

      <p className="route-eyebrow">
        Sayfa Bulunamadı
      </p>

      <h1 id="not-found-title">
        Aradığın sayfaya ulaşamadık
      </h1>

      <p className="route-description">
        Adres yanlış yazılmış, sayfa taşınmış veya kaldırılmış olabilir.
      </p>

      <Link
        className="not-found-link"
        to="/"
      >
        Ana sayfaya dön
      </Link>
    </section>
  );
}

export default NotFoundPage;