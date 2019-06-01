import express from 'express';
const router = express.Router();

import UsersRoute from './users';
import VehicleSimulationRoute from './vehicle_simulations';
import CarTypeRoute from './car_types';

router.use('/users', UsersRoute);
router.use('/vehicle_simulations', VehicleSimulationRoute);
router.use('/car_types', CarTypeRoute);

export default router;