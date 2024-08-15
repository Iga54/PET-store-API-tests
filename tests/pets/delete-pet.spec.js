const { faker } = require('@faker-js/faker');
const { expect, request } = require('../../config');

describe('Deleting created pet', function () {
  let petToDelete;
  it('should create a pet and return status code 200', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const uniqueId = new Date().getTime();
    const name = faker.lorem.word(5);
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
    const response = await request.post('pet').send(payload);
    petToDelete = response.body.id;
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
  });

  it('should delete created pet and return status code 200', async function () {
    // Arrange:
    const expectedStatusCode = 200;

    // Act:

    const response = await request.delete(`pet/${petToDelete}`);

    // Assert:
    expect(response.statusCode).to.be.equal(expectedStatusCode);
  });
});
