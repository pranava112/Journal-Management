import React, { useState } from "react";

import { auth } from "./firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleReset}>
      <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;
