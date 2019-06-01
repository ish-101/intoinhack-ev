import { model, Schema } from 'mongoose';

const VehicleSimulationSchema = new Schema({
    car_type: { type: Schema.Types.ObjectId, ref: 'CarType', required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    charging: { type: Number, required: true}
});

const VehicleSimulationModel = model('VehicleSimulation', VehicleSimulationSchema);

export default VehicleSimulationModel;