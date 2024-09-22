import React from "react";

import { useTranslation } from 'react-i18next';

export default function DiffAbled(props) {

  const { t, i18n } = useTranslation();

  let botMessage = `${t("Which category best describes you?")}`;
  let widget = "Student";
  const setDiffAbled = (event) => {
    let value = event.target.textContent;
    props.setState((state) => ({ ...state, differentlyAbled: value }));
    document.getElementById("diff-abled").style.display = "none";
    props.actions.handleEvent(value, botMessage, widget);
  };
  return (
    <div id="diff-abled" className="options-container">
      <button
        className="btn"
        onClick={(event) => {
          setDiffAbled(event);
        }}
      >
        {t("Yes")}
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setDiffAbled(event);
        }}
      >
       {t("No")} 
      </button>
    </div>
  );
}
