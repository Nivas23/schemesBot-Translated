import React from "react";
import { useTranslation } from 'react-i18next';



export default function Gender(props) {

  const { t, i18n } = useTranslation();

  // let botMessage = "Enter you age:\n உங்கள் வயதை உள்ளிடவும்";
  let botMessage = `${t("Enter your age")}`;
  // console.log(props);
  const setGender = (event) => {
    let choice = event.target.textContent;
    props.setState((state) => ({ ...state, gender: choice, isAge: true }));
    document.getElementById("gender").style.display = "none";
    props.actions.handleEvent(choice, botMessage);
  };
  return (
    <div id="gender" className="options-container">
      <button className="btn" onClick={(event) => setGender(event)}>
         {`${t("Male")}`}
      </button>
      <button className="btn" onClick={(event) => setGender(event)}>
         {`${t("Female")}`}
      </button>
      <button className="btn" onClick={(event) => setGender(event)}>
         {`${t("Transgender")}`}
      </button>
    </div>
  );
}
