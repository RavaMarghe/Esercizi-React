import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const translation = {
  en: "Current language is: ",
  it: "La lingua attuale è: ",
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <h1>
      {translation[language]}
      {language}
    </h1>
  );
}

/*const Strings = {
  en: {
    CURRENT_LANG: "Current language is: ",
  },
  it: {
    CURRENT_LANG: "La lingua selezionata è: ",
  },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <h1>
                {Strings[language].CURRENT_LANG}
                {language}
              </h1>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}*/
