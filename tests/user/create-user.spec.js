const { faker } = require('@faker-js/faker');
const { request, expect } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('Creating user account', function () {
  it('should create user account with input data', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const id = faker.string.uuid(2);
    const username = faker.lorem.word(4);
    const firstName = faker.lorem.word(5);
    const lastName = faker.lorem.word(7);
    const email = faker.internet.email(10);
    const password = faker.lorem.paragraph(1);
    const phone = faker.number.int(9);

    const userData = {
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    // Act:
    const response = await request.post('v2/user').send(userData);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For POST/v2/user we expect status code ${expectedStatusCode}`,
    );
  });
});
