import { Hono } from "hono";
import { z } from "zod";

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

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const data = await c.req.json();
    const expense = createPostSchema.parse(data);
    console.log(expense);
    return c.json(expense);
  });
