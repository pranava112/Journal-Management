import './AuthorGuidelines.css';

import React, { useEffect } from 'react';

const AuthorGuidelines = () => {
  useEffect(() => {
    document.title = "Author Guidelines";
  }, []);

  return (
    <div className='AuthorGuidelines'>
      <h1 className="text-center">Author Guidelines</h1>

      <p>
        The International Journal of Management Science and Business Conclave (IJMSBC)
        provides specific guidelines for authors preparing manuscripts for submission.
        Here's a comprehensive overview:
      </p>

      <h2>Manuscript Preparation</h2>

      <h3>Originality:</h3>
      <p>
        Submissions must be original, unpublished works not under consideration elsewhere.
        Authors are responsible for ensuring their work is free from plagiarism and other
        forms of academic misconduct.
      </p>

      <h3>Authorship:</h3>
      <p>
        Only individuals who have made significant contributions to the research should
        be listed as authors. All listed authors must consent to the submission.
      </p>

      <h3>Ethical Compliance:</h3>
      <p>
        Research involving human participants, animals, or sensitive data must comply
        with relevant ethical standards. Ethical clearance from appropriate committees
        should be obtained, and a statement confirming such approval must be included
        in the manuscript.
      </p>

      <h2>Manuscript Structure</h2>

      <ul>
        <li><strong>Title Page:</strong> Full title, author names, affiliations, and contact details.</li>
        <li><strong>Abstract:</strong> A concise summary not exceeding 350 words.</li>
        <li><strong>Keywords:</strong> 5–8 relevant words or phrases.</li>
        <li><strong>Introduction:</strong> Background and objectives.</li>
        <li><strong>Literature Review:</strong> Contextual review of existing research.</li>
        <li><strong>Methodology:</strong> Detailed account of methods used.</li>
        <li><strong>Results:</strong> Clear presentation of findings.</li>
        <li><strong>Discussion:</strong> Interpretation of results.</li>
        <li><strong>Conclusion:</strong> Summary of findings and implications.</li>
        <li><strong>References:</strong> Properly cited sources.</li>
      </ul>

      <h3>Formatting:</h3>
      <p>
        Manuscripts should be prepared in Microsoft Word, OpenOffice, or Rich Text Format (RTF).
        There is no strict length limit, but submissions should be concise and focused.
      </p>

      <h2>Submission Process</h2>

      <h3>Submission Method:</h3>
      <p>
        Manuscripts can be submitted through the journal’s online submission system
        or via email to the editorial office at <a href="mailto:editorial@cambridgeresearchpub.com">editorial@cambridgeresearchpub.com</a>.
      </p>

      <h3>Peer Review:</h3>
      <p>
        All manuscripts undergo a rigorous double-blind peer review process to ensure
        scholarly quality and integrity. Based on reviewers’ recommendations, editors
        make the final decision on acceptance, revision, or rejection.
      </p>

      <h3>Conflict of Interest and Funding:</h3>
      <p>
        Authors must disclose any financial or non-financial conflicts of interest and
        provide details of all sources of financial support, including grant numbers if applicable.
      </p>
    </div>
  );
};

export default AuthorGuidelines;
