import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Produtos extends Model {
    static associate(models) {
        // produto -> compras
        this.hasMany(models.Compras, {
          foreignKey: "id_produto",
          as: "compras"
        });
      
        // produto -> usuarios (many-to-many)
        this.belongsToMany(models.Usuarios, {
          through: models.UsuarioProduto,
          foreignKey: "id_produto",
          otherKey: "id_usuario",
          as: "usuarios"
        });
      }
    }
          
  Produtos.init(
    {
      id_produto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nomeProd: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING(50),
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      imgProd: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Produtos",
      tableName: "produtos",
      timestamps: false,
    }
  );

  return Produtos;
};
