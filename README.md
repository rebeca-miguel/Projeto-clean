# Implementação de persistência de dados no projeto de livros

// Este projeto é uma implementação de um repositório de livros, utilizando TypeScript 
e uma biblioteca para interação com um banco de dados,  no caso, o Mongoose para MongoDB. 



## O mongoose fornece operações básicas de CRUD como:

Criar: capaz de criar livros;

Listar: capaz de listar todos os livros ;

Atualizar: capaz de atualizar um livro pelo ID;

Deletar: capaz de deletar um livro por ID


## Tecnologias Utilizadas

- TypeScript
- [Mongoose](https://mongoosejs.com/) 
- Node.js
- Express 

### Instalação de depências
  
  ```
  npm install
  
  ```

### inicialisar o projeto

```
  npm start
```

## diferencial no projeto:
1 - inclusão do **async e await**

2- inclusão do  **mongoDB e mongoose**


// A proposta do projeto é fazer uma integração do banco de dos com o meu projeto de modo a salavar as informações da minha aplicação enquanto ela estiver rodando e salvar no banco de dados. O projeto foi estruturado usando clean architecture que me permitiu criar camadas do projeto.

## Para que isso acotença, precisei seguir algumas etapas: 

1- criar uma conta no MongoDB;

2- criar o cluster;

3-ligar o cluster que está na nunvem ao meu projeto por meio da connection;

4- precisei criar o model para dizer como eu gostaria e quais dados terias no meu livro e como a colletion seria salvo e como interagir com o Mongo DB;

### criei um Repository que manteve os mesmos dados que é:

Salvar;

Listar;

Atualizar;

Deletar

// A partir desse momento, deixei de usar um ARRAY na minha aplicação que permitia guardar as informações da minha aplicação e comecei a trabalhar com o Model através da vaiável BookModel que representa o MongoDB e o mongoose.

// Fui capaz de criar novo livro usando as regras que determinei no model e por meio do model me permitiu salvar no banco de dados as informações.

// O BookModel é a forma que o projeto ou eu me comunico com o mongoDB através do mongoose.

// Precisei excluir alguns arquivos e dentre eles o id-generator.ts que me permitia gerar e salvar o id;
importei Repository chamando o **database/mongo-db/repository;

// Fez-se a conexão do MongoDB através do arquivo index.ts que o meu server, sem ele o mongoDB não funcionaria.


### Testando no Insomnia: 

POST /books: Para adicionar um novo livro.

GET /books: Para listar todos os livros.

PATCH /books/:id: Para atualizar um livro pelo ID.

DELETE /books/:id: Para deletar um livro pelo ID.