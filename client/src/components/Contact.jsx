import React from "react";
import Avatar from "./Avatar";

const Contact = ({ username, id, online, selected, onClick }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-100 flex items-center gap-2 cursor-pointer " +
        (selected ? "bg-blue-50" : "")
      }
    >
      {selected && <div className="w-1 bg-blue-600 h-12 rounded-r-md"></div>}

      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar username={username} userId={id} online={online} />
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  );
};

export default Contact;
// นี่คือคอมโพนเนนต์ Contact ที่ใช้แสดงรายชื่อผู้ติดต่อในแชท

import React from "react";
import Avatar from "./Avatar";  // Import Avatar component ที่ใช้แสดงรูปประจำตัวของผู้ติดต่อ

// คอมโพนเนนต์ Contact รับ prop ต่างๆ เพื่อแสดงผู้ติดต่อแต่ละคน
const Contact = ({ username, id, online, selected, onClick }) => {
  return (
    // ในการคลิก, เรียกฟังก์ชัน onClick ที่ถูกส่งมาจาก parent component พร้อมกับ id ของผู้ติดต่อ
    <div
      onClick={() => onClick(id)}
      // ใช้ className เพื่อให้มีสไตล์ต่างๆ ภายใน div ของ Contact
      className={
        "border-b border-gray-100 flex items-center gap-2 cursor-pointer " +
        (selected ? "bg-blue-50" : "")
      }
    >
      {selected && <div className="w-1 bg-blue-600 h-12 rounded-r-md"></div>}

      {/* Avatar component ที่ใช้แสดงรูปประจำตัวของผู้ติดต่อ */}
      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar username={username} userId={id} online={online} />
        {/* แสดงชื่อของผู้ติดต่อ */}
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  );
};

export default Contact;