import request from "supertest";
import app from "../src/index";
describe("GET /ping", () => {
  it("responds with JSON message 'pong'", async () => {
    const response = await request(app).get("/ping");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pong");
    expect(response.header["content-type"]).toMatch(/application\/json/);
  });
});