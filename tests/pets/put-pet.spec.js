const { faker } = require('@faker-js/faker');
const { expect, request } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('updating pets - PUT', function () {
  it('should update existing pet and return status code 200', async function () {
    // Arrange:
    const petId = petIds.toPut;
    const name = faker.lorem.word(4);
    const expectedStatusCode = 200;
    const payload = {
      id: petId,
      name,
      photoUrls: ['https://dogtime.com/wp-content/uploads/sites/12/2023/08/GettyImages-865592368-e1692904739165.jpg'],
      
    };
    // Act:
    const response = await request.put('v2/pet').send(payload);
    // Assert:
    expect(response.statusCode).to.be.equal(expectedStatusCode);
    payload.id = response.body.id;
    const responsePet = await request.get(`v2/pet/${petId}`);
    expect(responsePet.body.name).to.be.deep.equal(payload.name);
  });
});
