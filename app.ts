import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";

const app = new Hono();

// ミドルウェア
app.use(logger());

app.get("/test", (c) => {
  return c.json({ message: "test" });
});

export default app; // for Cloudflare Workers or Bun
