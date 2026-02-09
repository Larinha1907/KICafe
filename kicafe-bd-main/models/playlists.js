import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Playlists extends Model {
    static associate(models) {
        // playlist -> associação
        this.hasMany(models.Associacao, {
          foreignKey: "id_playlist",
          as: "associacoes"
        });
      
        // playlist -> músicas (many-to-many)
        this.belongsToMany(models.Musicas, {
          through: models.PlaylistMusica,
          foreignKey: "FK_playlists_id",
          otherKey: "FK_musicas_id",
          as: "musicas"
        });
      }
        }

  Playlists.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(25),
      },
    },
    {
      sequelize,
      modelName: "Playlists",
      tableName: "playlists",
      timestamps: false,
    }
  );

  return Playlists;
};
