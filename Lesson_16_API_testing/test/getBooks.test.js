const axios = require("axios");
const { Validator } = require("jsonschema");
const getBooksJsonSchema = require("../testData/getBooks.v1.json");
const negGetBooksJsonSchema1 = require("../testData/negGetBooks.v1.json"); //check at invalid JSON schema with invalid datatype of "pageCount"
const negGetBooksJsonSchema2 = require("../testData/generalBooks.v1.json"); //check at invalid JSON schema from another request type

const validator = new Validator();
describe("API tests", function () {
  let result;
  beforeAll(async () => {
    result = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Books", {
      headers: {
        accept: "text/plain; v=1.0",
      },
    });
  });

  test("GET /api/v1/Books should have response code 200", async () => {
    expect(result.status).toEqual(200);
  });

  test("GET /api/v1/Books should have valid jsonschema", async () => {
    const validationResult = await validator.validate(result.data, getBooksJsonSchema);
    //console.log(validationResult);
    expect(validationResult.valid).toEqual(true);
  });

  test("NEGATIVE GET test: /api/v1/Books should have invalid jsonschema", async () => {
    const validationResult = await validator.validate(result.data, negGetBooksJsonSchema1);
    expect(validationResult.valid).toEqual(false);
  });

  test("NEGATIVE GET test: /api/v1/Books should have invalid jsonschema", async () => {
    const validationResult = await validator.validate(result.data, negGetBooksJsonSchema2);
    expect(validationResult.valid).toEqual(false);
  });
});
