const request = require("supertest");
const app = require("../lib/app");
const { client } = require("../lib/connection/client");

describe("pair-programming routes", () => {
  beforeAll(() => {
    return client.set("testkey", "testval");
  });

  afterAll(() => {
    return client.end(true);
  });

  it("tests that a GET to the /get endpoint works as intended", () => {
    return request(app)
      .get("/get?key=testkey")
      .then((res) => {
        expect(res.body).toEqual({ testkey: "testval" });
      })
      .catch();
  });

  it("tests that a GET to the /set endpoint works as intended", () => {});
});
