import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';
import { IdGenerator } from '../repositories/id-generator-interface';

export interface Params {
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  cover?: string;
  status: 'read' | 'unread' | 'donated';

}

export class CreateBookUseCase {
  //seu codigo aqui
  constructor(
    private bookRepository: BookRepository,
    private idGenerator: IdGenerator
  ){}

  execute(bookParams: Params): Book {
    const book: Book = {
      id: this.getId(),
      createdAt: this.getDate(),
      ...bookParams
    }
    this.bookRepository.save(book);
    return book
    
  }
  private getDate() {
    return new Date().toLocaleDateString('pt-BR');
  }

  private getId() {
    return this.idGenerator.generate();

  }
}
