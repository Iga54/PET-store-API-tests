const { expect } = require('chai');
// const baseURL = 'https://petstore.swagger.io/';
const baseURL = 'http://localhost:8080/api/v3/';
const request = require('supertest')(baseURL);

module.exports = {
  request,
  expect,
};
