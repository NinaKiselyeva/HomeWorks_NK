const axios = require('axios');
const { Validator } = require('jsonschema');
const postCategoryJsonSchema = require('../testData/postCategory.v1.json');

const validator = new Validator();

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

describe('API tests PUT', function () {
  let result;

  beforeAll(async () => {
    result = await axios.post(
      'https://api.practicesoftwaretesting.com/carts',
      {
        name: 'new category',
        slug: 'new-category',
        id: '01hy6p4z9dh8zap8gxnhj3mxt4',
      },
      {
        'access-control-allow-origin': '*',
        'access-control-expose-headers': 'Content-Disposition',
        'cache-control': 'no-cache,private',
        charset: 'utf-8 ',
        connection: 'close',
        'content-type': 'application/json;charset=UTF-8 ',
        server: 'Apache/2.4.41 (Ubuntu) ',
        'transfer-encoding': 'chunked',
      }
    );
  });

  test('POST /categories/tree should have response code 201', async () => {
    await expect(await result.status).toEqual(201);
  });

  test('POST /categories/tree should have valid jsonschema', async () => {
    const validationResult = await validator.validate(result.data, postCategoryJsonSchema);
    await expect(await validationResult.valid).toEqual(true);
  });
});
