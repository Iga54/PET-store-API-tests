const { expect, request } = require('../../config');
const { userData } = require('../../test-data/input.data');

describe('GET user/login', function () {
  it.only('should login a user of store with params', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const username = userData.username;
    const password = userData.password;
    // Act:
    const response = await request.get(
      `user/login?username=${username}&password=${password}`,

    );
    console.log(response)
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET user/login we expect status code ${expectedStatusCode}`,
    );
  });
});

 // Logowanie surowej odpowiedzi tekstowej
 console.log(response.text);

 // Sprawdzanie nagłówków odpowiedzi
 const contentType = response.headers['content-type'];
 let responseBody;

 if (contentType && contentType.includes('application/json')) {
   // Parsowanie odpowiedzi jako JSON
   responseBody = JSON.parse(response.text);
 } else {
   // Obsługa odpowiedzi jako tekst
   responseBody = { message: response.text };
 }

 // Sprawdzanie poprawności odpowiedzi
 if (responseBody.message) {
   expect(responseBody.message).toMatch(/Logged in/);
 } else {
   expect(responseBody.status).toBe('success');
   expect(responseBody.message).toBe('Logged in');
 }