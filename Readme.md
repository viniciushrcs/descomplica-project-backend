## Olá! 

Esse projeto se trata de uma API, em node e GraphQL, que consome um banco de dados postgreSQL e permite realizar as seguintes operações:

  - Criar um novo estudante 
  - Editar um estudante existente
  - Buscar um estudante existente
  - Buscar todos os estudantes
  - Deletar um estudante

Para rodar o projeto, você precisa:
1. clonar este repositório
2. Entrar no diretório e rodar o npm install
3. adicionar um arquivo .env com a seguinte variável
  POSTGRES_HOST=postgresql://user:123456@db:5432/descomplica_project
  PORT=3001
4. Rodar o comando docker-compose up


E pronto! Tanto o banco de dados como a API já estarão de pé! Você consegue se conectar com a API na porta 3001 do seu localhost!

Para rodar os testes basta rodar o comando:
- npm run test

ou

- npm run coverage, para ver a cobertura dos testes.