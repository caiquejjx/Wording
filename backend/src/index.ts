import { GetWordService } from "./services/getWordService";
import { GetWordController } from "./controllers/GetWordController";
import { TranslateWordService } from "./services/translateWordService";
import { TranslateWordController } from "./controllers/TranslateWordController";
import { GetAvailableLangsService } from "./services/getAvailableLangsService";
import { GetAvailableLangsController } from "./controllers/GetAvailableLangsController";

const getWordService = new GetWordService();

const translateWordService = new TranslateWordService();

const getAvailableLangsService = new GetAvailableLangsService();

const getAvailableLangsController = new GetAvailableLangsController(
  getAvailableLangsService
);

const getWordController = new GetWordController(getWordService);

const translateWordController = new TranslateWordController(
  translateWordService
);

export {
  getWordController,
  translateWordController,
  getAvailableLangsController,
};
