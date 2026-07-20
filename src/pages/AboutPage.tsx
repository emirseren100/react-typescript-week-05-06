import UserStoreCard from "../components/UserStoreCard";

function AboutPage() {
  return (
    <section
      className="route-page"
      aria-labelledby="about-page-title"
    >
      <p className="route-eyebrow">
        Hakkımda
      </p>

      <h1 id="about-page-title">
        Emir Şeren
      </h1>

      <p className="route-description">
        React, TypeScript, frontend ve full-stack
        geliştirme alanlarında kendimi geliştiriyorum.
      </p>

      <article className="route-card">
        <h2>Bu Haftanın Hedefi</h2>

        <p>
          Form yönetimi, React Router,
          erişilebilirlik ve temel global state
          mantığını öğrenmek.
        </p>
      </article>

      <UserStoreCard />
    </section>
  );
}

export default AboutPage;