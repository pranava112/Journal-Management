// import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
// import React, { useState } from 'react';

// import ManuscriptList from './ManuscriptList';

// const SubmitManuscript = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     title: '',
//     abstract: '',
//     file: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const submission = new FormData();
//     submission.append('name', formData.name);
//     submission.append('email', formData.email);
//     submission.append('title', formData.title);
//     submission.append('abstract', formData.abstract);
//     submission.append('file', formData.file);

//     // https://ijmsbc-backend.onrender.com
//     //  http://localhost:5000

//     try {
//       const response = await fetch('http://localhost:5000/api/submit', {
//         method: 'POST',
//         body: submission
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         setFormData({
//           name: '',
//           email: '',
//           title: '',
//           abstract: '',
//           file: null
//         });
//       } else {
//         alert('Submission failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting manuscript:', error);
//       alert('Error submitting manuscript.');
//     }
//   };

//   return (
//     <>
//     <Container className="my-5">
//       <h2 className="text-center text-primary mb-4">Submit Your Manuscript</h2>

//       {submitted && <Alert variant="success">Your manuscript has been submitted successfully!</Alert>}

//       <Form onSubmit={handleSubmit} encType="multipart/form-data">
//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="authorName">
//               <Form.Label>Author Full Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 required
//               />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="authorEmail">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group className="mb-3" controlId="manuscriptTitle">
//           <Form.Label>Manuscript Title</Form.Label>
//           <Form.Control
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Enter manuscript title"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="abstract">
//           <Form.Label>Abstract</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="abstract"
//             rows={4}
//             value={formData.abstract}
//             onChange={handleChange}
//             placeholder="Enter abstract (max 250 words)"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="fileUpload">
//           <Form.Label>Upload Manuscript (PDF/DOC)</Form.Label>
//           <Form.Control
//             type="file"
//             name="file"
//             accept=".pdf,.doc,.docx"
//             onChange={handleChange}
//             // required
//           />
//         </Form.Group>

//         <div className="text-center">
//           <Button variant="primary" type="submit">Submit Manuscript</Button>
//         </div>
//       </Form>
//     </Container>

// <ManuscriptList/>
// </>
//   );
// };

// export default SubmitManuscript;

import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import ManuscriptList from './ManuscriptList';

const SubmitManuscript = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    abstract: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submission = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submission.append(key, value);
    });

    // http://localhost:5000/api/submit

    try {
      const response = await fetch('https://ijmsbc-backend.onrender.com/api/submit', {
        method: 'POST',
        body: submission
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', title: '', abstract: '', file: null });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting manuscript:', error);
      alert('Error submitting manuscript.');
    }
  };

  return (
    <>
      <Container className="my-5">
        <h2 className="text-center text-primary mb-4">Submit Your Manuscript</h2>
        {submitted && <Alert variant="success">Your manuscript has been submitted successfully!</Alert>}

        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="authorName">
                <Form.Label>Author Full Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="authorEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="manuscriptTitle">
            <Form.Label>Manuscript Title</Form.Label>
            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="abstract">
            <Form.Label>Abstract</Form.Label>
            <Form.Control as="textarea" name="abstract" rows={4} value={formData.abstract} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-4" controlId="fileUpload">
            <Form.Label>Upload Manuscript (PDF/DOC)</Form.Label>
            <Form.Control type="file" name="file" accept=".pdf,.doc,.docx" onChange={handleChange} required />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">Submit Manuscript</Button>
          </div>
        </Form>
      </Container>

      <ManuscriptList />
    </>
  );
};

export default SubmitManuscript;
