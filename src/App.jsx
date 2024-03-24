import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import MainPage from "./pages/MainPage";
import Welcome from "./components/Welcome/Welcome";
import CreatePost from "./components/create Post/CreatePost";
import EditPost from "./components/Edit Post/EditPost";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      {/* Background gradient */}
      <div className='main'>
        <div className='gradient' />
      </div>
      {/* Main section for the app */}
      <section className="app">
        <Routes>
          
          {/* Main route */}
          <Route path="/" element={<MainPage />}>

            {/* Route for home page */}
            <Route path="/home" element={<Home />} />

            {/* Redirect root to home */}
            <Route path="/" element={<Navigate to={'/home'} />} />

            {/* Protected route for welcome page */}
            <Route path="/welcome" element={
              <ProtectedRoute>
                <Welcome />
              </ProtectedRoute>
            } />

            {/* Protected route for create Post */}
            <Route path="/create-post" element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            } />

            {/* Protected route for edit Post */}
            <Route path="/edit-post/:id" element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            } />

            {/* Protected route for Profile page */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />

          </Route>

          {/* Routes outside the main component */}

          {/* Route for login page */}
          <Route path="/sign-in" element={<Login />} />
          {/* Route for register page */}
          <Route path="/sign-up" element={<Register />} />
          {/* Verify email */}
          <Route path="/users/:id/verify/:token" element={<VerifyEmail />} />

        </Routes>
      </section>
    </>
  );
}

export default App;
