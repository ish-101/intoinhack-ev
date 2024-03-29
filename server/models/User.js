import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    license_number: { type: String, required: true, unique: true },
    vehicle_simulation: { type: Schema.Types.ObjectId, unique: true, ref: 'VehicleSimulation' }
});

const UserModel = model('User', UserSchema);

export default UserModel;
