import { ExpenseService } from "../services/expense.service";
import { Request, Response } from "express";

export class ExpenseController {
    static async getAll(req: Request, res: Response) {
        try {
            const expenses = await ExpenseService.getExpenses();
            res.status(200).json(expenses);
        } catch (error) {
            console.error('Error fetching expenses:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async add(req: Request, res: Response) {
        try {
            const expense = req.body;
            await ExpenseService.addExpense(expense);
            res.status(201).json({ message: 'Expense added successfully' });
        } catch (error) {
            console.error('Error adding expense:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

}