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

  const [submitMessage, setSubmitMessage] =
    useState("");

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const fieldName = event.target.name as keyof FormValues;
    const fieldValue = event.target.value;

    setFormValues((previousValues) => ({
      ...previousValues,
      [fieldName]: fieldValue,
    }));

    if (submitMessage) {
      setSubmitMessage("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Gönderilen form:", formValues);

    setSubmitMessage(
      `Teşekkürler ${formValues.fullName}. Mesajın başarıyla alındı.`,
    );

    setFormValues(initialFormValues);
  }

  return (
    <section
      className="contact-form-section"
      aria-labelledby="contact-form-title"
    >
      <div className="contact-form-heading">
        <p className="eyebrow">Week 06 Form Practice</p>

        <h2 id="contact-form-title">
          İletişim Formu
        </h2>

        <p>
          Form alanları React state’i tarafından yönetilir ve
          gönderimden sonra temizlenir.
        </p>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="contact-form-field">
          <label htmlFor="fullName">
            Ad Soyad
          </label>

          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleInputChange}
            aria-describedby="fullName-help"
            autoComplete="name"
            placeholder="Örn: Emir Şeren"
            required
          />

          <p
            id="fullName-help"
            className="contact-form-help"
          >
            Sana hitap edebilmemiz için adını ve soyadını yaz.
          </p>
        </div>

        <div className="contact-form-field">
          <label htmlFor="email">
            E-posta
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            aria-describedby="email-help"
            autoComplete="email"
            placeholder="ornek@mail.com"
            required
          />

          <p
            id="email-help"
            className="contact-form-help"
          >
            Sana dönüş yapabileceğimiz geçerli bir e-posta adresi yaz.
          </p>
        </div>

        <div className="contact-form-field">
          <label htmlFor="message">
            Mesaj
          </label>

          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
            aria-describedby="message-help"
            placeholder="Mesajını yaz..."
            rows={5}
            required
          />

          <p
            id="message-help"
            className="contact-form-help"
          >
            Mesajını mümkün olduğunca açık ve anlaşılır şekilde yaz.
          </p>
        </div>

        <button
          className="contact-form-submit"
          type="submit"
        >
          Gönder
        </button>

        {submitMessage && (
          <p
            className="contact-form-success"
            role="status"
            aria-live="polite"
          >
            {submitMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default AccessibleContactForm;