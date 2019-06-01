import express from 'express';
const router = express.Router();

import VehicleSimulation from '../controllers/VehicleSimulation';

router.route('/')
    .post(VehicleSimulation.create)
    .get(VehicleSimulation.readList);

router.route('/:id')
    .get(VehicleSimulation.readOne)
    .put(VehicleSimulation.update)
    .delete(VehicleSimulation.delete);

export default router;
