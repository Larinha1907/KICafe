export default {
    development: {
      username: process.env.DB_USER || "aluno",
      password: process.env.DB_PASS || "aluno",
      database: process.env.DB_NAME || "kicafe-sequelize",
      host: process.env.DB_HOST || "localhost",
      dialect: "postgres",
      logging: false,
    },
  };