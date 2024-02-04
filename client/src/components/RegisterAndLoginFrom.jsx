// นี่คือคอมโพนเนนต์ RegisterAndLoginForm ที่ใช้ในการลงทะเบียนหรือเข้าสู่ระบบ

import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

// คอมโพนเนนต์ RegisterAndLoginForm รับข้อมูล username, password, และสถานะการลงทะเบียนหรือเข้าสู่ระบบ
const RegisterAndLoginForm = () => {
  // ใช้ Hook สำหรับการจัดการ state ของ username และ password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // ใช้ Hook สำหรับการเข้าถึงข้อมูลที่เกี่ยวข้องกับผู้ใช้จาก context
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  // ฟังก์ชันสำหรับการจัดการเมื่อฟอร์มถูก submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // กำหนด URL ที่จะใช้ตามสถานะการลงทะเบียนหรือเข้าสู่ระบบ
    const url = isLoginOrRegister === "register" ? "register" : "login";
    
    try {
      // ส่งคำขอ POST ไปยังเซิร์ฟเวอร์
      const { data, status } = await axios.post(url, { username, password });
      
      // ถ้าสถานะไม่เท่ากับ 200 ให้แสดงข้อผิดพลาด
      if (status !== 200) {
        throw new Error(data);
      }
      
      // ตั้งค่า state และ context ให้ตรงกับผู้ใช้ที่ลงทะเบียนหรือเข้าสู่ระบบ
      setLoggedInUsername(username);
      setId(data.id);
    } catch (error) {
      // แสดง Alert กรณีเกิดข้อผิดพลาด
      alert(error.message);
    }
  };

  return (
    // ใช้ div สำหรับการจัดหน้า
    <div className="flex items-center justify-center h-screen bg-blue-200">
      {/* ใช้ div สำหรับการแสดงฟอร์ม */}
      <div className="bg-gray-200 p-9 rounded-xl shadow-md w-1/4 h-2/5">
        {/* ใช้ h1 สำหรับการแสดงชื่อของฟอร์ม */}
        <h1 className="text-2xl font-semibold mb-4 text-center text-blue-700">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </h1>
        
        {/* ใช้ form สำหรับการรับข้อมูลจากผู้ใช้ */}
        <form onSubmit={handleSubmit} className="w-64 mx-auto mb-12">
          {/* ใช้ label และ input สำหรับการกรอก username */}
          <div className="mb-3">
            <label className="text-black mb-2 block">Username</label>
            <input
              type="text"
              value={username}
              className="block w-full rounded-2xl p-2 mb-3 border"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          {/* ใช้ label และ input สำหรับการกรอก password */}
          <div className="mb-5">
            <label className="text-black mb-2 block">Password</label>
            <input
              type="password"
              value={password}
              className="block w-full rounded-2xl p-2 mb-5 border"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {/* ใช้ button สำหรับการ submit ฟอร์ม */}
          <button className="bg-blue-500 text-white block w-full rounded-3xl p-2">
            {isLoginOrRegister === "register" ? "Register" : "Login"}
          </button>
          
          {/* ใช้ div สำหรับการแสดงลิงก์ไปยังฟอร์มอื่นๆ */}
          <div className="text-center mt-2">
            {/* ใช้ div สำหรับการแสดงลิงก์ Login หรือ Register */}
            {isLoginOrRegister === "register" && (
              <div className="ml-1 text-yellow-500">
                Already a member?{" "}
                {/* ใช้ button สำหรับการเปลี่ยนเป็นฟอร์ม Login */}
                <button
                  className="ml-1 text-blue-500 hover:text-blue-700"
                  onClick={() => setIsLoginOrRegister("login")}
                >
                  Login
                </button>
              </div>
            )}

            {/* ใช้ div สำหรับการแสดงลิงก์ Register หรือ Login */}
            {isLoginOrRegister === "login" && (
              <div className="ml-1 text-red-600">
                Don't have an account?{" "}
                {/* ใช้ button สำหรับการเปลี่ยนเป็นฟอร์ม Register */}
                <button
                  className="ml-1 text-blue-500 hover:text-blue-700"
                  onClick={() => setIsLoginOrRegister("register")}
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterAndLoginForm; 