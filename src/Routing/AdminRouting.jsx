import { Navigate } from "react-router-dom";
import React from "react";

const AdminRouting = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("USER_DATA"));

  // Define the list of allowed users
  const allowedUsers = [
    { email: "AdminIjmsabc@gmail.com" },
    { password: "Admin@123" },
  ];

  // Check if the user is allowed
  const isAuthorized = userData && allowedUsers.some(
    (user) => user.email === userData.email
  );

  // Redirect unauthorized users
  if (!isAuthorized) {
    console.log("Invalid credentials")
    return <Navigate to="/" replace />;
    
  }

  // Render children for authorized users
  return children;
};

export default AdminRouting;
