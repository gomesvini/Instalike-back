import getAllPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
  // Chama a função para obter todos os posts do banco de dados
  const posts = await getAllPosts();
  // Envia os posts como resposta em formato JSON com status 200 (sucesso)
  res.status(200).json(posts);
}
