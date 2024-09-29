export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  cover?: string;
  createdAt: string;
  status: 'read' | 'unread' | 'donated';
}

// Quando criamos o nosso código e ele tem a camada de domínio como a camada mais interna, principal e é mesmo que o coração do nosso projeto

//foco da nossa aplicação em regras de negócio

// No DDD, entidades são objetos que possuem identidade própria em ciclo de vida. No noso casso, a entidade principal é o Book(Livro), que é identificada unicamente por um ID.

// Aqui eu venjo qual entidade ou qual domínio do meu projeto? No domínio...