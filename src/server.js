import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes.js'

dotenv.config()

const app = express()
const porta = 3333

// Connectar Banco ao Dados
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Conectado"))
  .catch((err) => console.log("Erro ao tentar conectar:", err));

// Middlewares  
app.use(express.json())

// Routes
app.use('/api', routes)

// Iniciar Servidor
app.listen(porta, () => console.log(`http://localhost:${porta}/api`));