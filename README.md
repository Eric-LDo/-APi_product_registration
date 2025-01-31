# Product Registration API

Esta é uma API de registro de produtos construída com NestJS e Prisma.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- SQLite (ou outro banco de dados compatível com Prisma)

## Configuração do Projeto

1. Clone o repositório:

```bash
git clone https://github.com/Eric-LDo/-API_product_registration.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis

```bash

PORT=3333
FRONT_URL="http://localhost:3000"
DATABASE_URL="file:./dev.db"

```

4. Configure o prisma:

```bash

npx prisma migrate dev

```

Isso aplicará as migrações do banco de dados e gerará o cliente Prisma.

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento:

```bash

npm run start:dev

```

A aplicação estará disponível em:
http://localhost:3333.

Estrutura do Projeto
src: Contém o código-fonte da aplicação.
    . controllers/: Contém os controladores da API.
    . services/: Contém os serviços da aplicação.
    . dtos/: Contém os Data Transfer Objects (DTOs).
    . main.ts: Arquivo principal para iniciar a aplicação.
prisma: Contém o esquema do Prisma e as migrações do banco de dados.
test: Contém os testes da aplicação.

Usuários

POST /user: Cria um novo usuário.

PUT /user: Atualiza um usuário existente.

POST /user/login: Faz login de um usuário.

DELETE /user/:id: Deleta um usuário.

Produtos

POST /product: Cria um novo produto.

GET /product/:id: Obtém um produto pelo ID.

PUT /product: Atualiza um produto existente.

GET /product/list/:userId: Obtém todos os produtos de um usuário.

DELETE /product/:id: Deleta um produto.