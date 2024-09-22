import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useTranslation } from "react-i18next";

import LatestScheme from "./LatestSchemeData.json";
export default function LatestSchemes(props) {
  const { t } = useTranslation();

  return (
    <>
      <Accordion>
        {LatestScheme.map((scheme, index) => {
          return (
            <AccordionItem
              header={t(`LatestSchemes.${scheme.SchemeName}`)}
              key={index}
            >
              <ul>
                <li>
                  <div className="schemecard-heading">
                    {t("LatestSchemes.LaunchedDate")}:
                  </div>
                  <div>{scheme.LaunchedDate}</div>
                </li>
                <li>
                  <div className="schemecard-heading">
                    {t("LatestSchemes.Benefits")}:
                  </div>
                  {scheme.Benefits.map((benefit, idx) => (
                    <div key={idx}>{t(`LatestSchemes.${benefit}`)}</div>
                  ))}
                </li>
                <li>
                  <div className="schemecard-heading">
                    {t("LatestSchemes.Beneficiaries")}:
                  </div>
                  <div>{t(`LatestSchemes.${scheme.Beneficiaries}`)}</div>
                </li>
                <li>
                  <div className="schemecard-heading">
                    {t("LatestSchemes.ModeOfApply")}:
                  </div>
                  <div>{t(`LatestSchemes.${scheme.ModeOfApply}`)}</div>
                </li>
              </ul>
            </AccordionItem>
          );
        })}
      </Accordion>
      {/* <div className="back">
    <button className="btn" onClick={props.actions.restartConversation}>Back</button>
    </div> */}
    </>
  );
}
