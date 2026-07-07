import Button from "./Button";

function Card() {
  return (
    <article className="project-card">
      <h2>Week 03 Todo App</h2>
      <p>
        DOM, event, array, object ve localStorage kullanılarak yapılmış görev
        listesi uygulaması.
      </p>
      <Button />
    </article>
  );
}

export default Card;