const { request, expect } = require('../../config');
const { petIds } = require('../../test-data/input.data');

describe('Deleting an order', function () {
  let orderId;
//   it.only('should create a pet order', async function () {
//     // Arrange:
//     const expectedStatusCode = 200;
//     const payload = {
//       quantity: 1,
//       shipDate: '2024-06-26T13:12:46.914Z',
//     };
//     // Act:
//     const response = await request.post('v2/store/order').send(payload);
//     // Assert:
//     expect(response.statusCode).to.be.equal(
//       expectedStatusCode,
//       `For POST/v2/store/order we expect status code ${expectedStatusCode}`,
//     );
//     let orderId = response.body.petId;
//     const responseOrder = await request.get(`v2/store/order/${orderId}`);
//     expect(responseOrder.body.status).to.be.equal(
//       'approved',
//       `For POST/v2/store/order we get: ${JSON.stringify(response.body)}`,
//     );

  it('should delete a pet order', async function () {
    // Arrange:
    const expectedStatusCode = 200;
    let orderId = 5
    // Act:
    const response = await request.delete(`v2/store/order/${orderId}`);
    // Assert:
    const responseOrderAfterDelete = await request.get(
      `v2/store/order/${orderId}`,
    );
    expect(responseOrderAfterDelete.statusCode).to.be.equal(
      404,
      `Assertion failed on ${JSON.stringify(response.body)}`,
    );
  });
});
