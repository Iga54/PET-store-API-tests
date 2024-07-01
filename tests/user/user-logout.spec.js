const { expect, request } = require('../../config');
const { petIds, userData } = require('../../test-data/input.data');

describe('GET/logout', function () {
  it.only('should log out a user of store', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    const response = await request.get('v2/user/logout');
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `ForGET/user/login we expect status code ${expectedStatusCode}`,
    );
  });
});
