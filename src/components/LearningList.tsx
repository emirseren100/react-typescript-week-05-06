import "./LearningList.css";

export type LearningItem = {
  id: number;
  title: string;
  category: string;
  completed: boolean;
};

type LearningListProps = {
  items: LearningItem[];
};

function LearningList({ items }: LearningListProps) {
  return (
    <section className="learning-list-section">
      <div className="learning-list-heading">
        <p className="eyebrow">Week 06 Practice</p>
        <h2>Öğrenme Listesi</h2>
        <p>
          Array içindeki veriler map kullanılarak React elementlerine
          dönüştürülüyor.
        </p>
      </div>

      <ul className="learning-list">
        {items.map((item) => (
          <li key={item.id} className="learning-item">
            <div>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>

            <span
              className={
                item.completed
                  ? "item-status item-status-completed"
                  : "item-status"
              }
            >
              {item.completed ? "Tamamlandı" : "Devam ediyor"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LearningList;