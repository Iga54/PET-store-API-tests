const { expect, request } = require('../../config');

describe('GET/api/films', function () {
  it('should return status code 200 and 6 films', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const expectedNumberOfFilms = 6;

    // Act:
    const response = await request.get('/api/films');
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET/api/films we expect status code ${expectedStatusCode}`,
    );
    expect(response.body.results.length).to.be.greaterThanOrEqual(
      expectedNumberOfFilms,
    );
  });
});
