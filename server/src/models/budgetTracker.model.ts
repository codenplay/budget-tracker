export interface IBaseModel {
    id : string; // uniqueIdentifier
    created_at : Date; // DATETIME DEFAULT GETDATE()
}

export interface ExpenseCategory extends IBaseModel {
    name : string; // NVARCHAR(100) NOT NULL,	
    parentId? : string; // uniqueIdentifier, NULLABLE
}
    

export interface BudgetRules extends IBaseModel {
    name : string; // NVARCHAR(100) NOT NULL,
    ruleAamount : number; // DECIMAL(18, 2) NOT NULL  
}

export interface MonthlyAccount extends IBaseModel {
    income : number; // DECIMAL(18, 2) NOT NULL,
    incomeDate : Date; // DATETIME NOT NULL,
    savings : number; // DECIMAL(18, 2) NOT NULL,
    carryForward : number; // DECIMAL(18, 2) NOT NULL
}

export interface Expense extends IBaseModel { 
    categoryId : string; // uniqueIdentifier,
    monthlyAccountId : string; // uniqueIdentifier,
    amount : number; // DECIMAL(18, 2) NOT NULL,
    description : string; // NVARCHAR(255),
    expenseDate : Date; // DATETIME,
}
    