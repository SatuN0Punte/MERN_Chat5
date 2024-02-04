// ไฟล์นี้เป็นโมเดลของข้อความ (Message) ใน MongoDB ที่ใช้ Mongoose

const mongoose = require("mongoose");

// กำหนดโครงสร้างของข้อความ
const MessageSchema = new mongoose.Schema({
    text: String,
    file: String,
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, 
{ timestamps: true }
);

// สร้างโมเดล Message จาก Schema
const messageModel = mongoose.model("Message", MessageSchema);

// ส่งออกโมเดล Message
module.exports = messageModel;
