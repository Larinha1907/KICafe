import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class PlaylistMusica extends Model {
    static associate(models) {
        this.belongsTo(models.Playlists, {
          foreignKey: "FK_playlists_id",
          as: "playlist"
        });
      
        this.belongsTo(models.Musicas, {
          foreignKey: "FK_musicas_id",
          as: "musica"
        });
      }
        }

  PlaylistMusica.init(
    {
      FK_playlists_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      FK_musicas_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "PlaylistMusica",
      tableName: "playlistMusica",
      timestamps: false,
    }
  );

  return PlaylistMusica;
};
