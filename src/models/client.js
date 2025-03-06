import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  /*
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
    */
});