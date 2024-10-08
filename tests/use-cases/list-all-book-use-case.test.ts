import { randomUUID } from "crypto"
import { BookRepository } from "../../src/application/repositories/book-repository"
import { ListAllBooksUseCase } from "../../src/application/use-cases/list-all-books-use-case"

// o teste unitário ela vai testar expecificamente a nossa função execute que vai listar todos os livros.
describe('ListBookUseCase', () => {
    //1- variável para armazenar 
    let listAllBookUseCase: ListAllBooksUseCase
    //mocar o bookRepository
    let mockBookRepository:  BookRepository = {
      findAll: jest.fn()  
    } as unknown as BookRepository


    beforeEach(() => {
        listAllBookUseCase = new ListAllBooksUseCase(mockBookRepository)
    })

    it('should list all books', async () => {
        const expectdBooks = [
            {
                id: randomUUID(),
                title: 'Deveops',
            },

            {
                id: randomUUID(),
                title: 'Mulheres que correm com lobos',
            }
        ] as any
        jest.spyOn(mockBookRepository, 'findAll').mockImplementation(() => Promise.resolve(expectdBooks))
        const books = await listAllBookUseCase.execute()
        expect(mockBookRepository.findAll).toHaveBeenCalled()
        expect(books).toMatchObject(expectdBooks)
        
    })
})