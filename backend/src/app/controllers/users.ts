import { UserModel } from "@/models/users";
import { Response, Request } from "express";

type Query = {
  limit: number;
};

export class UserController {
  async getUsers(req: Request<Query>, res: Response): Promise<void> {
    try {
      const { limit } = req.query;
      const allUsers = await UserModel.getAllUsers(Number(limit));
      res.status(201).json(allUsers);
    } catch (error: unknown) {
      res.status(500).json({ error: "Error" });
    }
  }
}

export default new UserController();
