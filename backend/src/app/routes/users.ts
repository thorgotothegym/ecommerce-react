import UserController from "@/controllers/users";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/user", UserController.getUsers);

export default usersRouter;
