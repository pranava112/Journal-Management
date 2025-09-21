import React, { useEffect, useState } from "react";

import Api from "../Pdf's/Api";

const News = () => {
  const [info, setInfo] = useState({ information: "" });

  const fetchData = async () => {
    try {
      // ✅ Use singular "announcement" to match your Spring Boot mapping
      const { data } = await Api.get("/announcement/1");
      setInfo(data);
      // console.log("Fetched announcement:", data);
    } catch (e) {
      if (e.response) {
        console.error(
          `Error fetching news: ${e.response.status} - ${JSON.stringify(
            e.response.data
          )}`
        );
      } else {
        console.error("Error fetching news:", e.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
   
    <>
      {/* <h3 className="text-black text-center text-xl font-bold">ANNOUNCEMENT</h3> */}
      <marquee
        className="text-black text-center mt-2 text-lg"
        direction="left"
      >
        <img src="/new_blink.gif" alt="logo" className="inline-block mr-2" />
        {info.information || "No announcement available"}
      </marquee>
    </>
  );
};

export default News;




// import { Alert, Container, Spinner } from "react-bootstrap";
// import React, { useEffect, useState } from "react";

// import Api from "../Pdf's/Api";

// const News = () => {
//   const [announcement, setAnnouncement] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchAnnouncement = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await Api.get("/announcement/1"); // fetch latest or specific announcement
//       setAnnouncement(res.data?.information || "No announcement available");
//     } catch (err) {
//       console.error("Error fetching announcement:", err);
//       if (err.response) {
//         setError(`Server responded ${err.response.status}`);
//       } else if (err.request) {
//         setError("No response from server (network issue?)");
//       } else {
//         setError(err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAnnouncement();
//   }, []);

//   return (
//     <Container className="my-3">
//       {loading && (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       )}

//       {error && (
//         <Alert variant="danger" className="text-center">
//           {error}
//         </Alert>
//       )}

//       {announcement && !loading && !error && (
//         <div className="bg-primary text-white py-2 px-3 rounded">
//           <marquee behavior="scroll" direction="left" scrollamount="5">
//             📢 {announcement}
//           </marquee>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default News;
