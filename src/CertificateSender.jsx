// import React, { useState } from "react";

// import emailjs from "emailjs-com";
// import { jsPDF } from "jspdf";

// export default function CertificateSender() {
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     email: "",
//   });
//   const [status, setStatus] = useState("");

//   const generateCertificate = (name, title) => {
//     const doc = new jsPDF();

//     // Certificate layout
//     doc.setFont("times", "bold");
//     doc.setFontSize(24);
//     doc.text("Certificate of Submission", 105, 40, { align: "center" });

//     doc.setFontSize(16);
//     doc.setFont("times", "normal");
//     doc.text(
//       `This is to certify that`,
//       105,
//       70,
//       { align: "center" }
//     );

//     doc.setFont("times", "bold");
//     doc.text(name, 105, 85, { align: "center" });

//     doc.setFont("times", "normal");
//     doc.text(
//       `has successfully submitted the manuscript titled`,
//       105,
//       100,
//       { align: "center" }
//     );

//     doc.setFont("times", "italic");
//     doc.text(`"${title}"`, 105, 115, { align: "center" });

//     doc.setFont("times", "normal");
//     doc.text("IJMSABC Editorial Board", 105, 160, { align: "center" });

//     // Add signature or line
//     doc.text("---------------------------", 105, 170, { align: "center" });
//     doc.text("Editor-in-Chief", 105, 180, { align: "center" });

//     return doc.output("blob");
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setStatus("Generating certificate...");

//     const { name, title, email } = formData;
//     const pdfBlob = generateCertificate(name, title);

//     const reader = new FileReader();
//     reader.readAsDataURL(pdfBlob);
//     reader.onloadend = async () => {
//       const base64PDF = reader.result.split(",")[1];

//       try {
//         setStatus("Sending email...");
//         await emailjs.send(
//           "service_dsbukiv", // replace
//           "template_b61v5hu", // replace
//           {
//             to_email: email,
//             to_name: name,
//             message: `Dear ${name},\n\nThank you for submitting your manuscript titled "${title}" to IJMSABC.\nPlease find your certificate attached.`,
//             attachment: base64PDF,
//           },
//           "UCz3tjWb0179n74R9" // replace
//         );
//         setStatus("✅ Certificate sent successfully!");
//       } catch (err) {
//         console.error(err);
//         setStatus("❌ Failed to send certificate.");
//       }
//     };
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "2rem auto", textAlign: "center" }}>
//       <h2>Manuscript Submission Certificate Generator</h2>
//       <form onSubmit={sendEmail}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your full name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter manuscript title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           required
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email address"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           required
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <button
//           type="submit"
//           style={{
//             marginTop: "10px",
//             padding: "10px 20px",
//             background: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           Generate & Send Certificate
//         </button>
//       </form>

//       <p style={{ marginTop: "15px" }}>{status}</p>
//     </div>
//   );
// }

import React, { useState } from "react";

import emailjs from "emailjs-com";
import { jsPDF } from "jspdf";

export default function CertificateSender() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  // Generate certificate PDF
  const generateCertificate = (name, title) => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: "a4",
    });

    // Background border and layout
    doc.setDrawColor(0);
    doc.setLineWidth(3);
    doc.rect(20, 20, 800, 550); // border

    doc.setFont("times", "bold");
    doc.setFontSize(30);
    doc.text("IJMSABC Certificate of Submission", 420, 120, { align: "center" });

    doc.setFontSize(16);
    doc.setFont("times", "normal");
    doc.text("This is to certify that", 420, 200, { align: "center" });

    doc.setFont("times", "bold");
    doc.setFontSize(20);
    doc.text(name, 420, 240, { align: "center" });

    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.text("has successfully submitted the manuscript titled:", 420, 280, {
      align: "center",
    });

    doc.setFont("times", "italic");
    doc.setFontSize(18);
    doc.text(`"${title}"`, 420, 320, { align: "center" });

    doc.setFont("times", "normal");
    doc.text("IJMSABC Editorial Board", 420, 400, { align: "center" });
    doc.text("----------------------------", 420, 420, { align: "center" });
    doc.text("Editor-in-Chief", 420, 440, { align: "center" });

    // Return PDF blob
    return doc.output("blob");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Generating certificate...");

    const { name, title, email } = formData;
    const pdfBlob = generateCertificate(name, title);

    // Convert to Base64 string
    const reader = new FileReader();
    reader.readAsDataURL(pdfBlob);

    reader.onloadend = async () => {
      const base64String = reader.result; // includes data:application/pdf;base64,...

      try {
        setStatus("Sending email...");
        await emailjs.send(
          "service_dsbukiv", // Replace with your EmailJS service ID
          "template_b61v5hu", // Replace with your EmailJS template ID
          {
            to_name: name,
            to_email: email,
            title: title,
            message: `Dear ${name},\n\nThank you for submitting your manuscript titled "${title}" to IJMSABC.\nPlease find your certificate attached.\n\nBest regards,\nIJMSABC Editorial Team`,
            attachments: base64String, // Important! use plural form
          },
          "UCz3tjWb0179n74R9" // Replace with your EmailJS public key
        );

        setStatus("✅ Certificate sent successfully!");
      } catch (error) {
        console.error("Email send failed:", error);
        setStatus("❌ Failed to send certificate. Check console for details.");
      }
    };
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Manuscript Submission Certificate</h2>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Enter full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Enter manuscript title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Generate & Send
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>{status}</p>
    </div>
  );
}
