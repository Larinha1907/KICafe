import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Livro extends Model {
    static associate(models) {
        this.hasMany(models.Associacao, {
          foreignKey: "id_livro",
          as: "associacoes"
        });
      }
        }

  Livro.init(
    {
      id_livro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING(100),
      },
      autor: {
        type: DataTypes.STRING(100),
      },
      genero: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      modelName: "Livro",
      tableName: "livro",
      timestamps: false,
    }
  );

  return Livro;
};
