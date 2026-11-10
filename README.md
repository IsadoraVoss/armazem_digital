# Armazém Digital - API REST

## Descrição

API REST desenvolvida com Node.js, Express e MongoDB para gerenciamento de produtos de um armazém digital.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- Nodemon
- Postman

## Integrantes

- Isadora Voss Brugnera
- Jenifer Beatriz Nunes

## Instalação

Clone o projeto ou extraia os arquivos.

Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/armazem_digital
```

## Executando a Aplicação

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

## Teste da API

Endpoint de saúde:

```http
GET /saude
```

Resposta:

```json
{
  "status": "ok"
}
```

## Rotas Disponíveis

### Listar produtos

```http
GET /api/produtos
```

### Buscar produto por ID

```http
GET /api/produtos/:id
```

### Criar produto

```http
POST /api/produtos
```

Exemplo:

```json
{
  "nome": "Caneta Azul",
  "descricao": "Caneta esferográfica",
  "preco": 2.99,
  "quantidade": 100,
  "ativo": true
}
```

### Atualizar produto

```http
PATCH /api/produtos/:id
```

Exemplo:

```json
{
  "preco": 3.50,
  "quantidade": 80
}
```

### Excluir produto

```http
DELETE /api/produtos/:id
```

## Estrutura do Projeto

```text
src
├── config
├── controllers
├── middlewares
├── models
├── routes
└── server.js
```

## Evidências de Teste

- CRUD executado com sucesso.
- Persistência de dados validada no MongoDB.
- Testes realizados através do Postman.
- Tratamento de erros implementado.

## Autor

Trabalho desenvolvido para a disciplina Banco de Dados II.
