import { Request, Response } from "express";
import { GetAvailableLangsService } from "../services/getAvailableLangsService";

export class GetAvailableLangsController {
  constructor(private getAvailableLangsService: GetAvailableLangsService) {}

  async handleRequest(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .send(await this.getAvailableLangsService.getAvailableLangs());
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
