import { BookRepository } from "../../src/application/repositories/book-repository";
import { DeleteBookUseCase } from "../../src/application/use-cases/delete-book-use-case"

describe('DeleteBookUseCase', () => {
    let deleteBookUseCase: DeleteBookUseCase;
    let bookRepository: BookRepository;

    beforeEach(() => {
        bookRepository = {
            delete: jest.fn(), 
        } as unknown as BookRepository; 
        deleteBookUseCase = new DeleteBookUseCase(bookRepository);
    });

    it('deve chamar bookRepository delete com o id correto', async () => {
        const id = '1'; 

        await deleteBookUseCase.execute(id);

        expect(bookRepository.delete).toHaveBeenCalledWith(id);
        expect(bookRepository.delete).toHaveBeenCalledTimes(1);
    });
});