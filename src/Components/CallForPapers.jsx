// import { Button } from 'react-bootstrap';
// import React from 'react';

// const CallButton = () => {
//   const handleCall = () => {
//     window.location.href = "tel:+918143123534";
//     // BsWindowSidebar.location.href="tel:+91"
//   };

//   return (
//     <Button variant="success" onClick={handleCall}>
//       📞 Call Now
//     </Button>
//   );
// };


// export default CallButton;

import React from 'react'

const CallForPapers = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 sub_title">Call for Papers</h2>
      <p className="text-lg leading-relaxed mb-4">
        We warmly invite researchers, scholars, and professionals to submit their
        original research papers, articles, and case studies to the{" "} <br />
        <strong>International Journal of Management Science and Business Conclave (IJMSBC)</strong>.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Submissions are welcomed in all areas of management, business, science,
        and related fields that contribute to innovative academic and practical knowledge.
      </p>
      <p className="text-lg leading-relaxed">
        For paper submission or inquiries, please contact us at:{" "}
        <a
          href="mailto:editor@ijmsbc.org"
          className="text-blue-400 underline hover:text-blue-600"
        >
          {/* editor@ijmsabc.org */}
          ijmsabc@gmail.com
        </a>
      </p>
    </div>
  )
}

export default CallForPapers

