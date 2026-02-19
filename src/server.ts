import express from "express";
import path from "path";
import router from "./router/router";
import { AppDataSource } from "./database/db";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(router);


AppDataSource.initialize()
    .then(() => {
        console.log("Banco conectado com sucesso");
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Erro ao conectar no banco:", error);
    });
