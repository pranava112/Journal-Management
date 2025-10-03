import './About.css'; // Import the CSS

import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      {/* <h2 className="sub_title">About</h2> */}

      <section className="about-section">
        <h3>AIM</h3>
        <p>
          The primary aim of the International Journal of Management Science and Business Conclave (IJMSABC) is to provide a credible, peer-reviewed platform for the dissemination of high-quality research in the field of management and business studies. The journal seeks to advance knowledge, foster innovation, and facilitate the exchange of ideas among scholars, practitioners, policymakers, and industry leaders worldwide. IJMSABC encourages research that addresses contemporary challenges, proposes evidence-based solutions, and contributes to the sustainable growth and transformation of organizations and economies.
        </p>
      </section>

      <section className="about-section">
        <h3>Scope of the Journal</h3>
        <p>The journal publishes original research articles, case studies, and critical reviews in all areas of management and business studies, including but not limited to:</p>
        <ul>
          <li>Organizational Behavior and Leadership,</li>
          <li>Strategic Management and Business Policy,</li>
          <li>Human Resource Development and Talent Management,</li>
          <li>Entrepreneurship and Innovation,</li>
          <li>Financial Management and Accounting Practices,</li>
          <li>Marketing Strategies and Consumer Behavior,</li>
          <li>Operations, Supply Chain, and Logistics Management,</li>
          <li>Business Analytics, Data-Driven Decision Making, and Digital Transformation</li>
          <li>Technology Management and its Impact on Global Business,</li>
          <li>Hospital Management, IT Management,</li>
          <li>All areas of Management, etc.,</li>
        </ul>
        <p>IJMSABC welcomes Management research that integrates management theory with practical applications, addressing current global trends and challenges in business. The journal aims to strengthen the dialogue between academia research and industry, encourage evidence based management practices and contribute to the advancement of knowledge in the field of management and business studies.</p>
      </section>

      <section className="about-section">
        <h3>Why publish with the Management Journal?</h3>
        <ul>
          <li>This is a peer-reviewed Management Journal</li>
          <li>DOI from CrossRef to each published paper</li>
          <li>Publication Certificate will be provided to all authors</li>
          <li>Open access journal (High Citation Rate)</li>
          <li>This Management Journal is indexed by various reputed databases</li>
          <li>Rapid publication after acceptance</li>
        </ul>
      </section>

    </div>
  );
};

export default About;
