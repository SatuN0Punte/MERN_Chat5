import { useState } from 'react'
import { UserContextProvider } from './context/UserContext'
import Routes from './Routes'
import axios from 'axios';

function App() {
  // กำหนด Base URL และให้ Axios ใช้ Cookies ได้
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = useState(true);

  return (
    <>
      {/* ให้ UserContextProvider ครอบ Routes เพื่อให้ทุกส่วนของแอปสามารถเข้าถึงข้อมูลผู้ใช้ได้ */}
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </>
  )
}

export default App
