import 'bootstrap/dist/css/bootstrap.min.css';

import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

import React from 'react';

// Publication Ethics Component
const ethicsSections = [
  {
    title: '1. Purpose and Ethical Foundation',
    content: `IJMSBC is committed to upholding the highest ethical standards in academic publishing. Our ethical guidelines are based on the principles established by:
- COPE (Committee on Publication Ethics)
- ICMJE (International Committee of Medical Journal Editors)
- WAME (World Association of Medical Editors)
These guidelines ensure fairness, transparency, and accountability in all stages of the publication process.`,
  },
  {
    title: '2. Ethical Responsibilities of Authors',
    content: `2.1 Originality and Plagiarism
- All work must be original and not under consideration elsewhere.
- Authors must cite others’ work.
- Plagiarism detection software (Turnitin/iThenticate) is mandatory.

2.2 Data Integrity
- Data must be accurate and ethically collected.
- Raw data may be requested.

2.3 Multiple Submissions
- Concurrent submissions to multiple journals are unethical.
- Prior publication must be disclosed.

2.4 Authorship Criteria
- Authors must contribute substantially.
- All authors must approve the manuscript.
- Ghost/guest/honorary authorship is unethical.`,
  },
  {
    title: '3. Responsibilities of Editors',
    content: `3.1 Editorial Decisions
- Based on scholarly merit; double-blind peer review used.

3.2 Fair and Unbiased Review
- Peer-review is transparent and confidential.

3.3 Confidentiality
- Manuscript information remains private.

3.4 Handling Misconduct
- Misconduct is rigorously investigated. Sanctions include retraction or corrections.`,
  },
  {
    title: '4. Responsibilities of Peer Reviewers',
    content: `4.1 Objectivity
- Reviews should be constructive and unbiased.

4.2 Confidentiality
- Manuscripts are confidential.

4.3 Conflicts of Interest
- Reviewers must disclose conflicts.

4.4 Timeliness
- Reviewers should meet deadlines or notify delays.`,
  },
  {
    title: '5. Ethical Oversight of Research',
    content: `5.1 Human and Animal Rights
- Ethical clearance is mandatory.
- Informed consent required for human studies.

5.2 Privacy and Confidentiality
- Patient/subject confidentiality must be maintained unless consent is given.`,
  },
  {
    title: '6. Conflict of Interest and Funding Disclosure',
    content: `- Authors must disclose any financial or personal conflicts.
- Funding sources and their roles must be disclosed.`,
  },
  {
    title: '7. Corrections, Retractions, and Expressions of Concern',
    content: `- IJMSBC will issue corrections or retractions for errors or misconduct.
- Expressions of concern may be used pending investigation.`,
  },
  {
    title: '8. Open Access and Licensing Ethics',
    content: `- Follows Gold Open Access model.
- Articles are under Creative Commons Attribution (CC-BY) license unless noted otherwise.`,
  },
  {
    title: '9. Diversity and Inclusivity',
    content: `- Promotes diversity in editorial board, authorship, and reviewers.
- No discrimination based on gender, race, religion, or disability.`,
  },
  {
    title: '10. Ethical Complaints and Appeals',
    content: `- Concerns can be raised to the Editor-in-Chief at [insert journal email].
- Complaints are investigated confidentially.`,
  },
];

const PublicationEthics = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Publication Ethics</h2>
      <Accordion defaultActiveKey="0">
        {ethicsSections.map((section, idx) => (
          <Accordion.Item eventKey={idx.toString()} key={idx}>
            <Accordion.Header>{section.title}</Accordion.Header>
            <Accordion.Body>
              {section.content.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default PublicationEthics;