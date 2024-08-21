import { Context, Hono } from "hono";

const app = new Hono();

app.get("/", (c: Context) => {
  return c.json({ greeting: "Hello Hono!" });
});

Deno.serve(app.fetch);
