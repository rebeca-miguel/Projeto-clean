//import { isTemplateExpression } from 'typescript';
import { BookRepository } from '../../../application/repositories/book-repository';
import { Book } from '../../../domain/book';
import { BookModel } from './model';

export class Repository implements BookRepository {
    async save (book: Book): Promise<void> {
        const newBook = new BookModel(book)
         await newBook.save();
        
    }

    async findAll (): Promise<Array<Book>> { 
        const books = await BookModel.find();

        const translatedBooks = books.map(item => {
            return {
                id: item._id.toString(),
                title: item.title,
                author: item.author,
                isbn: item.isbn,
                publisher: item.publisher,
                category: item.category,
                cover: item.cover,
                status: item.status,
                createdAt: item.createdAt
            }
        }) as Array<Book>

        return translatedBooks;
        
    }

    async update(id: string, params: Partial<Book>): Promise<Book | null> {
        const updatedBook = await BookModel.findByIdAndUpdate(id, params, { new: true })

        if (updatedBook) {
            return {
                id: updatedBook._id.toString(),
                author: updatedBook.author,
                category: updatedBook.category,
                createdAt: updatedBook.createdAt,
                isbn: updatedBook.isbn,
                publisher: updatedBook.publisher,
                status: updatedBook.status,
                title: updatedBook.title,
                cover: updatedBook.cover

            } as Book;
        }
        
        return null
    }

    async delete(id: string): Promise<void> {
        await BookModel.findByIdAndDelete(id)
    }

}