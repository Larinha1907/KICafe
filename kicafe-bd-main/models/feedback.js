import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Feedback extends Model {
    static associate(models) {
        this.belongsTo(models.Usuarios, {
          foreignKey: "id_usuario",
          as: "usuario"
        });
      }
        }

  Feedback.init(
    {
      id_feedback: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      avaliacao_texto: {
        type: DataTypes.STRING(150),
      },
      carinha: {
        type: DataTypes.BOOLEAN,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Feedback",
      tableName: "feedback",
      timestamps: false,
    }
  );

  return Feedback;
};
