import supertest from "supertest";
import app from "../../src/interface";
import mongoose from "mongoose";

const request = supertest(app);

describe("BookE2E", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI as string);
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe("Delete Book", () => {
    it("should delete an existing book", async () => {
      const createResponse = await request.post("/books").send({
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        isbn: "978-0201616224",
        publisher: "Addison-Wesley",
        category: "Programming",
        status: "read",
      });

      const bookId = createResponse.body._id;

      const deleteResponse = await request.delete(`/books/${bookId}`);

      expect(deleteResponse.status).toBe(200);
      expect(deleteResponse.body).toMatchObject({
        message: `Livro com ${bookId} deletado com sucesso`,
      });

      const listResponse = await request.get("/books");
      expect(listResponse.body).toHaveLength(0);
    });

    it("should return an error if book does not exist", async () => {
      const nonExistentId = "60d5ec49b2b2d62b3c3a7e1a"; // Ajuste para um ID que não exista
      const deleteResponse = await request.delete(`/books/${nonExistentId}`);

      expect(deleteResponse.status).toBe(404);
      expect(deleteResponse.body).toEqual({
        message: "Livro não encontrado",
      });
    });
  });
});
