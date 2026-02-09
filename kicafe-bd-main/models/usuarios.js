import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Usuarios extends Model {
    static associate(models) {
      // usuario -> associacao
      this.hasMany(models.Associacao, {
        foreignKey: "id_usuario",
        as: "associacoes"
      });
    
      // usuario -> feedback
      this.hasMany(models.Feedback, {
        foreignKey: "id_usuario",
        as: "feedbacks"
      });
    
      // usuario -> compras
      this.hasMany(models.Compras, {
        foreignKey: "id_usuario",
        as: "compras"
      });
    
      // usuario -> post
      this.hasMany(models.Post, {
        foreignKey: "id_usuario",
        as: "posts"
      });
    
      // usuario -> publicar (comentários)
      this.hasMany(models.Publicar, {
        foreignKey: "id_usuario",
        as: "publicacoes"
      });
    
      // usuario -> produtos (many-to-many)
      this.belongsToMany(models.Produtos, {
        through: models.UsuarioProduto,
        foreignKey: "id_usuario",
        otherKey: "id_produto",
        as: "produtos"
      });
    }
  }    

  Usuarios.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING(50),
      },
      foto: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Usuarios",
      tableName: "usuarios",
      timestamps: false,
    }
  );

  return Usuarios;
};
