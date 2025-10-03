// import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
// import React, { useState } from 'react';

// import { saveToken } from './AuthService';

// const Register = ({ onLogin }) => {
//   const [data, setData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('https://ijmsbc-backend.onrender.com/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       const json = await res.json();

//       if (res.ok) {
//         const loginRes = await fetch('https://ijmsbc-backend.onrender.com/api/login', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: data.email, password: data.password }),
//         });

//         const loginJson = await loginRes.json();

//         if (loginRes.ok) {
//           saveToken(loginJson.token);
//           setSuccess('Registered and logged in!');
//           onLogin();
//         } else {
//           setSuccess('Registered successfully! Please login manually.');
//         }
//       } else {
//         setError(json.error || 'Registration failed');
//       }
//     } catch {
//       setError('Network error');
//     }
//   };

//   return (
//     <Container className="my-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card className="shadow p-4">
//             <h2 className="text-center mb-4">Register</h2>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {success && <Alert variant="success">{success}</Alert>}
//             <Form onSubmit={handleRegister}>
//               <Form.Group className="mb-3" controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your name"
//                   value={data.name}
//                   onChange={(e) => setData({ ...data, name: e.target.value })}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   value={data.email}
//                   onChange={(e) => setData({ ...data, email: e.target.value })}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-4" controlId="formPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter password"
//                   value={data.password}
//                   onChange={(e) => setData({ ...data, password: e.target.value })}
//                   required
//                 />
//               </Form.Group>

//               <Button type="submit" variant="primary" className="w-100">
//                 Register
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;


















////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// import { auth } from "./firebaseConfig";
// import axios from "axios";
// import bcrypt from "bcryptjs";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       // 1️⃣ Create user in Firebase
//       const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);

//       // 2️⃣ Send email verification
//       await sendEmailVerification(userCredential.user);
//       alert("Verification email sent. Please check your inbox.");

//       // 3️⃣ Hash the password before saving to backend
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(form.password, salt);

//       // 4️⃣ Save user to backend
//       await axios.post("http://localhost:8080/api/ijmsabc/users", {
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         password: hashedPassword,
//       });

//       alert("User registered successfully!");
//       setForm({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//       <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//       <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
//       <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
//       <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

import { auth } from "./firebaseConfig";
import axios from "axios";
import bcrypt from "bcryptjs";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);

      // Send email verification
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent. Please check your inbox.");

      // Hash password before saving to backend
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(form.password, salt);

      // Save user in backend
      await axios.post("http://localhost:8080/api/ijmsabc/users", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: hashedPassword,
      });

      alert("User registered successfully!");
      setForm({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-3">Register</h3>
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" value={form.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" value={form.phone} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
