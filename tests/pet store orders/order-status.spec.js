const { request, expect } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('Pet store orders and statuses', function () {
  it('should contain available in the pet inventories', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    const response = await request.get('v2/store/inventory');
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    // expect(response.body).to.have.property('available'); //??????
  });
  it.only('should return an order with given id', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const petId = petIds.toGetOrder;
    // Act:
    const response = await request.get(`v2/store/order/${petId}`);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    expect(response.body.id).to.be.equal(
      petId,
      `For v2/store/order/${petId} we get: ${JSON.stringify(response.body)}`,
    );
  });
  it('should contain information about order status', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const petId = 2;
    // Act:
    const response = await request.get(`v2/store/order/${petId}`);
    // Assert:
    expect(response.body).to.have.property(
      'status',
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    expect(response.body.status).to.include(
      'placed',
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
  });
});

//sprawdzic status zwierzaka przed zamówieniem expect to be equal available
//zlozyc zamowienie
//readme
