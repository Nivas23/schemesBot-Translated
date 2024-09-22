import React from "react";
import FAQs from "./FAQ.json"
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useTranslation } from 'react-i18next';

export default function FAQ(){

  const { t, i18n } = useTranslation();

    return(
        <Accordion>
        {FAQs.map((FAQ, index) => {
                  // const question = translations[FAQ.question]; // Use the appropriate translation for the question
                  // const answer = translations[FAQ.answer];     // Use the appropriate translation for the answer
          
          return (
            <AccordionItem header={t(`faq.${FAQ.question}`)} key={index}>
              {t(`faq.${FAQ.answer}`)}
            </AccordionItem>
          );
        })}
        ;
      </Accordion>
    )
}