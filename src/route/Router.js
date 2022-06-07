import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import Sidebar from "../components/layout/sidebar/Sidebar";
import HomePage from "../pages/HomePage";
function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="friend" element={<Sidebar />}>
              <Route path="" element={<FriendPage />} />
              <Route path="request" element={<FriendPage />} />
              <Route path="suggestion" element={<FriendPage />} />
            </Route>
            <Route path="profile/:id" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
