import express from "express";
import { protect } from "../middlewares/userMiddleware.js";
import { createQueries, deleteQueries, getQueries } from "../controllers/queriesController.js";

const router = express.Router();

router.post('/create', createQueries)
router.get('/get', protect, getQueries)
router.delete('/delete', protect, deleteQueries)

export default router;
