import { GetWordService } from "../services/getWordService";
import { Request, Response } from "express";

export class GetWordController {
  constructor(private getWordService: GetWordService) {}

  async handleRequest(req: Request, res: Response) {
    try {
      return res.status(200).send(await this.getWordService.getWord());
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
