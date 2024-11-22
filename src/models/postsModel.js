// - conectarAoBanco: Função para conectar ao banco de dados (provavelmente MongoDB)
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export default async function getAllPosts() {
    // Obtém a referência ao banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Obtém a referência à coleção "posts"
    const colecao = db.collection("posts");
    
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
  };