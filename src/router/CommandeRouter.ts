import express from "express";

import { addRecruteur } from "../controllers/addRecruteur";

const router = express.Router();

/**
 * @swagger
 * /addRecruteur:
 *   post:
 *     summary: post Recruteur
 *     tags: [Recruteur]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               nomp:
 *                 type: string
 *               numtel:
 *                 type: string
 *               dns:
 *                 type: string
 *                 description: Start date
 *                 example: "2017-01-01"
 *                 format: date
 *               mlanguage:
 *                 type: string
 *               experience:
 *                 type: string
 *               etablissement:
 *                 type: string
 *               filiere:
 *                 type: string
 *               etude:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object 
 */
 router.route("/addRecruteur").post(addRecruteur);


export default router;