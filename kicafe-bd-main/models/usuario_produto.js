import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class UsuarioProduto extends Model {
    static associate(models) {
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

  UsuarioProduto.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      data: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "UsuarioProduto",
      tableName: "usuario_produto",
      timestamps: false,
    }
  );

  return UsuarioProduto;
};
