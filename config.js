const { expect } = require('chai');
// const baseURL = 'https://petstore.swagger.io/';
const baseURL = 'http://localhost/';
const request = require('supertest')(baseURL);

module.exports = {
  request,
  expect,
};