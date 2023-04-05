const request = require("supertest");
const createServer = require("../server");

describe("Test the root path", () => {
  let server;

  beforeAll(async () => {
    server = await createServer().listen();
  });

  afterAll(() => {
    server.close();
  });

  test("It should respond with a 302 redirect", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(302);
  });

  test("The route should not exist (404)", async () => {
    const res = await request(server).get("/nonexisting");
    expect(res.statusCode).toBe(404);
  });
});
