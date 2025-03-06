import express from "express";
import { router } from "./routers/index.router.js";

const app = express();

// BodyParser permettant d'interpréter des données fourni dans un POST, un PATCH ou un PUT, en tant que JSON. Ces données seront stockées dans req.body
app.use(express.json());

app.use(router);

const PORT = process.env.PORT ?? 3000; // c'est comme le  || sauf qu'il n'est pas truthy/falsy. CAD que si on fourni le port 0 dans la variable d'environnement, il ne le replacera pas par 3000, il conservera le 0 (0 est falsy)

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});