import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Cafe extends Model {
    static associate(models) {
        this.hasMany(models.Associacao, {
          foreignKey: "id_cafe",
          as: "associacoes"
        });
      }
      
  }

  Cafe.init(
    {
      id_cafe: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(25),
      },
      descricao: {
        type: DataTypes.STRING(50),
      },
    },
    {
      sequelize,
      modelName: "Cafe",
      tableName: "cafe",
      timestamps: false,
    }
  );

  return Cafe;
};
