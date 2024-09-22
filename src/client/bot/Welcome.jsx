import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import { useTranslation } from 'react-i18next';

const WelcomeMessage = () => {
    const { t } = useTranslation();
    return createChatBotMessage(
      t("welcome_message", { botName }),
      {
        widget: "Options",
      }
    );
  };

  export default WelcomeMessage;
  