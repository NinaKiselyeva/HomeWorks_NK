const axios = require("axios");
const { Validator } = require("jsonschema");
const getBooksJsonSchema = require("../testData/generalBooks.v1.json");
const negPostBooksJsonSchema1 = require("../testData/negPostBooks.v1.json"); //check at invalid JSON schema with invalid datatype of "id"
const negPostBooksJsonSchema2 = require("../testData/getBooks.v1.json"); //check at invalid JSON schema from another request type

const validator = new Validator();
describe("API tests", function () {
  let result;
  beforeAll(async () => {
    result = await axios.post(
      "https://fakerestapi.azurewebsites.net/api/v1/Books",
      {
        id: 0,
        title: "string",
        description: "string",
        pageCount: 0,
        excerpt: "string",
        publishDate: "2024-03-23T23:39:32.538Z",
      },
      {
        headers: {
          accept: "/",
          "Content-Type": "application/json; v=1.0",
        },
      }
    );
  });

  test("POST /api/v1/Books should have response code 200", async () => {
    expect(result.status).toEqual(200);
  });

  test("POST /api/v1/Books should have valid jsonschema", async () => {
    const validationResult = await validator.validate(result.data, getBooksJsonSchema);
    //console.log(validationResult);
    expect(validationResult.valid).toEqual(true);
  });

  test("NEGATIVE POST test: /api/v1/Books should have invalid jsonschema", async () => {
    const validationResult = await validator.validate(result.data, negPostBooksJsonSchema1);
    expect(validationResult.valid).toEqual(false);
  });

  test("NEGATIVE POST test: /api/v1/Books should have invalid jsonschema", async () => {
    const validationResult = await validator.validate(result.data, negPostBooksJsonSchema2);
    expect(validationResult.valid).toEqual(false);
  });

  test("NEGATIVE POST test: /api/v1/Books should FAILED with JSON schema validation error", async () => {
    expect(result).toBeValidSchema(negPostBooksJsonSchema1);
  });
});
