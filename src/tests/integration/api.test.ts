import request from 'supertest';
import app from '../../index';

describe('API Integration Tests', () => {
  describe('GET /health', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.text).toBe('OK');
    });
  });

  describe('Swagger Documentation', () => {
    it('should serve Swagger UI at /docs', async () => {
      const response = await request(app).get('/docs/');
      expect(response.status).toBe(200);
      expect(response.text).toContain('swagger');
    });

    it('should serve raw OpenAPI spec at /docs.json', async () => {
      const response = await request(app).get('/docs.json');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('openapi');
      expect(response.body.info.title).toBe('Vision Backend API Documentation');
    });
  });

  describe('API Routes (Mock)', () => {
    it('GET /api/v1/products should return mock products', async () => {
      const response = await request(app).get('/api/v1/products');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body[0]).toHaveProperty('name', 'Vision Pro Mockup');
    });

    it('POST /api/v1/auth/login should return tokens', async () => {
      const response = await request(app).post('/api/v1/auth/login').send({
        email: 'test@example.com',
        password: 'password',
      });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('accessToken');
    });
  });
  describe('GET /non-existent-route', () => {
    it('should return 404 Not Found', async () => {
      const response = await request(app).get('/non-existent-route');
      expect(response.status).toBe(404);
    });
  });
});
