# Todo-API
API REST para gerenciamento de tarefas.
## Tecnologias
- Node.js
- Express
- MongoDB
- Mongoose

## Como Rodar
1. Clone o repositório
2. Instale as dependências: "npm install"
3. Configure .env com sua URI do MongoDB
4. execute o comando: "npm run dev"

## Endpoints
- POST /api - Criar tarefa
- GET /api - Listar todas
- GET /api/:id - Buscar por ID
- PUT /api/:id - Atualizar
- DELETE /api/:id - Deletar
- PATCH /api/:id/toggle - Marcar como concluída
