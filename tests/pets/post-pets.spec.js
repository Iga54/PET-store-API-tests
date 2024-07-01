const { faker } = require('@faker-js/faker');
const { expect, request } = require('../../config');

describe('Adding a new pet to the store', function () {
  it('should add a new pet to the store and return status code 200', async function () {
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
        'https://dogtime.com/wp-content/uploads/sites/12/2023/08/GettyImages-865592368-e1692904739165.jpg',
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
