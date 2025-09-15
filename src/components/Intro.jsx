import "../styles/Intro.scss";
import LOGO from "../assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import Button from "./Button";

function Intro() {
  const { t } = useTranslation();

  const handleClick = () => {
    const element = document.getElementById("tariffs");
    const startPosition = window.scrollY;
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - 75;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, 200);
      window.scrollTo(0, run);
      if (timeElapsed < 200) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <div className="intro">
      <div className="intro__wrp">
        <img src={LOGO} alt="logo" className="intro__img" />
        <span className="intro__text">
          &mdash;&nbsp;{t("ваш сервер в")}&nbsp;{t("изоляции")}. {t("От")}&nbsp;
          {t("атак")}. {t("От")}&nbsp;{t("сбоев")}. {t("От")}&nbsp;
          {t("любопытных")}.
        </span>
      </div>
      <Button className="intro__btn" onClick={handleClick}>
        {t("Подобрать тариф")}
      </Button>
    </div>
  );
}

export default Intro;
