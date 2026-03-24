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

  describe('GET /non-existent-route', () => {
    it('should return 404 Not Found', async () => {
      const response = await request(app).get('/non-existent-route');
      expect(response.status).toBe(404);
    });
  });
});
