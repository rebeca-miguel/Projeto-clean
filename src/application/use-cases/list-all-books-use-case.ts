import { BookRepository } from '../repositories/book-repository';

export class ListAllBooksUseCase {
  //seu codigo aqui
  constructor(
    private bookRepository: BookRepository
  ) {}

  execute() {
    const books = this.bookRepository.findAll();
    return books
  }
}