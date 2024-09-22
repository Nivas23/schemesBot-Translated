import React from "react";
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

export default function LangButton(props) {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const currentLanguage = i18n.language;
        i18n.changeLanguage(event.target.value);
        props.setState((state) => ({ ...state, lang: currentLanguage,}));
        console.log(props.state)

    };

//   console.log(props);
//   const handleRestart = () => {
//     props.setState({
//       age: null,
//       category: null,
//       city: null,
//       community: null,
//       differentlyAbled: null,
//       gender: null,
//       isSearch: null,
//       messages: [], // Clear messages array
//     });
//     const botName = "SchemesBot";
//     const botMessage = `Hello! Welcome to ${botName}. How can I assist you today?`;
//     const widget = "Options";
//     // Send initial message to restart the conversation
//     props.actions.handleEvent(null, botMessage, widget);
//   };

  return (
    <div
      className="lang-button"
      title="Change Language"
    >
      {/* <p>Restart</p> */}
      <select onChange={handleLanguageChange} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="ta">தமிழ்</option>
      </select>
    </div>
  );
}
