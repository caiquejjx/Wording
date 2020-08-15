import { Router, Request, Response } from "express";
import {
  getWordController,
  translateWordController,
  getAvailableLangsController,
} from ".";

const routes = Router();

routes.get("/getWord", (req: Request, res: Response) =>
  getWordController.handleRequest(req, res)
);

routes.post("/translateWord", (req: Request, res: Response) =>
  translateWordController.handleRequest(req, res)
);

routes.get("/getAvailableLangs", (req: Request, res: Response) =>
  getAvailableLangsController.handleRequest(req, res)
);
export default routes;
