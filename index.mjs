import dotenv from 'dotenv';
import express from "express";
import uploadRoutes from './routes/uploadRoutes.mjs';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200', // Altere para o URL do seu frontend
}));
app.use(express.json());
app.use('/api', uploadRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})