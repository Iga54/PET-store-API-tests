const { expect, request } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('GET/logout', function () {
  it('should log out a user of store', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    const response = await request.get('v2/user/logout');
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET/user/logout we expect status code ${expectedStatusCode}`,
      expect(response.body.message).to.include("ok")
    );
  });
});
