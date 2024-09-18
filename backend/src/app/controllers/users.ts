import { UserModel } from "@/models/users";
import { Response, Request } from "express";

export class UserController {
  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const limit = Number(req.query.limit);
      const allUsers = await UserModel.getAllUsers({ limit });
      res.status(201).json(allUsers);
    } catch (error: unknown) {
      res.status(500).json({ error: "Error" });
    }
  }
}

export default new UserController();
