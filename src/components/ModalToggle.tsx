import { useState } from "react";

function ModalToggle() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleModal() {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  }

  return (
    <section className="state-card">
      <h2>Modal Toggle</h2>

      <div className="button-group">
        <button onClick={openModal}>Modal Aç</button>
        <button onClick={closeModal}>Modal Kapat</button>
        <button onClick={toggleModal}>Aç / Kapat</button>
      </div>

      {isOpen && (
        <div className="modal-box">
          <h3>React Modal</h3>
          <p>Bu alan isOpen state'i true olduğunda görünür.</p>
          <button onClick={closeModal}>Kapat</button>
        </div>
      )}
    </section>
  );
}

export default ModalToggle;