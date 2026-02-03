// import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import Api from "../Pdfs/Api"; // keep your path

// const Announcement = () => {
//   const [announcement, setAnnouncement] = useState({ information: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const getApi = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await Api.get(`/announcement/${id || 1}`);
//       setAnnouncement(res.data || { information: "" });
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
//     <Container className="d-flex justify-content-center align-items-center min-vh-100">
//       <Card className="shadow-lg w-100" style={{ maxWidth: "600px" }}>
//         <Card.Body>
//           <Card.Title className="text-center text-primary mb-4 fs-3">
//             📢 ANNOUNCEMENT
//           </Card.Title>

//           {loading && (
//             <div className="text-center mb-3">
//               <Spinner animation="border" variant="primary" />
//             </div>
//           )}

//           {error && (
//             <Alert variant="danger" className="mb-3">
//               <strong>Error:</strong> {error}
//             </Alert>
//           )}

//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="anno">
//               <Form.Label>Announcement</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 name="information"
//                 rows={4}
//                 placeholder="Enter the announcement"
//                 value={announcement.information}
//                 onChange={handleInput}
//                 required
//               />
//             </Form.Group>

//             <Button type="submit" variant="primary" className="w-100">
//               SUBMIT
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Announcement;

import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Api from "../Pdfs/Api";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState({ information: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch Announcement
  const getApi = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await Api.get(`/announcement/${id || 1}`);
      setAnnouncement(res.data);
    } catch (err) {
      setError("Failed to fetch announcement!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Announcement";
    getApi();
  }, [id]);

  // Handle Input
  const handleInput = (e) => {
    setAnnouncement({
      ...announcement,
      information: e.target.value,
    });
  };

  // Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await Api.put(`/announcement/${id || 1}`, announcement);
      alert("Announcement updated successfully!");
      navigate("/");
    } catch (err) {
      setError("Update failed!");
      console.error(err);
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
              <Spinner animation="border" />
            </div>
          )}

          {error && (
            <Alert variant="danger">
              <strong>{error}</strong>
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Announcement</Form.Label>

              <Form.Control
                as="textarea"
                rows={4}
                value={announcement.information}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              SUBMIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Announcement;
