import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Welcome from "./pages/Welcome"


function App() {
  return (
    <>
      <Routes>
        {/* route for home page */}
        <Route path="/" element={<Home />} />
        {/* route for login page*/}
        <Route path="/login" element={<Login />} />
        {/* route for register page*/}
        <Route path="/register" element={<Register />} />
        {/* route for register page*/}
        <Route path="/register" element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
