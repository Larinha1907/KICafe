import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Publicar extends Model {
    static associate(models) {
        this.belongsTo(models.Usuarios, {
          foreignKey: "id_usuario",
          as: "usuario"
        });
      
        this.belongsTo(models.Post, {
          foreignKey: "id_post",
          as: "post"
        });
      }
        }

  Publicar.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      id_post: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      comentario: {
        type: DataTypes.STRING(100),
      },
      dTComentario: {
        type: DataTypes.DATEONLY,
      },
      curtida: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Publicar",
      tableName: "publicar",
      timestamps: false,
    }
  );

  return Publicar;
};
