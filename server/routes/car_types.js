import express from 'express';
const router = express.Router();

import CarType from '../controllers/CarType';

router.route('/')
    .post(CarType.create)
    .get(CarType.readList);

router.route('/:id')
    .get(CarType.readOne)
    .put(CarType.update)
    .delete(CarType.delete);

export default router;
