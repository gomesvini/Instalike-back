import express from "express";

const app = express ();

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// criar rotas
app.get("/api", (req, resp) => {
    resp.status(200).send("Boas vindas à imersão!");
});