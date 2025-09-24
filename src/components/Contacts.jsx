import { useTranslation } from "react-i18next";
import Button from "./Button";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Contacts.scss";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

function Contacts() {
  const { t } = useTranslation();

  const [showMessage, setShowMessage] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    status: null,
    error: null,
  });
  const [captcha, setCaptcha] = useState(null);

  function onChangeCaptcha(value) {
    setCaptcha(value);
  }

  const displayTemporaryMessage = () => {
    setShowMessage(true);

    const timer = setTimeout(() => {
      setShowMessage(false);
      setSubmissionStatus({
        status: null,
        error: null,
      });
    }, 5000);

    return () => clearTimeout(timer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: inputValue,
          message: messageValue,
          "g-recaptcha-response": captcha
        }),
      });

      if (!response.ok) {
        console.log(response.status);
        const errorText = await response.text();
        throw new Error(JSON.parse(errorText)?.error);
      }

      const data = await response.json();

      setInputValue("");
      setMessageValue("");
      setSubmissionStatus({
        error: null,
        status: data.message
      });
      displayTemporaryMessage();
    } catch (error) {
      console.error(error);
      setSubmissionStatus({
        error: error.message,
        status: null,
      });
      setShowMessage(true);
    }

    setIsLoading(false);
  };

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__title">{t("Связаться")}</div>
      <div className="contacts__subtitle">{t("Остались вопросы")}?</div>
      <div className="contacts__wrp">
        <div className="contacts__info">
          {t("Заполните форму и")}&nbsp;{t("мы")}&nbsp;
          {t("обязательно ответим")}!
        </div>
        {showMessage && (
          <div
            className={[
              "contacts__status",
              submissionStatus.error && "__error",
            ].join(" ")}
          >
            {submissionStatus.status || submissionStatus.error}
          </div>
        )}
        <form action="" className="contacts__form" onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onInput={(e) => setInputValue(e.target.value)}
            maxLength="50"
            type="text"
            className="contacts__input"
            placeholder={t("Ваш Email или Telegram")}
            required
          />
          <textarea
            name="message"
            id="message"
            maxLength="2000"
            value={messageValue}
            onInput={(e) => setMessageValue(e.target.value)}
            className="contacts__textaria"
            placeholder={t("Ваш вопрос")}
          />
          <ReCAPTCHA
            size={window.screen.width <= 704 ? 'compact' : 'normal'}
            sitekey="6Ldq9tErAAAAAONaIAWNe0L1pP9NYj47DgBUG_tT"
            theme="light"
            onChange={onChangeCaptcha}
          />
          <Button type="submit" className="contacts__submit" disabled={!captcha}>
            {isLoading ? <BeatLoader color="#FFF" /> : t("Отправить")}
          </Button>
        </form>
      </div>
      <div className="contacts__wrp">
        <div className="contacts__text">
          {t("Вы")}&nbsp;{t("всегда можете связаться с")}&nbsp;{t("нами в")}
          &nbsp;
          {t("Telegram или написать на")}&nbsp;{t("электронную почту")}!
        </div>
        <div className="contacts__social">
          <div className="contacts__element">
            <a
              className="contacts__tg"
              href="tg://resolve?domain=asdhere"
              target="blank"
            />
            <span>@asdhere</span>
          </div>
          <div className="contacts__element">
            <a className="contacts__mail" href="mailto:supp@asdhere.net" />
            <span>supp@asdhere.net</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
