import { Book } from '../../domain/book';

export interface BookRepository {
 //seu codigo aqui
 save(book: Book): Promise<void>;
 findAll(): Promise<Array<Book>>;
 update(id: string, params: Partial<Book>): Promise<Book | null>;
 delete(id: string): Promise<void>;
}

// qUANDO USAMOS O REPOSÍTORIS, a gente permitiu que a nossa camada estivesse protegida

//Essa é a minha abstração