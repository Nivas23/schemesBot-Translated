import React from "react";

import { useTranslation } from 'react-i18next';

export default function Options(props) {

  const { t, i18n } = useTranslation();

  let botMessage = `${t("Let's start with the details.Your Gender")}`;
  let widget = "Gender";
  // console.log(props);
  const Suggest = (event) => {
    let value = event.target.textContent;
    props.actions.handleEvent(value, botMessage, widget);
    document.getElementById("options").style.display = "none"; //TODO Have to fix
  };
  const Search = (event) => {
    let value = event.target.textContent;
    let botMessage =
      `${t("Sure! Which government scheme are you interested in? Please provide the scheme name or a brief description.")}`;
    props.setState((state) => ({ ...state, isSearch: true }));
    props.actions.handleEvent(value, botMessage, null);
    document.getElementById("options").style.display = "none"; //TODO Have to fix
  };

  const latest = (event) => {
    let value = event.target.textContent;
    let botMessage = `${t("Here are some of the latest schemes.")}`;
    let widget = "LatestSchemes";
    props.actions.handleEvent(value, botMessage, widget);
    document.getElementById("options").style.display = "none";
  };

  const faq = (event) => {
    let value = event.target.textContent;
    let botMessage = `${t("Here are some of the frequently asked questions")}`;
    let widget = "FAQ";
    props.actions.handleEvent(value, botMessage, widget);
    document.getElementById("options").style.display = "none";
  };

  return (
    <div id="options" className="options-container">
      <button className="btn" onClick={(event) => Search(event)}>
        {t("Search")} <br /> {t("scheme")}
      </button>
      <button className="btn" onClick={(event) => latest(event)}>
        {t("Latest")} <br /> {t("schemes")}
      </button>
      <button className="btn" onClick={(event) => Suggest(event)}>
        {t("Suggest")} <br /> {t("scheme")}
      </button>
      <button className="btn" onClick={(event) => faq(event)}>
        {t("FAQ")}
      </button>
    </div>
  );
}
