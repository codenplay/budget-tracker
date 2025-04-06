import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";

const router = Router();

router.get("/expense", ExpenseController.getAll);
router.post("/expense", ExpenseController.add);

export default router;