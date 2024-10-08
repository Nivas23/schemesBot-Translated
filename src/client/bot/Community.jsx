import React from "react";
import { useTranslation } from 'react-i18next';

export default function Community(props) {

  const { t, i18n } = useTranslation();

  let botMessage = `${t("Are you Differently abled ?")}`;
  let widget = "DiffAbled";
  const setCommunity = (event) => {
    let value = event.target.textContent;
    props.setState((state) => ({ ...state, community: value }));
    document.getElementById("community").style.display = "none";
    props.actions.handleEvent(value, botMessage, widget);
  };

  return (
    <div id="community" className="options-container">
      <button
        className="btn"
        onClick={(event) => {
          setCommunity(event);
        }}
      >
        BC/MBC
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setCommunity(event);
        }}
      >
        SC/ST
      </button>
    </div>
  );
}

