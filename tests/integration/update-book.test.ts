import supertest from "supertest";
import app from "../../src/interface";
import mongoose from "mongoose";

const request = supertest(app);

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI as string);
});

afterEach(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Update Book", () => {
  it("should update an existing book partially", async () => {
    const createResponse = await request.post("/books").send({
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "978-0201616224",
      publisher: "Addison-Wesley",
      category: "Programming",
      status: "read",
    });

    const bookId = createResponse.body._id;

    const updateResponse = await request.patch(`/books/${bookId}`).send({
      title: "The Pragmatic Programmer (Updated)",
    });

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body).toMatchObject({
      title: "The Pragmatic Programmer (Updated)",
      author: "Andrew Hunt", // Se o autor não for atualizado, ainda deve estar presente.
    });

    const checkResponse = await request.get(`/books/${bookId}`);
    expect(checkResponse.body).toMatchObject({
      title: "The Pragmatic Programmer (Updated)",
      author: "Andrew Hunt",
    });
  });
  
  // O teste de erro pode ser mantido como está
});
    
    
    
    