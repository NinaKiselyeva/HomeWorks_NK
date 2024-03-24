const axios = require("axios");
const { Validator } = require("jsonschema");
//const deleteBooksJsonSchemaID = require("../testData/deleteBooksID.v1.json");

const validator = new Validator();
describe("API tests deleteBooks{id}", function () {
  let result;
  const id = 200; //задаем параметр ID
  const apiURL = `https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`;
  beforeAll(async () => {
    result = await axios.delete(apiURL, {
      headers: {
        accept: "text/plain; v=1.0",
      },
    });
  });

  test(`DELETE /api/v1/Books{id=${id}} should have response code 200`, async () => {
    expect(result.status).toEqual(200);
  });
});
