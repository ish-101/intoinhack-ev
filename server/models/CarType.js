import { model, Schema } from 'mongoose';

const CarTypeSchema = new Schema({
    name: { type: String, required: true, unique: true }
});

const CarTypeModel = model('CarType', CarTypeSchema);

export default CarTypeModel;