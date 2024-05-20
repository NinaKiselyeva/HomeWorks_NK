const axios = require('axios');
const { Validator } = require('jsonschema');
const getCategoryJsonSchema = require('../testData/getCategory.v1.json');

const validator = new Validator();
describe('API tests', function () {
  let result;
  beforeAll(async () => {
    result = await axios.get('https://api.practicesoftwaretesting.com/categories/tree', {
      headers: {
        accept: 'application/json',
      },
    });
  });

  test('GET /categories/tree should have response code 200', async () => {
    expect(result.status).toEqual(200);
  });

  test('GET /categories/tree should have valid jsonschema', async () => {
    const validationResult = await validator.validate(result.data, getCategoryJsonSchema);
    expect(validationResult.valid).toEqual(true);
  });
});
