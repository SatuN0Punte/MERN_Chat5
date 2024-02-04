import React from "react";

const Avatar = ({ username, userId, online }) => {
  // ชุดสีที่ใช้
  const colors = [
    "bg-teal-200",
    "bg-red-200",
    "bg-pink-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-fuchsia-200",
    "bg-orange-200",
    "bg-purple-200",
    "bg-rose-200",
  ];

  // แปลง userId เป็นฐาน 10 และหาสีที่ไม่ซ้ำกัน
  const userIdBase10 = parseInt(userId.substring(10), 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];

  return (
    // สร้าง Avatar ด้วยสีที่ได้จากการแปลง userId
    <div className={`w-12 h-12 relative rounded-full flex items-center ${color}`}>
      <div className="text-center w-full opacity-70 text-white font-bold">
        {username}
        {/* เพิ่มสัญลักษณ์ออนไลน์หรือออฟไลน์ตามค่า online */}
        {online ? (
          <div className="absolute w-4 h-4 bg-green-500 bottom-0 right-0 rounded-full border border-white"></div>
        ) : (
          <div className="absolute w-4 h-4 bg-gray-500 bottom-0 right-0 rounded-full border border-white"></div>
        )}
      </div>
    </div>
  );
};

export default Avatar;