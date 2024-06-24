const { expect } = require('chai');
const baseURL = 'https://swapi.dev';
const request = require('supertest')(baseURL);

module.exports = {
  request,
  expect,
};
