const { faker } = require('@faker-js/faker');
const { request, expect } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('PUT - updating a user ', function () {
  it('should update user data', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const id = faker.string.uuid(2);
    const username = userData.username;
    const firstName = faker.lorem.word(5);
    const lastName = faker.lorem.word(7);
    const email = faker.internet.email(8);
    const password = userData.password;
    const phone = faker.number.int();

    const userInput = {
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    // Act:
    const response = await request.put(`v2/user/${username}`).send(userInput);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For PUT/v2/user we expect status code ${expectedStatusCode}`,
    );
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // const responseAfterUpdate = await request.get(`v2/user/${username}`);
    // console.log('Response after update:', responseAfterUpdate.body);
    // expect(responseAfterUpdate.body.phone).to.be.deep.equal(userInput.phone);
  });
});
