import express from 'express';
import cors from 'cors';
import sequelize from './database'
import api from './api';


require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

app.use('/api/v1', api);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado em: http://localhost:${port}`);
});