import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import Gender from "./Gender";
import City from "./City";
import Community from "./Community";
import DiffAbled from "./DiffAbled";
import Student from "./Stundent";
import SchemesList from "./SchemesList";
import SchemeCard from "./SchemeCard";
import LatestSchemes from "./LatestSchemes";
import FAQ from "./FAQ";
import RestartButton from "./RestartButton";
import LangButton from "./LangButton";
import getTranslatedText from "./getTranslatedText";
import LanguageSwitch from "./LanguageSwitch";
const botName = "SchemesBot";
const config = {
  initialMessages: [
    createChatBotMessage(
      'Hello! What would you like to do today?',
      {
        widget: "Options",
      }
    )
  ],

  state: {
    gender: null,
    age: null,
    city: null,
    community: null,
    differentlyAbled: null,
    category: null,
    isSearch: null,
    isAge: null,
    lang:null
  },
  widgets: [
    {
      widgetName: "Options",
      widgetFunc: (props) => (
        <>
          <Options {...props} />
          <RestartButton {...props} />

          <LanguageSwitch/>
        </>
      ),
    },
    {
      widgetName: "Gender",
      widgetFunc: (props) => <Gender {...props} />,
      mapStateToProps: ["gender"],
    },
    {
      widgetName: "City",
      widgetFunc: (props) => <City {...props} />,
      mapStateToProps: ["city"],
    },
    {
      widgetName: "Community",
      widgetFunc: (props) => <Community {...props} />,
      mapStateToProps: ["community"],
    },
    {
      widgetName: "DiffAbled",
      widgetFunc: (props) => <DiffAbled {...props} />,
      mapStateToProps: ["differentlyAbled"],
    },
    {
      widgetName: "Student",
      widgetFunc: (props) => <Student {...props} />,
      mapStateToProps: ["category"],
    },
    {
      widgetName: "SchemesList",
      widgetFunc: (props) => <SchemesList {...props} />,
      // mapStateToProps: ["category"],
    },
    {
      widgetName: "LatestSchemes",
      widgetFunc: (props) => <LatestSchemes {...props} />,
    },
    {
      widgetName: "FAQ",
      widgetFunc: (props) => <FAQ {...props} />,
    },
    {
      widget:"LangButton",
      widgetFunc : (props) => <LangButton{...props} />,
      mapStateToProps: ["lang"]
    }
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6E00FF",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  // customComponents: {
  //   header: (props) => <Header {...props} />,
  // },
  customMessages: {
    SchemeCard: (props) => <SchemeCard {...props} />,
  },
};

export default config;
