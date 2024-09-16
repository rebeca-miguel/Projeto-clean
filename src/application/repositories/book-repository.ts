import { Book } from '../../domain/book';

export interface BookRepository {
 //seu codigo aqui
 save(book: Book): void;
 findAll(): Book[];
}