# 🧾 Budget Tracker API

A simple, scalable, and modular **REST API** for tracking household budgets — designed for housewives or anyone managing monthly expenses. Built with **Node.js**, **TypeScript**, **MSSQL**, and deployed via **Azure DevOps** using CI/CD best practices.

---

## 🚀 Features

- ✅ RESTful API with full CRUD functionality
- ✅ Layered architecture: Controller → Service → DB
- ✅ Scalable & testable TypeScript codebase
- ✅ Integrated Jest testing with Supertest
- ✅ Azure DevOps CI/CD pipeline-ready
- ✅ MSSQL database connectivity with parameterized queries
- ✅ Environment-based configuration via `.env`

---

## 🏗️ Tech Stack

| Layer            | Technology        |
|------------------|-------------------|
| Runtime          | Node.js + TypeScript |
| Web Framework    | Express.js        |
| Database         | MSSQL (SQL Server)|
| Testing          | Jest + Supertest  |
| CI/CD            | Azure DevOps      |
| Code Quality     | ESLint + Prettier |

---

## 📁 Project Structure

budget-tracker-api/
│── src/
│   ├── config/
│   │   ├── db.ts
│   ├── controllers/
│   │   ├── expense.controller.ts
│   ├── models/
│   │   ├── expense.model.ts
│   ├── routes/
│   │   ├── expense.routes.ts
│   ├── services/
│   │   ├── expense.service.ts
│   ├── middlewares/
│   ├── utils/
│   ├── app.ts
│   ├── server.ts
│── .env
│── .gitignore
│── package.json
│── tsconfig.json
│── README.md

