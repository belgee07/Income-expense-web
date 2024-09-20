"use client";
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { push } = useRouter();

  const handleLogin = async (email, password) => {
    console.log(email);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/user/login",
        { email, password }
      );

      const token = data.token;
      localStorage.setItem("token", token);
      setLoggedIn(true);
      push("/confirm");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      push("/login");
    }
  });

  return (
    <UserContext.Provider value={{ handleLogin, loggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const userUser = () => {
  const user = useContext(UserContext);
  return user;
};
