import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// This code defines an authentication context for a React application.
// It uses the Context API to provide user and token state throughout the app.
// The AuthProvider component wraps the application, allowing any component to access the authentication state.
// The useAuth hook simplifies access to the authentication context, making it easy to get or set user and token information.
// This setup is useful for managing user authentication and session state in a React application.
// It allows components to easily access and update authentication-related data.
// The AuthContext can be used in components to check if a user is logged in,
// retrieve user information, or manage authentication tokens.
// This is a common pattern in React applications that require user authentication.