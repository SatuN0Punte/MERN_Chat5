// ไฟล์นี้จัดการเลือกแสดงหน้า Register/Login หรือหน้าแชทขึ้นอยู่กับสถานะการเข้าสู่ระบบ

import React from 'react';
import RegisterAndLoginFrom from "./components/RegisterAndLoginFrom";
import Chat from "./components/Chat";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

const Routes = () => {
    const { username } = useContext(UserContext);

    // ถ้ามีชื่อผู้ใช้ (ล็อกอินแล้ว) ให้แสดงหน้าแชท มิฉะนั้นแสดงหน้า Register/Login
    if (username) {
        return <Chat />;
    }

    return (
        <RegisterAndLoginFrom />
    );
};

export default Routes;