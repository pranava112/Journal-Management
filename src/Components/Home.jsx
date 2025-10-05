import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import DarkVariantExample from '../Courosals/DarkVariantExample';
import React from 'react';

const Home = () => {
  return (
    <section className="py-5 bg-light ">
       <h1 className="mb-4 fw-bold text-primary " style={{textAlign:'center'}}>Welcome to IJMSABC</h1>
       <DarkVariantExample/>

      
      <div className='home-para'>
       <p>International Journal of Management Science and Business Conclave is a peer-reviewed, open-access journal dedicated to advancing both empirical and theoretical research in management science, business analysis, and related fields. It provides a scholarly platform for researchers, academics, consultants, and industry professionals to share insights, methodologies, and applied solutions that support strategic business decision-making and organizational development. The journal covers a wide range of disciplines including accounting and finance, management, marketing, human resource management, technology, social sciences, and arts, welcoming contributions from researchers, scholars, doctors, professors, and business consultants worldwide. Articles published in this journal are reviewed by internationally qualified experts to ensure high academic standards and are used as case studies in universities across the world wide.</p>
          
    {/* <h3> Why publish with the Management Journal?</h3>
   <ul>
      <li>This is a peer-reviewed Management Journal</li>
      <li> DOI from CrossRef to each published paper</li>
      <li>Publication Certificate will be provided to all authors</li>
      <li>Open access journal (High Citation Rate)</li>
      <li>This Management Journal is indexed by various reputed databases</li>
      <li>Rapid publication after acceptance</li>
    </ul>    */}

      </div>

      {/* <div>
        <p>IJMSABC QR Code</p>
        <img src="/ijmsabc_qr.png" alt="qrcode" />
      </div> */}

       {/* <Card className="text-center shadow-sm my-4" style={{ maxWidth: "300px", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title className="mb-3">IJMSABC QR Code</Card.Title>
        <Card.Img 
          variant="top" 
          src="/ijmsabc_qr.png" 
          alt="IJMSABC QR Code" 
          style={{ width: "200px", height: "200px", objectFit: "contain", margin: "0 auto" }}
        />
      </Card.Body>
    </Card> */}
        
    </section>
  );
};

export default Home;
