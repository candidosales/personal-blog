import enUS from "../locales/en-US";
import ptBR from "../locales/pt-BR";
export function chooseTranslate(locale: string): any {
  switch (locale) {
    case "pt-BR":
      return ptBR;
    case "en":
      return enUS;
    case "en-US":
      return enUS;
    default:
      return enUS;
  }
}
