import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Musicas extends Model {
    static associate(models) {
        // música -> playlists (many-to-many)
        this.belongsToMany(models.Playlists, {
          through: models.PlaylistMusica,
          foreignKey: "FK_musicas_id",
          otherKey: "FK_playlists_id",
          as: "playlists"
        });
      }
      
  }

  Musicas.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(50),
      },
      artista: {
        type: DataTypes.STRING(50),
      },
    },
    {
      sequelize,
      modelName: "Musicas",
      tableName: "musicas",
      timestamps: false,
    }
  );

  return Musicas;
};
