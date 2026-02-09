import { Sequelize } from "sequelize";

import UsuariosModel from "./usuarios.js";
import ProdutosModel from "./produtos.js";
import MusicasModel from "./musicas.js";
import PlaylistsModel from "./playlists.js";
import LivroModel from "./livro.js";
import CafeModel from "./cafe.js";
import AssociacaoModel from "./associacao.js";
import FeedbackModel from "./feedback.js";
import ComprasModel from "./compras.js";
import PostModel from "./post.js";
import PublicarModel from "./publicar.js";
import PlaylistMusicaModel from "./playlistMusica.js";
import UsuarioProdutoModel from "./usuario_produto.js";

const sequelize = new Sequelize("kicafe-sequelize", "aluno", "aluno", {
  host: "127.0.0.1",
  dialect: "postgres",
  logging: false,
});

const Usuarios = UsuariosModel(sequelize);
const Produtos = ProdutosModel(sequelize);
const Musicas = MusicasModel(sequelize);
const Playlists = PlaylistsModel(sequelize);
const Livro = LivroModel(sequelize);
const Cafe = CafeModel(sequelize);
const Associacao = AssociacaoModel(sequelize);
const Feedback = FeedbackModel(sequelize);
const Compras = ComprasModel(sequelize);
const Post = PostModel(sequelize);
const Publicar = PublicarModel(sequelize);
const PlaylistMusica = PlaylistMusicaModel(sequelize);
const UsuarioProduto = UsuarioProdutoModel(sequelize);


const models = {
  Usuarios,
  Produtos,
  Musicas,
  Playlists,
  Livro,
  Cafe,
  Associacao,
  Feedback,
  Compras,
  Post,
  Publicar,
  PlaylistMusica,
  UsuarioProduto,
};

Object.values(models)
  .filter((m) => typeof m.associate === "function")
  .forEach((m) => m.associate(models));

const db = { sequelize, Sequelize, ...models };

export default db;
