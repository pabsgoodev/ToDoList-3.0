import { Router } from "express";
import { TodoController } from "../controller/controller";

const router = Router();
const controller = new TodoController()

//CREATE
router.post("/todos", (req, res) => {  controller.create(req, res) })

//READ
router.get("/todos", (req, res) => { controller.list(req, res) })

//DELETE
router.delete("/todos/:id", (req, res) => { controller.delete(req, res) })

// UPDATE
router.put("/todos/:id", (req, res) => { controller.update(req, res) })

export default router;