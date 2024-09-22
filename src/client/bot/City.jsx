import React from "react";

import { useTranslation } from 'react-i18next';

export default function City(props) {
  const { t, i18n } = useTranslation();
  

  var TamilNadu = [
    "Ariyalur",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivaganga",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];
  const selectValue = (event) => {
    let botMessage = `${t("Your Community")}`;
    let widget = "Community";
    let e = document.getElementById("select");
    let value = e.value;
    props.setState((state) => ({ ...state, city: value}));
    // var text = e.options[e.selectedIndex].text;
    console.log(value);
    props.actions.handleEvent(value, botMessage, widget);
    document.getElementById("city").style.display = "none";
  };
  return (
    <div className="option-city" id="city">
      <select
        id="select"
        name="city"
        className="city"
        defaultValue={t("select city")}
        onChange={(event) => {
          selectValue(event);
        }}
      >
        <option disabled>{t("select city")}</option>
        {TamilNadu.map((item, index) => (
          <option className="city" key={index} value={item}>
            {t(`cities.${item}`)}
          </option>
        ))}
      </select>
    </div>
  );
}
