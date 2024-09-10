import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mariadb', 'root', 'M4r1aDb', {
  host: 'localhost',
  port: 3306,
  dialect: 'mariadb',
  logging: false,
});

export default sequelize;
