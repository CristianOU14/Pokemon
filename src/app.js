import express from "express";
import router from "./routes/pokemones.routes.js";
const app = express();

app.set('port',3000);

//Routes
app.use(router)

export default app;