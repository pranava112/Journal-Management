// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import Api from "../Pdf's/Api"; // keep your path if that's where the file lives

// const Announcement = () => {
//   const [announcement, setAnnouncement] = useState({ information: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { id } = useParams(); // dynamic ID (string) from route
//   const navigate = useNavigate();

//   const getApi = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       // NOTE: use singular "announcement" to match your Spring controller
//       const res = await Api.get(`/announcement/${id || 1}`);
//       setAnnouncement(res.data || { information: "" });
//     //   console.log("Fetched data:", res.data);
//     } catch (err) {
//       console.error("Error fetching announcement:", err);
//       if (err.response) {
//         setError(`Server responded ${err.response.status}: ${JSON.stringify(err.response.data)}`);
//       } else if (err.request) {
//         setError("No response received from server (network / CORS issue?)");
//       } else {
//         setError(err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     document.title = "Announcement";
//     getApi();
//     // run when id changes
//   }, [id]);

//   const handleInput = (e) => {
//     setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     try {
//       const payload = { information: announcement.information };
//       const res = await Api.put(`/announcement/${id || 1}`, payload);
//       console.log("Updated payload:", payload, "response:", res.data);
//       alert("Data updated successfully!");
//       navigate("/");
//     } catch (err) {
//       console.error("Error updating data:", err);
//       if (err.response) {
//         setError(`Update failed: ${err.response.status}`);
//       } else {
//         setError("Update failed (network/CORS?)");
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
//         <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">📢 ANNOUNCEMENT</h1>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : error ? (
//           <div className="mb-4 p-3 border border-red-300 bg-red-50 text-red-700 rounded">
//             <strong>Error:</strong> {error}
//           </div>
//         ) : null}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col">
//             <label htmlFor="anno" className="info text-sm font-medium text-gray-700 mb-1">
//               Announcement:
//             </label>
//             <textarea
//               id="anno"
//               name="information"
//               placeholder="Enter the announcement"
//               value={announcement.information}
//               onChange={handleInput}
//               required
//               className="info w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-28"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             SUBMIT
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Announcement;

import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Api from "../Pdfs/Api"; // keep your path

const Announcement = () => {
  const [announcement, setAnnouncement] = useState({ information: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const getApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await Api.get(`/announcement/${id || 1}`);
      setAnnouncement(res.data || { information: "" });
    } catch (err) {
      console.error("Error fetching announcement:", err);
      if (err.response) {
        setError(`Server responded ${err.response.status}: ${JSON.stringify(err.response.data)}`);
      } else if (err.request) {
        setError("No response received from server (network / CORS issue?)");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Announcement";
    getApi();
  }, [id]);

  const handleInput = (e) => {
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const payload = { information: announcement.information };
      const res = await Api.put(`/announcement/${id || 1}`, payload);
      console.log("Updated payload:", payload, "response:", res.data);
      alert("Data updated successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error updating data:", err);
      if (err.response) {
        setError(`Update failed: ${err.response.status}`);
      } else {
        setError("Update failed (network/CORS?)");
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg w-100" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <Card.Title className="text-center text-primary mb-4 fs-3">
            📢 ANNOUNCEMENT
          </Card.Title>

          {loading && (
            <div className="text-center mb-3">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {error && (
            <Alert variant="danger" className="mb-3">
              <strong>Error:</strong> {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="anno">
              <Form.Label>Announcement</Form.Label>
              <Form.Control
                as="textarea"
                name="information"
                rows={4}
                placeholder="Enter the announcement"
                value={announcement.information}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              SUBMIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Announcement;
