import express from 'express';
import { auth, isAdmin } from '../middlewares/auth.js';
import { submitApplication, trackStatus, reviewApplication } from '../controllers/applicationController.js';

const router = express.Router();

router.post('/submit', auth, submitApplication);
router.get('/status', auth, trackStatus);
router.put('/review', auth, isAdmin, reviewApplication);

export default router;