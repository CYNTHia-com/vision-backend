import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Sellers
 *   description: Seller account and profile management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Seller:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         userId:
 *           type: string
 *         shopName:
 *           type: string
 *         description:
 *           type: string
 *         rating:
 *           type: number
 *     ApiError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         code:
 *           type: string
 */

/**
 * @swagger
 * /sellers/register:
 *   post:
 *     summary: Register as a seller
 *     tags: [Sellers]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - shopName
 *             properties:
 *               shopName:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seller account created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seller'
 */
router.post('/register', (req, res) => {
  res.status(201).json({
    id: 's1',
    userId: 'u1',
    shopName: req.body.shopName,
    description: req.body.description || '',
    rating: 5.0,
  });
});

/**
 * @swagger
 * /sellers/profile:
 *   get:
 *     summary: Get seller profile
 *     tags: [Sellers]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Seller profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seller'
 *       404:
 *         description: Not a seller
 */
router.get('/profile', (req, res) => {
  res.status(200).json({
    id: 's1',
    userId: 'u1',
    shopName: 'Visionary Shop',
    description: 'The best gadgets',
    rating: 4.8,
  });
});

export default router;
