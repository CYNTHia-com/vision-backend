import request from 'supertest';
import app from '../../index';

// ─── Auth Routes ─────────────────────────────────────────────────────────────
describe('Auth Routes — /api/v1/auth', () => {
  describe('POST /register', () => {
    it('should register a new user and return 201 with user data', async () => {
      const response = await request(app).post('/api/v1/auth/register').send({
        email: 'cynthia@example.com',
        password: 'securepass',
        name: 'Cynthia',
      });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('email', 'cynthia@example.com');
      expect(response.body).toHaveProperty('name', 'Cynthia');
      expect(response.body).toHaveProperty('role', 'user');
    });
  });

  describe('POST /login', () => {
    it('should return 200 with accessToken and refreshToken', async () => {
      const response = await request(app).post('/api/v1/auth/login').send({
        email: 'cynthia@example.com',
        password: 'securepass',
      });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('accessToken');
      expect(response.body).toHaveProperty('refreshToken');
    });
  });

  describe('POST /logout', () => {
    it('should logout successfully and return 204', async () => {
      const response = await request(app).post('/api/v1/auth/logout');
      expect(response.status).toBe(204);
    });
  });
});

// ─── Products Routes ──────────────────────────────────────────────────────────
describe('Products Routes — /api/v1/products', () => {
  describe('GET /', () => {
    it('should return 200 with a list of products', async () => {
      const response = await request(app).get('/api/v1/products');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body[0]).toHaveProperty('name', 'Vision Pro Mockup');
      expect(response.body[0]).toHaveProperty('price', 3499.99);
      expect(response.body[0]).toHaveProperty('category', 'Electronics');
    });
  });

  describe('POST /', () => {
    it('should create a product and return 201 with product data', async () => {
      const response = await request(app).post('/api/v1/products').send({
        name: 'Smart Watch',
        description: 'A premium smartwatch',
        price: 299.99,
        category: 'Wearables',
      });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name', 'Smart Watch');
      expect(response.body).toHaveProperty('sellerId', 's1');
      expect(response.body).toHaveProperty('createdAt');
    });
  });
});

// ─── Cart Routes ─────────────────────────────────────────────────────────────
describe('Cart Routes — /api/v1/cart', () => {
  describe('GET /', () => {
    it('should return 200 with the user cart', async () => {
      const response = await request(app).get('/api/v1/cart');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('items');
      expect(response.body).toHaveProperty('total', 0);
      expect(Array.isArray(response.body.items)).toBe(true);
    });
  });

  describe('POST /items', () => {
    it('should add an item to the cart and return 200 with updated cart', async () => {
      const response = await request(app).post('/api/v1/cart/items').send({
        productId: 'p1',
        quantity: 2,
      });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('items');
      expect(response.body.items[0]).toHaveProperty('productId', 'p1');
      expect(response.body.items[0]).toHaveProperty('quantity', 2);
      expect(response.body).toHaveProperty('total');
    });
  });
});

// ─── Orders Routes ────────────────────────────────────────────────────────────
describe('Orders Routes — /api/v1/orders', () => {
  describe('POST /', () => {
    it('should place an order and return 201 with order data', async () => {
      const response = await request(app).post('/api/v1/orders');
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('status', 'pending');
      expect(response.body).toHaveProperty('createdAt');
    });
  });

  describe('GET /', () => {
    it('should return 200 with a list of orders', async () => {
      const response = await request(app).get('/api/v1/orders');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});

// ─── Sellers Routes ───────────────────────────────────────────────────────────
describe('Sellers Routes — /api/v1/sellers', () => {
  describe('POST /register', () => {
    it('should register a seller and return 201 with seller data', async () => {
      const response = await request(app)
        .post('/api/v1/sellers/register')
        .send({
          shopName: 'Vision Store',
          description: 'Best tech gadgets',
        });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id', 's1');
      expect(response.body).toHaveProperty('shopName', 'Vision Store');
      expect(response.body).toHaveProperty('rating', 5.0);
    });

    it('should work without an optional description field', async () => {
      const response = await request(app)
        .post('/api/v1/sellers/register')
        .send({ shopName: 'Minimal Shop' });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('shopName', 'Minimal Shop');
      expect(response.body).toHaveProperty('description', '');
    });
  });

  describe('GET /profile', () => {
    it('should return 200 with seller profile data', async () => {
      const response = await request(app).get('/api/v1/sellers/profile');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('shopName', 'Visionary Shop');
      expect(response.body).toHaveProperty('rating', 4.8);
    });
  });
});

// ─── Health & Swagger ─────────────────────────────────────────────────────────
describe('Health & Swagger', () => {
  it('GET /health — should return 200 OK', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });

  it('GET /docs/ — should serve Swagger UI', async () => {
    const response = await request(app).get('/docs/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('swagger');
  });

  it('GET /docs.json — should return OpenAPI spec', async () => {
    const response = await request(app).get('/docs.json');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('openapi');
    expect(response.body.info.title).toBe('Vision Backend API Documentation');
  });

  it('GET /non-existent-route — should return 404', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.status).toBe(404);
  });
});
