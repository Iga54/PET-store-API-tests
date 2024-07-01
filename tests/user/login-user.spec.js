const { expect, request } = require('../../config');
const { petIds, userData } = require('../../test-data/input.data');

describe('GET/user/login', function () {
  it.only('should login a user of store with params', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const username = userData.username;
    const password = userData.password;
    // Act:
    const response = await request.get(
      `v2/user/login?username=${username}&password=${password}`,
    );
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `ForGET/user/login we expect status code ${expectedStatusCode}`,
    );
  });
});
