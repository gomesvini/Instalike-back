import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());

  // Rota para obter todos os posts
  app.get("/posts", listarPosts);
};

export default routes;
