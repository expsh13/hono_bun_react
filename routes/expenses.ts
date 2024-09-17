import { Hono } from "hono";

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const fakeExpenses: Expense[] = [
  { id: 1, title: "aadgfa", amount: 120 },
  { id: 2, title: "a", amount: 320 },
  { id: 3, title: "ba", amount: 620 },
];

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const expense = await c.req.json();
    console.log(expense);
    return c.json(expense);
  });
