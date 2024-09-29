import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';


//export interface Params {
  //title: string;
  //author: string;
  //isbn: string;
  //publisher: string;
  //category: string;
  //cover?: string;
  //status: 'read' | 'unread' | 'donated';

//}

export class CreateBookUseCase {
  //seu codigo aqui
  constructor(
    private bookRepository: BookRepository,
  ){}

  execute(bookParams: Partial<Book>): Book {
    const book: Book = {
      createdAt: this.getDate(),
      ...bookParams
      
    } as Book;

    this.bookRepository.save(book);
    return book;
    
  }
  private getDate() {
    return new Date().toLocaleDateString('pt-BR');
  }

  
}
