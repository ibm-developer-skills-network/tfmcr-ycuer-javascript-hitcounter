/**
 * Test Cases for Hitcounter Service
 */
const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Hit Counter Service', () => {
  it('should return the home page with Swagger documentation', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.type).to.equal('text/html');
  });

  it('should get the current hit count', async () => {
    const response = await request(app).get('/hits');
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('counter');
    expect(response.body.counter).to.equal(0);
  });

  it('should increment the hit count', async () => {
    const response = await request(app).put('/hits');
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('counter');
    expect(response.body.counter).to.equal(1);
  });
});