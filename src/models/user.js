import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash; // 여기서 this는 문서 인스턴스를 가리킴
};

UserSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.hashedPassword); // 여기서 this는 문서 인스턴스를 가리킴
    return result; // true / false
};

UserSchema.statics.findByUsername = function (username) {
    return this.findOne({ username }); // 여기서 this는 모델을 가리킴
};

const User = mongoose.model('User', UserSchema);
export default User;
