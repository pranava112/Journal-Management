// // import { Button } from 'react-bootstrap';
// // import React from 'react';

// // const CallButton = () => {
// //   const handleCall = () => {
// //     window.location.href = "tel:+918143123534";
// //     // BsWindowSidebar.location.href="tel:+91"
// //   };

// //   return (
// //     <Button variant="success" onClick={handleCall}>
// //       📞 Call Now
// //     </Button>
// //   );
// // };


// // export default CallButton;

// import React from 'react'

// const CallForPapers = () => {
//   return (
//     <>
//     <div className="px-6 py-10 max-w-3xl mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-6 sub_title">Call for Papers</h2>
//       <p className="text-lg leading-relaxed mb-4">
//         We warmly invite researchers, scholars, and professionals to submit their
//         original research papers, articles, and case studies to the{" "} <br />
//         <strong>International Journal of Management Science and Business Conclave (IJMSBC)</strong>.
//       </p>
//       <p className="text-lg leading-relaxed mb-4">
//         Submissions are welcomed in all areas of management, business, science,
//         and related fields that contribute to innovative academic and practical knowledge.
//       </p>
//       <p className="text-lg leading-relaxed">
//         For paper submission or inquiries, please contact us at:{" "}
//         <a
//           href="mailto:editor@ijmsbc.org"
//           className="text-blue-400 underline hover:text-blue-600"
//         >
//           {/* editor@ijmsabc.org */}
//           ijmsabc@gmail.com
//         </a>
//       </p>
//     </div>
//      <table border='1'>
//         <tr>
//           <td><b>Frequency of Publication</b></td>
//           <td><b>Bi-monthly </b> (July–August, September–October, November–December, January–February, March–April, May–June)</td>
//         </tr>
//         <tr>
//           <td><b>ISSN </b></td>
//           <td>****-****</td>
//         </tr>
//         <tr>
//           <td><b>Publisher </b></td>
//           <td>
//             Dr. Vottiprolu Vijaya Kumar <br />
// International Journal of Management Science and Business Conclave (IJMSABC)

//           </td>
//         </tr>
//         <tr>
//           <td><b>Editor-in-Chief</b></td>
//           <td>Dr. Vottiprolu Vijaya Kumar</td>
//         </tr>
//         <tr>
//           <td><b>Copyright </b></td>
//           <td>Upon acceptance of a manuscript, authors are required to sign a Declaration of Copyright Form, transferring copyright to the International Journal of Management Science and Business Conclave (IJMSABC). The journal follows an Open Access policy, ensuring that all published articles are freely accessible in print format. Authors must ensure that their submissions are original, unpublished, and do not violate any existing copyright laws.</td>
//         </tr>
//         <tr>
//           <td><b>Starting Year</b></td>
//           <td>2025</td>
//         </tr>
//         <tr>
//           <td><b>First issue Published</b></td>
//           <td>Volume 01, Issue 01, July–August 2025</td>
//         </tr>
//         <tr>
//           <td><b>Subject </b></td>
//           <td>Management</td>
//         </tr>
//         <tr>
//           <td><b>Language</b></td>
//           <td>English</td>
//         </tr>
//         <tr>
//           <td><b>Format of Publication</b></td>
//           <td>Print Format</td>
//         </tr>
//         <tr>
//           <td><b>Publisher Details </b></td>
//           <td>
//             Dr. Vottiprolu Vijaya Kumar <br />
//             International Journal of Management Science and Business Conclave (IJMSABC) <br />
//             <b>Address:</b> House No. 11-31, Nandivelugu, Tenali Mandal,
// Guntur District, Andhra Pradesh-522306 <br />
//              <b>Mobile:</b> +91 8143123534 <br />
//            <b>  Email: </b>ijmsabc@gmail.com, vvottiprolu@mgmu.ac.in <br />
//            <b>Website: </b> www.ijmsabc.org

//           </td>
//         </tr>
//       </table>

//     </>
//   )
// }

// export default CallForPapers

import { Button, Col, Container, Row, Table } from "react-bootstrap";

import React from "react";

const CallForPapers = () => {
  return (
    <>
    <Container className="my-5">
      {/* Heading Section */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="fw-bold display-6 text-primary">Call for Papers</h2>
        </Col>
      </Row>

      {/* Intro Text */}
      <Row className="mb-3">
        <Col>
          <p className="fs-5">
            We warmly invite researchers, scholars, and professionals to submit
            their original research papers, articles, and case studies to the{" "}
            <strong>
              International Journal of Management Science and Business Conclave
              (IJMSBC)
            </strong>.
          </p>
          <p className="fs-5">
            Submissions are welcomed in all areas of management, business,
            science, and related fields that contribute to innovative academic
            and practical knowledge.
          </p>
          <p className="fs-5">
            For paper submission or inquiries, please contact us at:{" "}
            <a
              href="mailto:ijmsabc@gmail.com"
              className="text-decoration-none fw-semibold text-success"
            >
              ijmsabc@gmail.com
            </a>
          </p>
        </Col>
      </Row>

      {/* Journal Info Table */}
      <Row>
        <Col>
          <Table striped bordered hover responsive className="align-middle">
            <tbody>
              <tr>
                <td className="fw-bold">Frequency of Publication</td>
                <td>
                  <b>Bi-monthly</b> (July–August, September–October,
                  November–December, January–February, March–April, May–June)
                </td>
              </tr>
              <tr>
                <td className="fw-bold">ISSN</td>
                <td>****-****</td>
              </tr>
              <tr>
                <td className="fw-bold">Publisher</td>
                <td>
                  Dr. Vottiprolu Vijaya Kumar <br />
                  International Journal of Management Science and Business
                  Conclave (IJMSABC)
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Editor-in-Chief</td>
                <td>Dr. Vottiprolu Vijaya Kumar</td>
              </tr>
              <tr>
                <td className="fw-bold">Copyright</td>
                <td>
                  Upon acceptance of a manuscript, authors are required to sign
                  a Declaration of Copyright Form, transferring copyright to the
                  International Journal of Management Science and Business
                  Conclave (IJMSABC). The journal follows an Open Access policy,
                  ensuring that all published articles are freely accessible in
                  print format. Authors must ensure that their submissions are
                  original, unpublished, and do not violate any existing
                  copyright laws.
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Starting Year</td>
                <td>2025</td>
              </tr>
              <tr>
                <td className="fw-bold">First Issue Published</td>
                <td>Volume 01, Issue 01, July–August 2025</td>
              </tr>
              <tr>
                <td className="fw-bold">Subject</td>
                <td>Management</td>
              </tr>
              <tr>
                <td className="fw-bold">Language</td>
                <td>English</td>
              </tr>
              <tr>
                <td className="fw-bold">Format of Publication</td>
                <td>Print Format</td>
              </tr>
              <tr>
                <td className="fw-bold">Publisher Details</td>
                <td>
                  Dr. Vottiprolu Vijaya Kumar <br />
                  International Journal of Management Science and Business
                  Conclave (IJMSABC) <br />
                  <b>Address:</b> House No. 11-31, Nandivelugu, Tenali Mandal,
                  Guntur District, Andhra Pradesh-522306 <br />
                  <b>Mobile:</b> +91 8143123534 <br />
                  <b>Email:</b> ijmsabc@gmail.com, vvottiprolu@mgmu.ac.in <br />
                  <b>Website:</b>{" "}
                  <a
                    href="http://www.ijmsabc.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-primary fw-semibold"
                  >
                    www.ijmsabc.org
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Call Button */}
       {/* <Row className="text-center mt-4">
        <Col>
          <Button
            variant="success"
            size="lg"
            href="tel:+918143123534"
            className="fw-bold"
          >
            📞 Call Now
          </Button>
        </Col>
      </Row> */}


    </Container> 
    </>
  );
};


export default CallForPapers;
