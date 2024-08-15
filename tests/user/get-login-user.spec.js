const { expect, request } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('GET user/login', function () {
  it('should login a user of store with params', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const username = userData.username;
    const password = userData.password;
    // Act:

      const response = await request.get(
        `user/login?username=${username}&password=${password}`,
      );
   

    // Assert:
    expect(response.body.message).to.include('logged in');
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET user/login we expect status code ${expectedStatusCode}`,
    );
  });
});
