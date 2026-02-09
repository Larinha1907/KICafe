import express from "express";
import db from "./models/index.js";

const app = express();
app.use(express.json());

// Health
app.get("/health", (req, res) => res.json({ ok: true }));


app.get("/usuarios", async (req, res) => {
  const usuarios = await db.Usuarios.findAll({
    include: ["associacoes", "feedbacks", "compras", "posts", "publicacoes", "produtos"]
  });
  res.json(usuarios);
});


app.get("/produtos", async (req, res) => {
  const produtos = await db.Produtos.findAll({
    include: ["compras", "usuarios"]
  });
  res.json(produtos);
});


app.get("/musicas", async (req, res) => {
  const musicas = await db.Musicas.findAll({
    include: ["playlists"]
  });
  res.json(musicas);
});


app.get("/playlists", async (req, res) => {
  const playlists = await db.Playlists.findAll({
    include: ["musicas", "associacoes"]
  });
  res.json(playlists);
});


app.get("/livro", async (req, res) => {
  const livros = await db.Livro.findAll({
    include: ["associacoes"]
  });
  res.json(livros);
});


app.get("/cafe", async (req, res) => {
  const cafes = await db.Cafe.findAll({
    include: ["associacoes"]
  });
  res.json(cafes);
});


app.get("/posts", async (req, res) => {
  const posts = await db.Post.findAll({
    include: ["usuario", "comentarios"]
  });
  res.json(posts);
});


app.get("/feedback", async (req, res) => {
  const feedbacks = await db.Feedback.findAll({
    include: ["usuario"]
  });
  res.json(feedbacks);
});


app.get("/compras", async (req, res) => {
  const compras = await db.Compras.findAll({
    include: ["usuario", "produto"]
  });
  res.json(compras);
});


app.get("/associacao", async (req, res) => {
  const assoc = await db.Associacao.findAll({
    include: ["usuario", "livro", "cafe", "playlist"]
  });
  res.json(assoc);
});


app.get("/publicar", async (req, res) => {
  const pub = await db.Publicar.findAll({
    include: ["usuario", "post"]
  });
  res.json(pub);
});


app.get("/playlistMusica", async (req, res) => {
  const pm = await db.PlaylistMusica.findAll({
    include: ["playlist", "musica"]
  });
  res.json(pm);
});


app.get("/usuarioProduto", async (req, res) => {
  const up = await db.UsuarioProduto.findAll({
    include: ["usuario", "produto"]
  });
  res.json(up);
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({ alter: true });

    console.log(`API rodando em http://localhost:${PORT}`);
  } catch (err) {
    console.error("Erro ao iniciar servidor:", err.message);
  }
});
