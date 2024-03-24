const axios = require("axios");
const { Validator } = require("jsonschema");
const getBooksJsonSchemaID = require("../testData/generalBooks.v1.json");

const validator = new Validator();
describe("API tests getBooks{id}", function () {
  let result;
  const id = 8; //задаем параметр ID
  const apiURL = `https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`;
  beforeAll(async () => {
    result = await axios.get(apiURL, {
      headers: {
        accept: "text/plain; v=1.0",
      },
    });
  });

  test(`GET /api/v1/Books{id=${id}} should have response code 200`, async () => {
    expect(result.status).toEqual(200);
  });

  test(`GET /api/v1/Books{id=${id}} should have valid jsonschema`, async () => {
    const validationResult = await validator.validate(result.data, getBooksJsonSchemaID);
    //console.log(validationResult);
    expect(validationResult.valid).toEqual(true);
  });
});
