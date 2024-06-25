const { expect, request } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('GET/pets', function () {
  it('should return status code 200 and more than 30 pets with all statuses', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const expectedNumberOfPets = 30;
    // Act:
    const response = await request.get(
      'v2/pet/findByStatus?status=available&status=pending&status=sold',
    );
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET/pets we expect status code ${expectedStatusCode}`,
    );
    expect(response.body.length).to.be.greaterThanOrEqual(
      expectedNumberOfPets,
      `For GET/pets we expect more than ${expectedStatusCode} pets with all statuses`,
    );
  });
  it('should return a pet with given id', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const expectedPetId = petIds.toGet;
    // Act:
    const response = await request.get(`v2/pet/${expectedPetId}`);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET/v2/pet/${expectedPetId} we expect status code ${expectedStatusCode}`,
    );
    expect(response.body.id).to.be.equal(
      expectedPetId,
      `For GET/v2/pet/${expectedPetId} we get: ${JSON.stringify(response.body)}`,
    );
  });
  it('should return pets filtered by available status', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    const response = await request.get('v2/pet/findByStatus?status=available');
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET/v2/pet/findByStatus?status=available' we expect status code ${expectedStatusCode}`,
    );
  });
});
