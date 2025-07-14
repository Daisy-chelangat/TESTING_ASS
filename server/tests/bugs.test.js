const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Bug = require('../models/bugModel');
const bugRoutes = require('../routes/bugRoutes');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);

// Connect to in-memory test DB
beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/bugtracker_test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
});

// Clean up DB before each test
beforeEach(async () => {
  await Bug.deleteMany();
});

// Disconnect after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Bug API', () => {
  test('POST /api/bugs creates a bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'UI glitch', description: 'Button misaligned' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('UI glitch');
  });

  test('GET /api/bugs returns bug list', async () => {
    await Bug.create({ title: 'Test Bug' });
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
