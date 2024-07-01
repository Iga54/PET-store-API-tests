const { faker } = require('@faker-js/faker');
const { request, expect } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('Deleting created user account', function () {
  let username;
  it.only('should create user account', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const id = faker.string.uuid(2);
    username = faker.lorem.word(4);
    const firstName = faker.lorem.word(5);
    const lastName = faker.lorem.word(7);
    const email = faker.internet.email(10);
    const password = userData.password;
    const phone = faker.number.int(9);

    const userInput = {
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    // Act:
    const response = await request.post('v2/user').send(userInput);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For POST/v2/user we expect status code ${expectedStatusCode}`,
    );
  });
  it.only('should delete created user account ', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    const response = await request.delete(`v2/user/${username}`);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For DELETE/v2/user we expect status code ${expectedStatusCode}`,
    );
    const responseAfterDelete = await request.get(`v2/user/${username}`);
    expect(responseAfterDelete.statusCode).to.be.equal(404);
  });
});
