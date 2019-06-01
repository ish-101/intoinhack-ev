import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true }
});


const UserModel = model('User', UserSchema);

export default UserModel;
