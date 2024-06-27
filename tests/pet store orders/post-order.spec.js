const { request, expect } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('Placing an order', function () {
  it('should verify the availability of pet before placing an order', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const orderId = petIds.toGetOrder;
    // Act:
    const response = await request.get(`v2/pet/${orderId}`);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET/v2/pet/${orderId} we expect status code ${expectedStatusCode}`,
    );
    expect(response.body.status).to.include(
      'available',
      `For GET/v2/pet/${orderId} we get: ${JSON.stringify(response.body)}`,
    );
  });
  it('should place an order for a pet and check if order was placed', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const petId = petIds.toGetOrder;
    const payload = {
      petId,
      quantity: 1,
      shipDate: '2024-06-26T13:12:46.914Z',
      status: 'placed',
    };
    // Act:
    const response = await request.post('v2/store/order').send(payload);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    const responseOrder = await request.get(
      `v2/store/order/${response.body.id}`,
    );
    expect(responseOrder.body.status).to.include(
      'placed',
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
  });
});
