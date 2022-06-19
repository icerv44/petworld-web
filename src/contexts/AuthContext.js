import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();

        if (token) {
          const resMe = await axios.get("/distributor/me");
          console.log("fetchMe token : ", resMe.data.distributor);
          setUser(resMe.data.distributor);
        }
      } catch (err) {
        // removeAccessToken();
        navigate("/login");
      }
    };

    fetchMe();
  }, []);

  const signUpDistributor = async (input) => {
    const res = await axios.post("/auth/signupDis", input);
    // setAccessToken(res.data.token);
    // const resMe = await axios.get("/distributor/me");
    // setUser(resMe.data.user);
  };
  const signUp = async (input) => {
    const res = await axios.post("/auth/signup", input);
    // setAccessToken(res.data.token);
    // const resMe = await axios.get("/users/me");
    // setUser(resMe.data.user);
  };

  const login = async (email, password) => {
    const res = await axios.post("/auth/login", { email, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
  };

  const loginDistributor = async (email, password) => {
    const res = await axios.post("/auth/loginDis", { email, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get("/distributor/me");
    console.log("Login Distribute : ", resMe.data.distributor);
    setUser(resMe.data.distributor);
  };

  // const createAnimal = async (input) => {
  //   const res = await axios.post("/animals/createAnimal/", {
  //     input,
  //   });
  // };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        login,
        logout,
        loginDistributor,
        signUpDistributor,
        // createAnimal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
