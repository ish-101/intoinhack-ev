import express from 'express';
const router = express.Router();

import UsersRoute from './users';

router.use('/users', UsersRoute);

export default router;
