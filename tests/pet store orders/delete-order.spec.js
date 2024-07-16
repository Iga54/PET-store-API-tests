const { request, expect } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('Deleting an order for a pet', function () {
  let orderId;
  it('should create a pet order and return status code 200', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    const petToOrderId = petIds.toGetOrder;
    const payload = {
      petToOrderId,
      quantity: 1,
      shipDate: '2024-06-26T13:12:46.914Z',
      status: 'placed',
      complete: true,
    };
    // Act:
    const response = await request.post('store/order').send(payload);
    // Assert:
    expect(response.statusCode).to.be.equal(
      expectedStatusCode,
      `For POST store/order we expect status code ${expectedStatusCode}`,
    );
    orderId = response.body.id;
    const responseOrder = await request.get(`store/order/${orderId}`);
    expect(responseOrder.body.status).to.be.equal(
      'placed',
      `For POST store/order we get: ${JSON.stringify(response.body)}`,
    );
  });
  
  it('should delete a pet order', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    // Act:
    const response = await request.delete(`store/order/${orderId}`);
    // Assert:
    const responseOrderAfterDelete = await request.get(`store/order/${orderId}`,
    );
    expect(responseOrderAfterDelete.statusCode).to.be.equal(
      404,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
  });
});
