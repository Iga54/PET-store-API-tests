const { request, expect } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('Pet store orders and statuses', function () {
  let orderId;
  it('should contain available status in the pet inventories', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    const response = await request.get('v2/store/inventory');
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    expect(response.body).to.have.property('available');
  });
  it('should return an order with given id', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    orderId = petIds.toGetOrder;
    // Act:
    const response = await request.get(`v2/store/order/${orderId}`);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    expect(response.body.id).to.be.equal(
      orderId,
      `For v2/store/order/${orderId} we get: ${JSON.stringify(response.body)}`,
    );
  });
  it('should contain information about quantity of pets', async function () {
    //Arrange:
    const expectedPetQuantity = 2;
    // Act:
    const response = await request.get(`v2/store/order/${orderId}`);
    // Assert:
    expect(response.body.quantity).to.be.equal(expectedPetQuantity
      ,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
  });
});
