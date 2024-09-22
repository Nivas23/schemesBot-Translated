import { signal, effect } from "@preact/signals-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") ?? "en"
  );

  function handleLangChange(event) {
    localStorage.setItem("lang", event.target.value);
    i18n
      .changeLanguage(event.target.value)
      .then(() => {
        setLanguage(event.target.value);
        languageChanged.value = !languageChanged;
      })
      .catch((error) => {
        console.error("Error changing language:", error);
      });
  }

  return (
    <div className="lang-button" title="Change Language">
      {/* <Dropdown
        aria-label="Language change switch"
        className={"language-switch"}
        onSelectionChange={handleLangChange}
        defaultSelectedKey={language}
        items={SUPPORTED_LANGUAGES}
      >
        {(item) => <Item key={item.code}>{item.name}</Item>}
      </Dropdown> */}
      <select onChange={handleLangChange} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="ta">தமிழ்</option>
      </select>
    </div>
  );
}
export const languageChanged = signal(false);
