import request from 'supertest';
import app from '../../src/app';

jest.mock('../../src/services/expense.service');
import { ExpenseService } from '../../src/services/expense.service';

describe('ExpenseController', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /expense', () => {
        it('should return all expenses', async () => {
            const mockExpenses = [
                { id: 1, name: 'Test Expense 1', amount: 100 },
                { id: 2, name: 'Test Expense 2', amount: 200 },
            ];

            (ExpenseService.getExpenses as jest.Mock).mockResolvedValue(mockExpenses);

            const response = await request(app).get('/api/expense');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockExpenses);
            expect(ExpenseService.getExpenses).toHaveBeenCalledTimes(1);
        });

        it('should handle errors gracefully', async () => {
            (ExpenseService.getExpenses as jest.Mock).mockRejectedValue(new Error('Database error'));

            const response = await request(app).get('/api/expense');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Internal server error' });
        });
    });

    describe('POST /expense', () => {
        it('should add a new expense', async () => {
            const newExpense = { name: 'New Expense', amount: 150 };

            (ExpenseService.addExpense as jest.Mock).mockResolvedValue(undefined);

            const response = await request(app)
                .post('/api/expense')
                .send(newExpense);

            expect(response.status).toBe(201);
            expect(response.body).toEqual({ message: 'Expense added successfully' });
            expect(ExpenseService.addExpense).toHaveBeenCalledWith(newExpense);
        });

        it('should handle errors gracefully when adding an expense', async () => {
            const newExpense = { name: 'New Expense', amount: 150 };

            (ExpenseService.addExpense as jest.Mock).mockRejectedValue(new Error('Database error'));

            const response = await request(app)
                .post('/api/expense')
                .send(newExpense);

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Internal server error' });
        });
    });
});