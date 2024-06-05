import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

let verifyToken;

describe('User APIs Test', () => {
  beforeAll(async() => {
    const clearCollections = async() => {
      for (const collection in mongoose.connection.collections) {
        await mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      await clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      await mongooseConnect();
    } else {
      await clearCollections();
    }
  });

  describe('POST /users/', () => {
    it('should return user object', async () => {
      const res = await request(app)
        .post('/api/v1/users/')
        .send({
          fullname: 'Prateek',
          contact: '6362163593',
          email: 'prateek123@gmail.com',
          password: 'Prateek@123'
        });
        verifyToken = res.body.data;
        expect(res.statusCode).toBe(201);
    });
  });describe('POST /users/user', () => {
    it('should verify email', async () => {
      const res = await request(app)
        .get('/api/v1/users/user')
        .set('Authorization', `Bearer ${verifyToken}`);
        expect(res.statusCode).toBe(201);
    });
  });

});
