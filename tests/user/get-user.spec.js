const { faker } = require('@faker-js/faker');
const { request, expect } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('GET - Get a user data', function () {
  it('should return user data', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const username = userData.username;
    // Act:
    const response = await request.get(`v2/user/${username}`);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET/v2/user/${username} we expect status code ${expectedStatusCode}`,
    );
  });
});
