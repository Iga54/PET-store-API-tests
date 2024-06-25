const { faker } = require('@faker-js/faker');
const { expect, request } = require('../../config');

describe('Creating a unique pet', function () {
  it.only('should create a pet and return status code 200', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const uniqueId = new Date().getTime();
    const name = faker.lorem.word(6);
    const payload = {
      id: uniqueId,
      category: {
        id: 0,
        name,
      },
      name,
      photoUrls: [
        'https://www.akc.org/wp-content/uploads/2017/11/Collie-standing-in-a-field.jpg',
      ],
      tags: [
        {
          id: 0,
          name: 'string',
        },
      ],
      status: 'available',
    };
    // Act:
    const response = await request.post('v2/pet').send(payload);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    const responsePet = await request.get(`v2/pet/${response.body.id}`);
    payload.id = response.body.id;
    expect(responsePet.body).to.be.deep.equal(
      payload,
      `Assertion failed on ${responsePet.body}`,
    );
  });
});
