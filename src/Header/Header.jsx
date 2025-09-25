// import './Header.css';

// import { Col, Container, Row } from 'react-bootstrap';

// import React from 'react';
// import UserInfoPortal from '../services/UserInfoPortal';

// const Header = () => {
//   const text = "International Journal Of Management Science And Business Conclave";

//   // Function to wrap first letter of each word in a span
//   const styledTitle = text.split(" ").map((word, index) => (
//     <span key={index}>
//       <span className="first-letter">{word.charAt(0)}</span>
//       {word.slice(1)}{" "}
//     </span>
//   ));

//   return (
//     <>
//       {/* <div id="header" className="bg-light py-3 border-bottom shadow-sm">
//         <Container fluid>
//           <Row className="align-items-center">
//             <Col
//               xs={12}
//               className="d-flex align-items-center justify-content-center flex-column flex-md-row"
//             >
//               <img
//                 src="/logo.jpeg"
//                 alt="IJMSBC Logo"
//                 className="logo mb-3 mb-md-0 me-md-3"
//               />
//               <div className="text-center text-md-start">
//                 <h1 className="title mb-0">{styledTitle}</h1>
//                 <h1 className="subtitle mb-0"></h1>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div> */}


//       <div id='header1'>
//         <div>
//           <img
//                 src="/logo.jpeg"
//                 alt="IJMSBC Logo"
//                 className="logo mb-3 mb-md-0 me-md-3"
//               />
//         </div>
//         <div>
//           <h1 className="title mb-0"><center>International Journal Of </center></h1>
//           <h1 className="title mb-0"><center>Management Science And Business Conclave </center></h1>
//           <h1 className="title mb-0"><center>(IJMSABC)</center></h1>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Header;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import "./Header.css";

// import { Col, Container, Row } from "react-bootstrap";

// import React from "react";

// const Header = () => {
//   return (
//     <header className="header-section py-3 border-bottom shadow-sm bg-light">
//       <Container fluid>
//         <Row className="align-items-center text-center text-md-start">
//           {/* Logo Section */}
//           <Col xs={12} md="auto" className="mb-3 mb-md-0 d-flex justify-content-center">
//             <img
//               src="/logo.jpeg"
//               alt="IJMSBC Logo"
//               className="logo img-fluid"
//               style={{ maxHeight: "100px" }}
//             />
//           </Col>

//           {/* Title Section */}
//           <Col>
//             <h1 className="title mb-1 fw-bold">
//               International Journal Of
//             </h1>
//             <h1 className="title mb-1 fw-bold">
//               Management Science And Business Conclave
//             </h1>
//             <h2 className="subtitle mb-0 fw-semibold">(IJMSABC)</h2>
//           </Col>
//         </Row>
//       </Container>
//     </header>
//   );
// };

// export default Header;


////////////////////////////////////////////////////////////////////////////////////////////////////////

import "./Header.css";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";

const Header = () => {
  return (
    <header className="header-section py-4 border-bottom shadow-sm bg-light">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          {/* Logo Section */}
          <Col xs={12} className="mb-3">
            <img
              src="/logo.jpeg"
              alt="IJMSBC Logo"
              className="logo img-fluid"
              style={{ maxHeight: "120px" }}
            />
          </Col>

          {/* Title Section */}
          <Col xs={12}>
            <h1 className="title mb-2 fw-bold">
              International Journal Of
            </h1>
            <h1 className="title mb-2 fw-bold">
              Management Science And Business Conclave
            </h1>
            <h2 className="subtitle mb-0 fw-semibold">(IJMSABC)</h2>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
