import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Associacao extends Model {
    static associate(models) {
        this.belongsTo(models.Usuarios, {
          foreignKey: "id_usuario",
          as: "usuario"
        });
      
        this.belongsTo(models.Livro, {
          foreignKey: "id_livro",
          as: "livro"
        });
      
        this.belongsTo(models.Cafe, {
          foreignKey: "id_cafe",
          as: "cafe"
        });
      
        this.belongsTo(models.Playlists, {
          foreignKey: "id_playlist",
          as: "playlist"
        });
      }
        }

  Associacao.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      texto: {
        type: DataTypes.STRING(50),
      },
      id_usuario: {
        type: DataTypes.INTEGER,
      },
      id_livro: {
        type: DataTypes.INTEGER,
      },
      id_cafe: {
        type: DataTypes.INTEGER,
      },
      id_playlist: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Associacao",
      tableName: "associacao",
      timestamps: false,
    }
  );

  return Associacao;
};
