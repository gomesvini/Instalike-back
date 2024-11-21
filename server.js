import express from "express";

const app = express ();

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// criar rotas
app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});

app.get("/livro", (req, res) =>{
    res.status(200).send({
        titulo: "Harry Potter e o Cálice de Fogo",
        autor: "J.K. Rowling",
        ano: 2009,
        genero: "Fantasia" 
    }) 

})