import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Compras extends Model {
    static associate(models) {}static associate(models) {
        this.belongsTo(models.Usuarios, {
          foreignKey: "id_usuario",
          as: "usuario"
        });
      
        this.belongsTo(models.Produtos, {
          foreignKey: "id_produto",
          as: "produto"
        });
      }
      
  }

  Compras.init(
    {
      id_compra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantidade: {
        type: DataTypes.INTEGER,
      },
      data_compra: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "Compras",
      tableName: "compras",
      timestamps: false,
    }
  );

  return Compras;
};
