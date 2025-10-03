// import { Button, Card, Col, Modal, Row } from "react-bootstrap";
// import React, { useEffect, useState } from "react";
// import { isLoggedIn, logout } from "../../services/AuthService";

// import { CiBoxList } from "react-icons/ci";
// import { FaFilePdf } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Login from "../../services/Login";
// import Register from "../../services/Register";

// const AdminDashBoard = () => {
//   const [auth, setAuth] = useState(isLoggedIn());
//   const [authAction, setAuthAction] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [userData, setUserData] = useState(null);

//   const allowedAdmins = ["ijmsbc@gmail.com"];

//   useEffect(() => {
//     setAuth(isLoggedIn());
//     const user = JSON.parse(localStorage.getItem("USER_DATA"));
//     setUserData(user);

//     if (user && allowedAdmins.includes(user.email)) {
//       setIsAdmin(true);
//     } else {
//       setIsAdmin(false);
//     }
//   }, []);

//   const handleLogout = () => {
//     logout();
//     setAuth(false);
//     setIsAdmin(false);
//     setAuthAction("");
//     setShowModal(false);
//     setUserData(null);
//   };

//   // const handleLoginSuccess = () => {
//   //   setAuth(true);
//   //   const user = JSON.parse(localStorage.getItem("USER_DATA"));
//   //   setUserData(user);

//   //   if (user && allowedAdmins.includes(user.email)) {
//   //     setIsAdmin(true);
//   //   } else {
//   //     setIsAdmin(false);
//   //   }

//   //   setAuthAction("");
//   //   setShowModal(false);
//   // };

//     const handleLoginSuccess = () => {
//   setAuth(true);
//   const user = JSON.parse(localStorage.getItem("USER_DATA"));
//   setUserData(user);

//   if (user && allowedAdmins.includes(user.email)) {
//     setIsAdmin(true);
//   } else {
//     setIsAdmin(false);
//   }

//   setAuthAction("");
//   setShowModal(false);
// };

//   const handleAuthClick = (action) => {
//     setAuthAction(action);
//     setShowModal(true);
//   };




//   return (
//     <div className="p-4">
//       {auth ? (
//         <>
//           {isAdmin && (
//             <Row className="g-4">
//               <Col md={4}>
//                 <Card className="admin-card bg-primary text-white text-center">
//                   <Card.Body>
//                     <Card.Title>📄 Manuscripts</Card.Title>
//                     <Link to="/Manuscripts" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-success text-white text-center">
//                   <Card.Body>
//                     <Card.Title>📬 Contact List</Card.Title>
//                     <Link to="/contactlist" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-danger text-white text-center">
//                   <Card.Body>
//                     <Card.Title>
//                       <FaFilePdf /> Upload PDF
//                     </Card.Title>
//                     <Link to="/uploadpdf" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-warning text-dark text-center">
//                   <Card.Body>
//                     <Card.Title>
//                       <FaFilePdf /> PDF List
//                     </Card.Title>
//                     <Link to="/PdfList" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-info text-dark text-center">
//                   <Card.Body>
//                     <Card.Title>📢 Upload Announcement</Card.Title>
//                     <Link to="/uploadAnnouncement" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-secondary text-white text-center">
//                   <Card.Body>
//                     <Card.Title>📝 Register List</Card.Title>
//                     <Link to="/RegisterList" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-dark text-white text-center">
//                   <Card.Body>
//                     <Card.Title>📊 Visitor Stats</Card.Title>
//                     <Link to="/VisitorStats" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-info text-dark text-center">
//                   <Card.Body>
//                     <Card.Title><CiBoxList />Reviewers List</Card.Title>
//                     <Link to="/ReviewersList" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-danger text-white text-center">
//                   <Card.Body>
//                     <Card.Title>Editorial Board List</Card.Title>
//                     <Link to="/EditorialBordList" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="admin-card bg-warning text-white text-center">
//                   <Card.Body>
//                     <Card.Title>Membership List</Card.Title>
//                     <Link to="/MembershipList" className="stretched-link"></Link>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           )}

//           <div className="text-center mt-4">
//             <Button variant="outline-danger" onClick={handleLogout}>
//               Logout
//             </Button>
//           </div>
//         </>
//       ) : (
//         <div className="text-center">
//           <Button
//             variant="primary"
//             className="me-3"
//             onClick={() => handleAuthClick("login")}
//           >
//             Login
//           </Button>
//           <Button
//             variant="success"
//             onClick={() => handleAuthClick("register")}
//           >
//             Register
//           </Button>
//         </div>
//       )}

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {authAction === "login" ? "Login" : "Register"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {authAction === "login" ? (
//             <Login onLogin={handleLoginSuccess} />
//           ) : (
//             <Register onLogin={handleLoginSuccess} />
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default AdminDashBoard;

import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { CiBoxList } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../../services/Login";
import { MdOutlineRememberMe } from "react-icons/md";
import Register from "../../services/Register";
import { auth } from "../../services/firebaseConfig"; // ✅ make sure you have this

const AdminDashBoard = () => {
  const [authUser, setAuthUser] = useState(null);
  const [authAction, setAuthAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const allowedAdmins = ["ijmsbc@gmail.com"];

  useEffect(() => {
    // ✅ Firebase listener: persists login even after refresh
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          email: user.email,
          uid: user.uid,
        };
        localStorage.setItem("USER_DATA", JSON.stringify(userData));
        setAuthUser(userData);
        setIsAdmin(allowedAdmins.includes(user.email));
      } else {
        setAuthUser(null);
        setIsAdmin(false);
        localStorage.removeItem("USER_DATA");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setAuthUser(null);
    setIsAdmin(false);
    setAuthAction("");
    setShowModal(false);
    localStorage.removeItem("USER_DATA");
  };

  const handleLoginSuccess = () => {
    const user = JSON.parse(localStorage.getItem("USER_DATA"));
    setAuthUser(user);
    setIsAdmin(user && allowedAdmins.includes(user.email));
    setAuthAction("");
    setShowModal(false);
  };

  const handleAuthClick = (action) => {
    setAuthAction(action);
    setShowModal(true);
  };

  return (
    <div className="p-4">
      {authUser ? (
        <>
          {isAdmin && (
            <Row className="g-4">
              {/* --- Admin Cards --- */}
              <Col md={4}>
                <Card className="admin-card bg-primary text-white text-center">
                  <Card.Body>
                    <Card.Title>📄 Manuscripts</Card.Title>
                    <Link to="/Manuscripts" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="admin-card bg-success text-white text-center">
                  <Card.Body>
                    <Card.Title>📬 Contact List</Card.Title>
                    <Link to="/contactlist" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="admin-card bg-danger text-white text-center">
                  <Card.Body>
                    <Card.Title>
                      <FaFilePdf /> Upload PDF
                    </Card.Title>
                    <Link to="/uploadpdf" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="admin-card bg-warning text-white text-center">
                  <Card.Body>
                    <Card.Title>
                      <FaFilePdf /> PDF List
                    </Card.Title>
                    <Link to="/PdfList" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="admin-card bg-info text-white text-center">
                  <Card.Body>
                    <Card.Title>📢 Upload Announcement</Card.Title>
                    <Link to="/uploadAnnouncement" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* <Col md={4}>
                <Card className="admin-card bg-secondary text-white text-center">
                  <Card.Body>
                    <Card.Title>📝 Register List</Card.Title>
                    <Link to="/RegisterList" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col> */}

              <Col md={4}>
                <Card className="admin-card bg-dark text-white text-center">
                  <Card.Body>
                    <Card.Title>📊 Visitor Stats</Card.Title>
                    <Link to="/VisitorStats" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="admin-card bg-info text-white text-center">
                  <Card.Body>
                    <Card.Title>
                      <CiBoxList id="icons"/> Reviewers List
                    </Card.Title>
                    <Link to="/ReviewersList" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="admin-card bg-danger text-white text-center">
                  <Card.Body>
                    <Card.Title>📝 Editorial Board List</Card.Title>
                    <Link to="/EditorialBordList" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="admin-card bg-warning text-white text-center">
                  <Card.Body>
                    <Card.Title><MdOutlineRememberMe id="icons" /> Membership List</Card.Title>
                    <Link to="/MembershipList" className="stretched-link"></Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          <div className="text-center mt-4">
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <Button
            variant="primary"
            className="me-3"
            onClick={() => handleAuthClick("login")}
          >
            Login
          </Button>
          <Button
            variant="success"
            onClick={() => handleAuthClick("register")}
          >
            Register
          </Button>
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {authAction === "login" ? "Login" : "Register"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {authAction === "login" ? (
            <Login onLogin={handleLoginSuccess} />
          ) : (
            <Register onLogin={handleLoginSuccess} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminDashBoard;
