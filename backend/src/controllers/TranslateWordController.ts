import { Request, Response } from "express";
import { TranslateWordService } from "services/translateWordService";

export class TranslateWordController {
  constructor(private translateWordService: TranslateWordService) {}

  async handleRequest(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .send(
          await this.translateWordService.translateWord(
            req.body.word,
            req.body.targetLang
          )
        );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
