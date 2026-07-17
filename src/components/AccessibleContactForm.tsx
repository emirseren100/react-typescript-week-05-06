import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import "./AccessibleContactForm.css";

type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

const initialFormValues: FormValues = {
  fullName: "",
  email: "",
  message: "",
};

function AccessibleContactForm() {
  const [formValues, setFormValues] =
    useState<FormValues>(initialFormValues);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const fieldName = event.target.name as keyof FormValues;
    const fieldValue = event.target.value;

    setFormValues((previousValues) => ({
      ...previousValues,
      [fieldName]: fieldValue,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Gönderilen form:", formValues);
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-heading">
        <p className="eyebrow">Week 06 Form Practice</p>
        <h2>İletişim Formu</h2>
        <p>
          Bu formun input değerleri React state’i tarafından
          yönetilmektedir.
        </p>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <label className="contact-form-field">
          <span>Ad Soyad</span>

          <input
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleInputChange}
            placeholder="Örn: Emir Şeren"
          />
        </label>

        <label className="contact-form-field">
          <span>E-posta</span>

          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="ornek@mail.com"
          />
        </label>

        <label className="contact-form-field">
          <span>Mesaj</span>

          <textarea
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
            placeholder="Mesajını yaz..."
            rows={5}
          />
        </label>

        <button
          className="contact-form-submit"
          type="submit"
        >
          Gönder
        </button>
      </form>
    </section>
  );
}

export default AccessibleContactForm;