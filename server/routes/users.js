import express from 'express';
const router = express.Router();

import User from '../controllers/User';

router.route('/')
    .post(User.create)
    .get(User.readList);

router.route('/:id')
    .get(User.readOne)
    .put(User.update)
    .delete(User.delete);

router.route('/login')
    .post(User.login);

export default router;
