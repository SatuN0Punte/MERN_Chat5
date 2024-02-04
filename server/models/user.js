// ไฟล์นี้เป็นโมเดลของผู้ใช้ (User) ใน MongoDB ที่ใช้ Mongoose

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// กำหนดโครงสร้างของผู้ใช้
const UserSchema = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
}, 
{
    timestamps: true,
});

// สร้างโมเดล User จาก Schema
const UserModel = model("User", UserSchema);

// ส่งออกโมเดล User
module.exports = UserModel;