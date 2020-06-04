import { Application } from 'https://deno.land/x/oak/mod.ts';
import routers from './src/routers/index.ts';

const app = new Application();

app.use(routers.routes());
app.use(routers.allowedMethods());

console.log('App running on http://127.0.0.1:2345');
await app.listen({ port : 2345 });

// import { Client } from "https://deno.land/x/mysql/mod.ts";
// const client = await new Client().connect({
//   hostname: "127.0.0.1",
//   username: "root",
//   db: "denotest",
//   password: "0206",
// });

// const temp = await client.execute('SELECT * FROM students;');