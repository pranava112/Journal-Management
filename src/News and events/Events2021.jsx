// import React from 'react';

// const Events2021 = () => {
//   return (
//     <div className="container my-5">
//       <h2 className="mb-4 text-center">Major Journals – 2021</h2>

//       <div className="card mb-4">
//         <div className="card-header bg-primary text-white">
//           1. Enrichment: Journal of Management
//         </div>
//         <div className="card-body">
//           <p>
//             <strong>Vol. 11, No. 2, May 2021</strong> issue focused on management science, covering areas like operations, HR, entrepreneurship, strategy, supply chain, and digital business.
//           </p>
//           <p className="mb-2">Useful Links:</p>
//           <ul>
//             <li><a href="https://jmseleyon.com" target="_blank" rel="noopener noreferrer">jmseleyon.com</a></li>
//             <li><a href="https://enrichment.iocspublisher.org" target="_blank" rel="noopener noreferrer">enrichment.iocspublisher.org</a></li>
//             <li><a href="https://journalpressindia.com" target="_blank" rel="noopener noreferrer">journalpressindia.com</a></li>
//           </ul>
//           <p className="text-muted">
//             Published bi‑monthly; aligns closely with the business-science convergence typically discussed at such conclaves.
//           </p>
//         </div>
//       </div>

//       <div className="card mb-4">
//         <div className="card-header bg-success text-white">
//           2. Journal of Management and Science
//         </div>
//         <div className="card-body">
//           <p>
//             Several issues in 2021 (Vol. 11: Nos. 1, 3, and 4) featured articles on digital media marketing, HR challenges, sustainable development, entrepreneurship, blockchain, AI in finance, and the COVID‑19 pandemic's effects—core themes likely embraced by the conclave.
//           </p>
//           <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">reddit.com</a>
//         </div>
//       </div>

//       <div className="card mb-4">
//         <div className="card-header bg-warning text-dark">
//           3. Research Policy
//         </div>
//         <div className="card-body">
//           <p>
//             Although not tied directly to that specific conclave, this prestigious journal (published by Elsevier) covers R&D management, innovation policy, technology systems, and the science–business nexus—foundational for such academic gatherings.
//           </p>
//         </div>
//       </div>

//       <div className="mt-5">
//         <h4 className="mb-3">✅ TL;DR / Key Takeaway</h4>
//         <table className="table table-bordered table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th>Journal Name</th>
//               <th>2021 Focus & Relevance</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Enrichment</td>
//               <td>Management science & business themes (May 2021)</td>
//             </tr>
//             <tr>
//               <td>Journal of Management and Science</td>
//               <td>Digital business, HR, sustainability, AI, COVID‑19 topics</td>
//             </tr>
//             <tr>
//               <td>Research Policy</td>
//               <td>Innovation, R&D, science-policy intersections</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Events2021;

import { Card, Col, Container, Row, Table } from 'react-bootstrap';

import React from 'react';

const Events2021 = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4"> Management of Science and Business Conclave 2021</h2>

      <Row className="g-4">
        <Col md={6}>
          <Card>
            <Card.Header as="h5" className="bg-primary text-white">1. Enrichment: Journal of Management</Card.Header>
            <Card.Body>
              <Card.Text><strong>Focus (2021):</strong> Operations, HR, entrepreneurship, digital business, supply chain.</Card.Text>
              <Card.Text><strong>Volume:</strong> Vol. 11, No. 2 (May 2021)</Card.Text>
              <Card.Text><strong>Publisher:</strong> IOSC Publishers (India)</Card.Text>
              <Card.Text><strong>Relevance:</strong> Directly aligned with the themes of the 2021 Conclave.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header as="h5" className="bg-success text-white">2. Journal of Management and Science</Card.Header>
            <Card.Body>
              <Card.Text><strong>Focus (2021):</strong> Digital media marketing, HR challenges, sustainability, AI in finance, entrepreneurship, COVID-19 impact on business.</Card.Text>
              <Card.Text><strong>Issues:</strong> Vol. 11, Nos. 1, 3 & 4</Card.Text>
              <Card.Text><strong>Relevance:</strong> Highly topical with post-pandemic themes in management.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header as="h5" className="bg-warning text-dark">3. Research Policy (Elsevier)</Card.Header>
            <Card.Body>
              <Card.Text><strong>Focus (2021):</strong> R&D management, innovation systems, technology policy.</Card.Text>
              <Card.Text><strong>Impact:</strong> One of the top international journals for science-business interface.</Card.Text>
              <Card.Text><strong>Relevance:</strong> Reflects core values of the Conclave, though not directly tied.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header as="h5" className="bg-danger text-white">4. Vikalpa – The Journal for Decision Makers</Card.Header>
            <Card.Body>
              <Card.Text><strong>Focus (2021):</strong> Business decisions, public-private strategy, Indian industry insights.</Card.Text>
              <Card.Text><strong>Publisher:</strong> IIM Ahmedabad</Card.Text>
              <Card.Text><strong>Relevance:</strong> Prominent for practical applications discussed in conclaves.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-5">
        <h4 className="mb-3">📊 Summary Table</h4>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Journal Name</th>
              <th>2021 Focus</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enrichment: Journal of Management</td>
              <td>Business science, HR, strategy, entrepreneurship</td>
              <td>India</td>
            </tr>
            <tr>
              <td>Journal of Management and Science</td>
              <td>Digital business, AI, HR, sustainability, COVID-19</td>
              <td>India</td>
            </tr>
            <tr>
              <td>Research Policy</td>
              <td>Innovation policy, tech systems, science-R&D policy</td>
              <td>International</td>
            </tr>
            <tr>
              <td>Vikalpa</td>
              <td>Applied decision making, Indian case studies, institutional governance</td>
              <td>India</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Events2021;

