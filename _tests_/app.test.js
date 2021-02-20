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

  it("tests that a GET to the /get endpoint works as intended", () => {});

  it("tests that a GET to the /set endpoint works as intended", () => {});
});
