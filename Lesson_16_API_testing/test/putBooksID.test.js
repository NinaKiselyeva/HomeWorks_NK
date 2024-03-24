const axios = require("axios");
const { Validator } = require("jsonschema");
const putBooksJsonSchemaID = require("../testData/generalBooks.v1.json");

const validator = new Validator();
describe("API tests putBooks{id}", function () {
  let result;
  const id = 5; //задаем параметр ID
  const apiURL = `https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`;
  beforeAll(async () => {
    result = await axios.put(apiURL, {
      id: 0,
      title: "string",
      description: "string",
      pageCount: 0,
      excerpt: "string",
      publishDate: "2024-03-24T14:11:12.777Z",
      headers: { accept: "text/plain; v=1.0" },
    });
  });

  test(`PUT /api/v1/Books{id=${id}} should have response code 200`, async () => {
    expect(result.status).toEqual(200);
  });

  test(`PUT /api/v1/Books{id=${id}} should have valid jsonschema`, async () => {
    const validationResult = await validator.validate(result.data, putBooksJsonSchemaID);
    //console.log(validationResult);
    expect(validationResult.valid).toEqual(true);
  });
});
