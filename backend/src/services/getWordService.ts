import { wordApi } from "../utils/api";

export class GetWordService {
  async getWord() {
    try {
      const [word] = (await wordApi.get("")).data;

      return word;
    } catch (error) {
      throw new Error("Ocorreu um erro ao gerar uma nova palavra");
    }
  }
}
