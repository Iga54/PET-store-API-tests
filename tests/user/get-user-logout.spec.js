const { expect, request } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('GET logout', function () {
  it('should log out a user of store', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    let responseText;
    let responseStatusCode;
    try {
      const response = await request.get('user/logout')
    } catch (error) {
      responseText = error.rawResponse;
      responseStatusCode = error.statusCode;
    }

    // Assert:
    expect(responseStatusCode).to.be.equal(
      expectedStatusCode,
      `For GET user/logout we expect status code ${expectedStatusCode}`,
    );
  });
});
