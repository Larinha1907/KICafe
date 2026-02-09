import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Post extends Model {
    static associate(models) {
        this.belongsTo(models.Usuarios, {
          foreignKey: "id_usuario",
          as: "usuario"
        });
      
        this.hasMany(models.Publicar, {
          foreignKey: "id_post",
          as: "comentarios"
        });
      }
        }

  Post.init(
    {
      id_post: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      imagem: {
        type: DataTypes.TEXT,
      },
      curtida: {
        type: DataTypes.INTEGER,
      },
      comentario: {
        type: DataTypes.STRING(50),
      },
      favoritar: {
        type: DataTypes.BOOLEAN,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "post",
      timestamps: false,
    }
  );

  return Post;
};
