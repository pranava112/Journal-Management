import React, { useEffect, useState } from 'react';

import Api from '../Pdfs/Api'; // Your Axios instance pointing to backend
import { Helmet } from 'react-helmet';

const SubmitManuscript = () => {
  const [manuscript, setManuscript] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    abst: '',
    kwords: '',
    pdf_doc: null,
  });

  const [loading, setLoading] = useState(false); // 🔹 State for loader

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pdf_doc") {
      setManuscript({ ...manuscript, [name]: files[0] });
    } else {
      setManuscript({ ...manuscript, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔹 Start loading

    const formData = new FormData();
    formData.append("name", manuscript.name);
    formData.append("email", manuscript.email);
    formData.append("phone", manuscript.phone);
    formData.append("title", manuscript.title);
    formData.append("abst", manuscript.abst);
    formData.append("kwords", manuscript.kwords);
    formData.append("pdf_doc", manuscript.pdf_doc);
    formData.append("source", "ijmsabc"); // CONSTANT

    try {
      const response = await Api.post("/manuscript/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Document uploaded successfully", response.data);
      alert("✅ Document uploaded successfully!");

      setManuscript({
        name: '',
        email: '',
        phone: '',
        title: '',
        abst: '',
        kwords: '',
        pdf_doc: null,
      });

      e.target.reset();
    } catch (error) {
      console.error("Error occurred:", error.response ? error.response.data : error.message);
      alert("❌ Upload failed! Please try again.");
    } finally {
      setLoading(false); // 🔹 Stop loading
    }
  };

  useEffect(() => {
    document.title = "Upload Manuscript";
  }, []);

  return (
    <>
      <Helmet>
        <title>Article Submission | IJMSABC</title>
        <meta
          name="description"
          content="Submit your research article to IJMSABC for Management Science And Business Conclave."
        />
        <link rel="canonical" href="https://www.ijmsabc.org/SubmitManuscript" />
      </Helmet>

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
                    value={manuscript.name}
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
                    value={manuscript.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your Email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={manuscript.phone}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    maxLength={10}
                    placeholder="Enter your Phone No"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={manuscript.title}
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
                    value={manuscript.abst}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Abstract Here.."
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="kwords" className="form-label">Keywords</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kwords"
                    name="kwords"
                    value={manuscript.kwords}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Keywords Here.."
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="pdf_doc" className="form-label">Upload DOC</label>
                  <input
                    type="file"
                    className="form-control"
                    id="pdf_doc"
                    name="pdf_doc"
                    accept=".doc,.docx,.pdf"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Uploading...
                      </>
                    ) : (
                      "Upload"
                    )}
                  </button>
                </div>
              </form>

              {/* Optional loader text below button */}
              {loading && (
                <div className="text-center mt-3 text-secondary">
                  Please wait, your manuscript is being uploaded...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitManuscript;
