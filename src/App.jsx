import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import VerifyEmail from "./pages/VerifyEmail"
import MainPage from "./pages/MainPage"
import Welcome from "./components/Welcome/Welcome"
import CreatePost from "./components/create Post/CreatePost"
import EditPost from "./components/Edit Post/EditPost"
import ProtectedRoute from "./Routes/ProtectedRoute"
import Profile from "./pages/Profile"


function App() {
  return (
    <>
      <div className='main'>
        <div className='gradient' />
      </div>
      <section className="app">
        <Routes>
          <Route path="/" element={<MainPage />}>
            {/* route for home page */}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to={'/home'} />} />
            <Route path="/welcome" element={
              <ProtectedRoute>
                <Welcome />
              </ProtectedRoute>
            } />
            {/* create Post */}
            <Route path="/create-post" element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            } />
            {/* edit Post */}
            <Route path="/edit-post/:id" element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            } />
            {/* Profile page */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
          </Route>

          {/* route for login page*/}
          <Route path="/sign-in" element={<Login />} />
          {/* route for register page*/}
          <Route path="/sign-up" element={<Register />} />
          {/* verify email */}
          <Route path="/users/:id/verify/:token" element={<VerifyEmail />} />

        </Routes>
      </section>
    </>
  )
}

export default App
