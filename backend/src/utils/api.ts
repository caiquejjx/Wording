import axios from "axios";
import { apiKey } from "../config/env";

const headers = {
  "content-type": "application/x-www-form-urlencoded",
  "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  "x-rapidapi-key": apiKey,
  "accept-encoding": "application/gzip",
  useQueryString: true,
};

const wordApi = axios.create({
  //   baseURL: `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${apiKey}`,
  baseURL: "https://random-word-api.herokuapp.com/word",
});

const translateApi = axios.create({
  //   baseURL: `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${apiKey}`,
  baseURL: "https://google-translate1.p.rapidapi.com/language",
  headers,
});

export { wordApi, translateApi };
