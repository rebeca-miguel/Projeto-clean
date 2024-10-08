import { BookRepository } from "../../src/application/repositories/book-repository"
import { UpdateBookUseCase } from "../../src/application/use-cases/update-book-use-case"
import { Book } from '../../src/domain/book'


describe('UpdateBookUseCase', () => {
    let updateBookUseCase: UpdateBookUseCase;
    let bookRepository: BookRepository;

    beforeEach(() => {
        bookRepository = {
            update: jest.fn(), 
        } as unknown as BookRepository; 
        updateBookUseCase = new UpdateBookUseCase(bookRepository);
    });

    it('deve chamar bookRepository do update com o id e parâmetros corretos', async () => {
        const id = '1';
        const params: Partial<Book> = { title: 'New Title' };

        (bookRepository.update as jest.Mock).mockResolvedValue({ id, ...params });

        const result = await updateBookUseCase.execute(id, params);

        expect(bookRepository.update).toHaveBeenCalledWith(id, params);
        expect(bookRepository.update).toHaveBeenCalledTimes(1);
        expect(result).toEqual({ id, ...params });
    });

    it('deve retornar nulo se a atualização falhar', async () => {
        const id = '1';
        const params: Partial<Book> = { title: 'New Title' };

       
        (bookRepository.update as jest.Mock).mockResolvedValue(null);

        const result = await updateBookUseCase.execute(id, params);

        expect(bookRepository.update).toHaveBeenCalledWith(id, params);
        expect(bookRepository.update).toHaveBeenCalledTimes(1);
        expect(result).toBeNull();
    });
});