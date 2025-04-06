import { poolPromise } from "../config/db";
import { Expense, ExpenseCategory, MonthlyAccount, BudgetRules } from "../models/budgetTracker.model";

export class ExpenseService {
    private expenses: Expense[] = [];
    private categories: ExpenseCategory[] = [];
    private monthlyAccounts: MonthlyAccount[] = [];
    private budgetRules: BudgetRules[] = [];

    // constructor() {
    //     // Initialize with some dummy data
    //     this.expenses = [
    //         { id: '1', categoryId: '1', monthlyAccountId: '1', amount: 100, description: 'Groceries', expenseDate: new Date() },
    //         { id: '2', categoryId: '2', monthlyAccountId: '1', amount: 50, description: 'Utilities', expenseDate: new Date() }
    //     ];
    //     this.categories = [
    //         { id: '1', name: 'Food' },
    //         { id: '2', name: 'Bills' }
    //     ];
    //     this.monthlyAccounts = [
    //         { id: '1', income: 2000, incomeDate: new Date(), savings: 500, carryForward: 1000 }
    //     ];
    //     this.budgetRules = [
    //         { id: '1', name: 'Monthly Budget', ruleAamount: 1500 }
    //     ];
    // }

    /**
     * Retrieves the list of all expenses.
     *
     * @returns {Expense[]} An array of expenses.
     */
    static async getExpenses(): Promise<Expense[]> {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Expense');
        return result.recordset;
    }

    static async addExpense(expense: Expense): Promise<void> {
        const pool = await poolPromise;
        await pool.request()
            .input('categoryId', expense.categoryId)
            .input('monthlyAccountId', expense.monthlyAccountId)
            .input('amount', expense.amount)
            .input('description', expense.description)
            .input('expenseDate', expense.expenseDate)
            .query('INSERT INTO Expenses (categoryId, monthlyAccountId, amount, description, expenseDate) VALUES (@categoryId, @monthlyAccountId, @amount, @description, @expenseDate)');
    }
}