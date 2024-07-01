const { faker } = require('@faker-js/faker');
const { request, expect } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('Creating user account', function () {
  it.only('should create user account with input data', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const username = userData.username;
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
});
