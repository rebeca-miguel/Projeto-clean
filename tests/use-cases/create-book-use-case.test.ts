import { CreateBookUseCase } from '../../src/application/use-cases/create-book-use-case';
import { BookRepository } from '../../src/application/repositories/book-repository';


// Mocks
const bookRepositoryMock = {
  save: jest.fn()
};

const idGeneratorMock = {
  generate: jest.fn().mockReturnValue('unique-id-123')
};

// Teste unitário
describe('CreateBookUseCase', () => {
  let createBookUseCase: CreateBookUseCase;

  beforeEach(() => {
    createBookUseCase = new CreateBookUseCase(
      bookRepositoryMock as unknown as BookRepository,
    
    );
  });

  it('should create a book and save it', () => {
    const bookParams = {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      publisher: 'Addison-Wesley',
      category: 'Programming',
      status: 'read'
    };

    const result = createBookUseCase.execute(bookParams as any);

    expect(bookRepositoryMock.save).toHaveBeenCalledWith({
    
      createdAt: expect.any(String), // Verifica se é uma string, mas não precisa ser uma data específica
      ...bookParams
    });
    expect(result).toEqual({
     
      createdAt: expect.any(String),
      ...bookParams
    });
  });
});