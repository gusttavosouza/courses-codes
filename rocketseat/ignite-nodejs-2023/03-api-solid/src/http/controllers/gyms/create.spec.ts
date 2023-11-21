import { app } from '@/app';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';

describe('Create gyms (e2e)', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    const profileResponse = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some Description',
        phone: '1199999999',
        latitude: -27.0747279,
        longitude: -49.4889672,
      });

    expect(profileResponse.statusCode).toEqual(201);
  });
});
