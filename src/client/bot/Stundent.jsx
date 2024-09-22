import React, { useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";

export default function Student(props) {
  const { t, i18n } = useTranslation();

  let botMessage = `${t("Let me gather the schemes for you.")}`;
  let widget = "SchemesList";
  const setStudent = (event) => {
    let value = event.target.textContent;
    let newState = { ...props.state, category: value };
    props.setState(newState);
    props.actions.handleDb(newState);
    document.getElementById("student").style.display = "none";
    props.actions.handleEvent(value, botMessage, widget);
  };

  // props.actions.handleDb(props.state)
  // useEffect(() => {
  //   props.actions.handleDb(props.state);
  //   console.log(props.state.category);
  // }, [props.state.category]);
  return (
    <div id="student" className="options-container">
      <button className="btn" onClick={setStudent}>
        {t("Occupations.Farmers")}
      </button>
      <button className="btn" onClick={setStudent}>
        {t("Occupations.Manufacturers")}
      </button>
      <button className="btn" onClick={setStudent}>
        {t("Occupations.Students")}
      </button>
      <button className="btn" onClick={setStudent}>
        {t("Occupations.HandloomWeavers")}
      </button>
      <button className="btn" onClick={setStudent}>
        {t("Occupations.Journalists")}
      </button>
      <button className="btn" onClick={setStudent}>
        {t("Occupations.Unemployed")}
      </button>
      <button className="btn" onClick={setStudent}>
        {t("Occupations.GovernmentEmployees")}
      </button>
    </div>
  );
}
