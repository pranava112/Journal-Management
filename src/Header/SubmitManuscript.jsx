// import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
// import React, { useRef, useState } from 'react';

// import Api from '../Pdf\'s/Api';

// const SubmitManuscript = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     title: '',
//     abstract: '',
//     keywords:"",
//     file: null,
//   });

//   const fileInputRef = useRef();

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.file) {
//       alert('Please upload a file.');
//       return;
//     }

//     const submission = new FormData();
//     submission.append('name', formData.name);
//     submission.append('email', formData.email);
//     submission.append('title', formData.title);
//     submission.append('abstract', formData.abstract);
//       submission.append('keywords', formData.keywords);
//     submission.append('file', formData.file);

//     // manuscripts


//     try {

//       // api/ijmsabc/manuscript

//       const response = await Api.post("/manuscripts", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
      


//       // const response = await fetch('https://ijmsbc-backend.onrender.com/api/submit', {
//       //   method: 'POST',
//       //   body: submission
//       //   // No token required
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         setFormData({ name: '', email: '', title: '', abstract: '',keywords:"", file: null });
//         if (fileInputRef.current) fileInputRef.current.value = '';
//       } else {
//         const error = await response.json();
//         alert(`Submission failed: ${error?.error || 'Server error'}`);
//       }
//     } catch (err) {
//       console.error('Error submitting manuscript:', err);
//       alert('An error occurred while submitting. Please try again later.');
//     }
//   };

//   return (
//     <Container className="my-5">
//       <h2 className="text-center  mb-4 sub_title">Submit Your Manuscript</h2>

//       {submitted && (
//         <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
//           Your manuscript has been submitted successfully!
//         </Alert>
//       )}

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
//             required
//           />
//         </Form.Group>

//          <Form.Group className="mb-3" controlId="keywords">
//           <Form.Label>Keywords</Form.Label>
//           <Form.Control
//             type="text"
//             name="keywords"
//             rows={4}
//             value={formData.keywords}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="fileUpload">
//           <Form.Label>Upload Manuscript (.DOC/DOC)</Form.Label>
//           <Form.Control
//             type="file"
//             name="file"
//             accept=".pdf,.doc,.docx"
//             onChange={handleChange}
//             ref={fileInputRef}
//             required
//           />
//         </Form.Group>

//         <div className="text-center">
//           <Button variant="primary" type="submit">
//             Submit Manuscript
//           </Button>
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default SubmitManuscript;


// ///////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';

// import Api from '../Pdfs/Api';

// const SubmitManuscript = () => {
//   const [pdf, setPdf] = useState({
   
//         name: '',
//     email: '',
//     title: '',
//     abst: '',
//     kwords:"",
//     pdf_doc: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "pdf_doc") {
//       setPdf({ ...pdf, [name]: files[0] });
//     } else {
//       setPdf({ ...pdf, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", pdf.name);
//     formData.append("email", pdf.email);
//     formData.append("title", pdf.title);
//     formData.append("abst", pdf.abst);
//     formData.append("kwords", pdf.kwords);
//     formData.append("pdf_doc", pdf.pdf_doc);
    

//     try {
//       const response = await Api.post("/manuscript/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log("Document uploaded successfully", response.data);
//       alert("PDF uploaded successfully ✅");
//     } catch (error) {
//       console.error("Error occurred:", error.response ? error.response.data : error.message);
//       alert("Upload failed ❌");
//     }

//     setPdf({
//         name: '',
//         email: '',
//         title: '',
//         abst: '',
//         kwords:"",
//         pdf_doc: null,
//     });
//     e.target.reset();
//   };

//   const { name,email,title,abst,kwords} = pdf;

//   useEffect(() => {
//     document.title = "Upload File";
//   }, []);

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-12">
//           <div className="card shadow-lg p-4 rounded-3">
//             <h2 className="text-center mb-4">Upload An Article</h2>
//             <form onSubmit={handleSubmit}>
              

//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input
//                 type='text'
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   value={name}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter your Name"
//                 />
//               </div>

//              <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <input 
//                   type='email'
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter your Email"
//                 />
//               </div>


             

//               <div className="mb-3">
//                 <label htmlFor="title" className="form-label">Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="title"
//                   name="title"
//                   // pattern="\d{4}"
//                   value={title}
//                   onChange={handleInputChange}
//                   placeholder="Enter Manuscript Title"
//                   // required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="abst" className="form-label">Abstract</label>
//                 <textarea
//                   className="form-control"
//                   id="abst"
//                   name="abst"
//                   value={abst}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter Abstract Here.."
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="kwords" className="form-label">Key_Words</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="kwords"
//                   name="kwords"
//                   value={kwords}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter Keywords Here.."
//                 />
//               </div>

//               <div className="mb-3">

//                  <div className="mb-3">
//                 <label htmlFor="pdf_doc" className="form-label">Upload PDF</label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   id="pdf_doc"
//                   name="pdf_doc"
//                   accept="application/pdf"
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

               

//                {/* <label htmlFor='type' className="form-label">Type </label>
//         <select name="type" id="type" onChange={handleInputChange} value={type} 
//         required
//         // className="px-3 py-0 my-1 w-72 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="">--select--</option>
//           <option value="Current_Issue">Current Issue</option>
//           <option value="Previous_Issue">Previous Issue</option>
          
//         </select> */}


//               </div>

//               <div className="d-grid">
//                 <button type="submit" className="btn btn-primary btn-lg">
//                   Upload
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubmitManuscript;

import React, { useEffect, useState } from 'react';

import Api from '../Pdfs/Api';

const SubmitManuscript = () => {
  const [pdf, setPdf] = useState({
    name: '',
    email: '',
    title: '',
    abst: '',
    kwords: '',
    pdf_doc: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pdf_doc") {
      setPdf({ ...pdf, [name]: files[0] });
    } else {
      setPdf({ ...pdf, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", pdf.name);
    formData.append("email", pdf.email);
    formData.append("title", pdf.title);
    formData.append("abst", pdf.abst);
    formData.append("kwords", pdf.kwords);
    formData.append("pdf_doc", pdf.pdf_doc); // ✅ match backend param

    try {
      const response = await Api.post("/manuscript/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Document uploaded successfully", response.data);
      alert("Document uploaded successfully ✅");
    } catch (error) {
      console.error("Error occurred:", error.response ? error.response.data : error.message);
      alert("Upload failed ❌");
    }

    setPdf({
      name: '',
      email: '',
      title: '',
      abst: '',
      kwords: '',
      pdf_doc: null,
    });
    e.target.reset();
  };

  useEffect(() => {
    document.title = "Upload File";
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg p-4 rounded-3">
            <h2 className="text-center mb-4">Upload An Article</h2>
            <form onSubmit={handleSubmit}>
              
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={pdf.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={pdf.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your Email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={pdf.title}
                  onChange={handleInputChange}
                  placeholder="Enter Manuscript Title"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="abst" className="form-label">Abstract</label>
                <textarea
                  className="form-control"
                  id="abst"
                  name="abst"
                  value={pdf.abst}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Abstract Here.."
                />
              </div>

              <div className="mb-3">
                <label htmlFor="kwords" className="form-label">Key Words</label>
                <input
                  type="text"
                  className="form-control"
                  id="kwords"
                  name="kwords"
                  value={pdf.kwords}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Keywords Here.."
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pdf_doc" className="form-label">Upload PDF</label>
                <input
                  type="file"
                  className="form-control"
                  id="pdf_doc"
                  name="pdf_doc"
                  accept="application/pdf"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitManuscript;
