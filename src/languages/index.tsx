import enLang from "./en.json"
import trLang from "./tr.json"

export const DEFAULT_LANGUAGE = "en"

export const getSelectedLanguage = () => {
  return localStorage.getItem("language") || DEFAULT_LANGUAGE
}

export const getLanguageJson = () => {
  const language = getSelectedLanguage()

  if (language === "tr") {
    return trLang
  } else if (language === "en") {
    return enLang
  } else {
    return enLang
  }
}

export const lang = getLanguageJson()
