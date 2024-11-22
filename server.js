import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato brincando com um novelo de lã",
    imagem: "https://placekitten.com/400/300",
  },
  {
    id: 3,
    descricao: "Paisagem com um gato",
    imagem: "https://picsum.photos/id/237/400/300",
  },
  {
    id: 4,
    descricao: "Gato dormindo em uma caixa",
    imagem: "https://source.unsplash.com/random/400x300/?cat,sleep",
  },
  {
    id: 5,
    descricao: "Gato olhando pela janela",
    imagem: "https://unsplash.com/photos/2c41180170c427492fa0",
  },
  {
    id: 6,
    descricao: "Gato comendo ração",
    imagem: "https://loremflickr.com/400/300/cat,food",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

//Desafio Aula 1

// app.get("/livro", (req, res) =>{
//     res.status(200).send({
//         titulo: "Harry Potter e o Cálice de Fogo",
//         autor: "J.K. Rowling",
//         ano: 2009,
//         genero: "Fantasia"
//     });

// });

// criando rotas

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostID (id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostID(req.params.id);
    res.status(200).json(posts[index]);
  });
