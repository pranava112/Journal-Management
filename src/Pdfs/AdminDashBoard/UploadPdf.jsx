import React, { useEffect, useState } from 'react';

import Api from '../Api';

const UploadPdf = () => {
  const [pdf, setPdf] = useState({
    id: "",
    title: "",
    pdf_link: "",
    volume: "",
    issueNo: "",
    year: "",
    type: "",
    author:""

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPdf({ ...pdf, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", pdf.title);
    formData.append("pdf_link", pdf.pdf_link);
    formData.append("volume", pdf.volume);
    formData.append("issueNo", pdf.issueNo);
    formData.append("year", pdf.year);
    formData.append("type", pdf.type);
    formData.append("author", pdf.author);
    formData.append("source", "ijmsabc"); // CONSTANT
    formData.append("doi", "ijmsabc");

    try {
      const response = await Api.post("/pdfs/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Pdf uploaded successfully", response.data);
      alert("PDF uploaded successfully ✅");
    } catch (error) {
      console.error("Error occurred:", error.response ? error.response.data : error.message);
      alert("Upload failed ❌");
    }

    setPdf({
      id: "",
      title: "",
      pdf_link: "",
      volume: "",
      issueNo: "",
      year: "",
      type: "",
      author:"",
    });
    e.target.reset();
  };

  const { id, title, volume, issueNo, year, type, author, pdf_link} = pdf;

  useEffect(() => {
    document.title = "Upload File";
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg p-4 rounded-3">
            <h2 className="text-center mb-4">Upload PDF</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="id"
                  name="id"
                  value={id}
                  onChange={handleInputChange}
                  placeholder="Enter Particular id"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <textarea
                  className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  required
                  placeholder="Title of Pdf"
                />
              </div>

             <div className="mb-3">
                <label htmlFor="author" className="form-label">Author Name</label>
                <input 
                  type='text'
                  className="form-control"
                  id="author"
                  name="author"
                  value={author}
                  onChange={handleInputChange}
                  required
                  placeholder="Name of the Author"
                />
              </div>


              <div className="mb-3">
                <label htmlFor="pdf_link" className="form-label">PDF Link</label>
                <input
                  type="url"
                  className="form-control"
                  id="pdf_link"
                  name="pdf_link"
                  value={pdf_link}
                  onChange={handleInputChange}
                  placeholder="Enter PDF link (e.g. https://example.com/file.pdf)"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="year" className="form-label">Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="year"
                  name="year"
                  pattern="\d{4}"
                  value={year}
                  onChange={handleInputChange}
                  placeholder="Enter year (e.g. 2025)"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="volume" className="form-label">Volume</label>
                <input
                  type="text"
                  className="form-control"
                  id="volume"
                  name="volume"
                  value={volume}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter volume (e.g. 1)"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="issue" className="form-label">Issue</label>
                <input
                  type="text"
                  className="form-control"
                  id="issueNo"
                  name="issueNo"
                  value={issueNo}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Issue (e.g. 1(1))"
                />
              </div>

              <div className="mb-3">

               

               <label htmlFor='type' className="form-label">Type </label>
        <select name="type" id="type" onChange={handleInputChange} value={type} 
        required
        // className="px-3 py-0 my-1 w-72 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">--select--</option>
          <option value="Current_Issue">Current Issue</option>
          <option value="Previous_Issue">Previous Issue</option>
          
        </select>


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

export default UploadPdf;