const { request, expect } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('Placing an order for a pet', function () {
  let petToOrderId;
  it('should verify the availability of pet before placing an order', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    petToOrderId = petIds.toGetOrder;
    // Act:
    const response = await request.get(`pet/${petToOrderId}`);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For GET pet/${petToOrderId} we expect status code ${expectedStatusCode}`,
    );
    expect(response.body.status).to.include(
      'available',
      `For GET pet/${petToOrderId} we get: ${JSON.stringify(response.body)}`,
    );
  });
  it('should place an order for a pet', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const payload = {
      petToOrderId,
      quantity: 1,
      shipDate: '2024-06-26T13:12:46.914Z',
    };
    // Act:
    const response = await request.post('store/order').send(payload);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
    const responseOrder = await request.get(
      `store/order/${response.body.id}`,
    );
    expect(responseOrder.body.quantity).to.be.equal(1,
      `Assertion failed on ${JSON.stringify(response.body)}`)
  });
});
