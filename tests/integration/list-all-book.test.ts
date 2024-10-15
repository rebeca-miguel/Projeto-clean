
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


  describe("List Books", () => {
    it("should list all books", async () => {
      await request.post("/books").send({
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        isbn: "978-0201616224",
        publisher: "Addison-Wesley",
        category: "Programming",
        status: "read",
      });

      await request.post("/books").send({
        title: "Clean Code",
        author: "Robert C. Martin",
        isbn: "978-0201616224",
        publisher: "Prentice Hall",
        category: "Programming",
        status: "read",
      });

      const response = await request.get("/books");

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(2);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
          }),
          
        ])
      );
    });

    it("should return an empty array when there are no books", async () => {
      const response = await request.get("/books");

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([]);
    });
  });

})
  


