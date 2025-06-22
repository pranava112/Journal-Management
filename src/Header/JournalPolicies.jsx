// // import React from 'react'

// // const JournalPolicies = () => {
// //   return (
// //     <div>JournalPolicies</div>
// //   )
// // }

// // export default JournalPolicies

// import { Accordion, Card, Container } from 'react-bootstrap';

// import React from 'react';

// const JournalPolicies = () => {
//   return (
//     <Container className="my-4">
//       <h2 className="mb-4 text-center">Journal Policies</h2>
//       <Accordion defaultActiveKey="0">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>1. Aims and Scope</Accordion.Header>
//           <Accordion.Body>
//             IJMSBC publishes peer-reviewed research, reviews, and case studies in:
//             <ul>
//               <li>Management</li>
//               <li>Business Studies</li>
//               <li>Economics</li>
//               <li>Applied Sciences</li>
//               <li>Innovation and Entrepreneurship</li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="1">
//           <Accordion.Header>2. Publication Ethics</Accordion.Header>
//           <Accordion.Body>
//             <ul>
//               <li>Originality and unpublished work required.</li>
//               <li>All manuscripts are checked for plagiarism (threshold: 10%).</li>
//               <li>Data integrity must be maintained; original data must be available.</li>
//               <li>No simultaneous submissions allowed.</li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="2">
//           <Accordion.Header>3. Authorship Policy</Accordion.Header>
//           <Accordion.Body>
//             <ul>
//               <li>Authors must contribute significantly to the research.</li>
//               <li>All co-authors must approve the final manuscript.</li>
//               <li>Authorship changes require approval by all listed authors.</li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="3">
//           <Accordion.Header>4. Peer Review Process</Accordion.Header>
//           <Accordion.Body>
//             <ul>
//               <li>Double-blind peer review by at least two experts.</li>
//               <li>The editorial board may reject a paper at any stage.</li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="4">
//           <Accordion.Header>5. Open Access Policy</Accordion.Header>
//           <Accordion.Body>
//             IJMSBC is an open-access journal providing free access to all published content globally.
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="5">
//           <Accordion.Header>6. Publication Charges</Accordion.Header>
//           <Accordion.Body>
//             <ul>
//               <li>Nominal publication fee applies.</li>
//               <li>Waivers available for low-income countries or by request.</li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="6">
//           <Accordion.Header>7. Copyright & Licensing</Accordion.Header>
//           <Accordion.Body>
//             <ul>
//               <li>Authors retain copyright.</li>
//               <li>Articles published under CC BY license.</li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="7">
//           <Accordion.Header>8. Archiving Policy</Accordion.Header>
//           <Accordion.Body>
//             All content is archived digitally and supports LOCKSS/CLOCKSS for long-term availability.
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="8">
//           <Accordion.Header>9. Retraction and Corrections</Accordion.Header>
//           <Accordion.Body>
//             <ul>
//               <li>Major errors or misconduct may lead to retraction.</li>
//               <li>Minor corrections are issued as errata or corrigenda.</li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>

//         <Accordion.Item eventKey="9">
//           <Accordion.Header>10. Conflicts of Interest</Accordion.Header>
//           <Accordion.Body>
//             All authors, editors, and reviewers must disclose potential conflicts of interest.
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </Container>
//   );
// };

// export default JournalPolicies;

import { Card, Container } from 'react-bootstrap';

import React from 'react';

const JournalPolicies= () => {
  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Journal Policies</h2>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>1. Aims and Scope</Card.Title>
          <Card.Text>
            IJMSBC publishes peer-reviewed research, reviews, and case studies in:
            <ul>
              <li>Management</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Applied Sciences</li>
              <li>Innovation and Entrepreneurship</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>2. Publication Ethics</Card.Title>
          <Card.Text>
            <ul>
              <li>Submitted work must be original and unpublished.</li>
              <li>Manuscripts undergo plagiarism checks (limit: 10%).</li>
              <li>Data integrity is required; raw data must be presented upon request.</li>
              <li>Simultaneous submissions to multiple journals are not allowed.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>3. Authorship Policy</Card.Title>
          <Card.Text>
            <ul>
              <li>All authors must contribute significantly to the research.</li>
              <li>Corresponding author ensures approval by all co-authors.</li>
              <li>Authorship changes must be approved by all authors.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>4. Peer Review Process</Card.Title>
          <Card.Text>
            <ul>
              <li>Double-blind peer review by at least two reviewers.</li>
              <li>Editorial board reserves the right to reject at any stage.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>5. Open Access Policy</Card.Title>
          <Card.Text>
            IJMSBC offers free open access to all published content for the global academic community.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>6. Publication Charges</Card.Title>
          <Card.Text>
            <ul>
              <li>Nominal publication charges apply.</li>
              <li>Waivers are available for low-income authors or on request.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>7. Copyright & Licensing</Card.Title>
          <Card.Text>
            <ul>
              <li>Authors retain copyright.</li>
              <li>Published under Creative Commons Attribution (CC BY) license.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>8. Archiving Policy</Card.Title>
          <Card.Text>
            Content is digitally archived with support for LOCKSS and CLOCKSS systems.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>9. Retraction and Corrections</Card.Title>
          <Card.Text>
            <ul>
              <li>Major errors or misconduct may result in retraction.</li>
              <li>Minor errors are addressed through erratum/corrigendum notices.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>10. Conflicts of Interest</Card.Title>
          <Card.Text>
            Authors, editors, and reviewers must disclose any conflicts of interest.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default JournalPolicies;
