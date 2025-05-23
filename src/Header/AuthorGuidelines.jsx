import './AuthorGuidelines.css'

import React, { useEffect } from 'react'

const AuthorGuidelines = () => {

  useEffect(()=>{
    document.title="Author Guidelines";
  })

  return (
    <>
     <div className='AuthorGuidelines'>
      <h1>Author Guidelines</h1>
      <div> <p>The International Journal of Management Science and Business Conclave (IJMSBC) provides specific guidelines for authors preparing manuscripts for submission. Here's a comprehensive overview:
       </p></div>

      <div>
         <h2>Manuscript Preparation</h2>
      </div>
       <div>
        <p>
        <h3>Originality:</h3> Submissions must be original, unpublished works not under consideration elsewhere. Authors are responsible for ensuring their work is free from plagiarism and other forms of academic misconduct. 
       </p>
         </div>

         <div>
           <p>
        <h3>Authorship:</h3> Only individuals who have made significant contributions to the research should be listed as authors. All listed authors must consent to the submission.
          </p>   
         </div>
       
       <div>
        <p>
        <h3>Ethical Compliance:</h3> Research involving human participants, animals, or sensitive data must comply with relevant ethical standards. Ethical clearance from appropriate committees should be obtained, and a statement confirming such approval must be included in the manuscript.
       </p>
       </div>

       <div>
        <h2>Manuscript Structure:</h2>
       </div>

       <div className='list'>
         <ul>
          <li><b> Typically includes:</b></li>
          <li><b>Title Page:</b> Full title, author names, affiliations, and contact details.</li>
          <li><b>Abstract:</b> A concise summary not exceeding 350 words.</li>
          <li><b>Keywords:</b> 5–8 relevant words or phrases.</li>
          <li><b>Introduction:</b> Background and objectives.</li>
          <li><b>Literature Review:</b> Contextual review of existing research.</li>
          <li><b>Methodology:</b> Detailed account of methods used.</li>
          <li><b>Results:</b> Clear presentation of findings.</li>
          <li><b>Discussion:</b> Interpretation of results.</li>
          <li><b>Conclusion:</b> Summary of findings and implications.</li>
          <li><b>References:</b> Properly cited sources.</li>
         </ul>
       </div>

       <div>
        <p><h3>Formatting:</h3> Manuscripts should be prepared in Microsoft Word, OpenOffice, or Rich Text Format (RTF). There is no strict length limit, but submissions should be concise and focused. </p>
       </div>


       <div>
        <h2>Submission Process</h2>
       </div>

       <div>
        <p><h3>Submission Method:</h3> Manuscripts can be submitted through the journal’s online submission system or via email to the editorial office at editorial@cambridgeresearchpub.com.</p>
       </div>
     
     <div>
      <p><h3>Peer Review:</h3> All manuscripts undergo a rigorous double-blind peer review process to ensure scholarly quality and integrity. Based on reviewers’ recommendations, editors make the final decision on acceptance, revision, or rejection.</p>
     </div>

     <div>
      <p><h3>Conflict of Interest and Funding:</h3> Authors must disclose any financial or non-financial conflicts of interest and provide details of all sources of financial support, including grant numbers if applicable.</p>
     </div>
       
     </div>
    </>
  )
}

export default AuthorGuidelines