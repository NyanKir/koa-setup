import "dotenv/config";

import Koa from "koa";

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}/`);
});
