import { translateApi } from "../utils/api";
import querystring from "querystring";

export class TranslateWordService {
  async translateWord(word: string, targetLang: string) {
    try {
      const body = {
        q: word,
        target: targetLang,
        source: "en",
      };

      const { data } = (
        await translateApi.post("translate/v2", querystring.stringify(body))
      ).data;
      return data.translations[0].translatedText;
    } catch (error) {
      throw new Error("Ocorreu um erro ao traduzir a palavra");
    }
  }
}
