import { translateApi } from "../utils/api";

export class GetAvailableLangsService {
  async getAvailableLangs() {
    try {
      const { data } = await (
        await translateApi.get("translate/v2/languages?target=en")
      ).data;
      return data.languages;
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar as linguagens disponiveis");
    }
  }
}
