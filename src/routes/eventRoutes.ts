import { Router } from 'express';
import { getEvents, createEvent, getEventById, addGift, addParticipants } from '../controllers/eventController';
import adminAuth from '../middleware/adminAuth';

const router = Router();

router.get('/', getEvents);
router.post('/', adminAuth, createEvent);
router.get('/:id', getEventById);
router.post('/:id/gifts', adminAuth, addGift);
router.post('/:id/participants', adminAuth, addParticipants);

export default router;
