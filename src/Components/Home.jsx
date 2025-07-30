import { Col, Container, Image, Row } from 'react-bootstrap';

import DarkVariantExample from '../Courosals/DarkVariantExample';
import React from 'react';

const Home = () => {
  return (
    <section className="py-5 bg-light ">
       <h1 className="mb-4 fw-bold text-primary " style={{textAlign:'center'}}>Welcome to IJMSABC</h1>
       <DarkVariantExample/>

      
      <div className='home-para'>
        <h3>Scope of Management Journal</h3>
          <p>Management Journal is publishing high quality papers on all aspects of Management and Economics, Human Resource Management, Organizational Behavior and Organizational Management, International Business, Knowledge Management, Environmental Management, Data Analysis and Decision Making, Technology and Operations Management, Strategic Decision Making, Negotiations and Competitive Decision Making, Ethics in Management, Corporate Governance, Corporate Social Responsibility, Entrepreneurship and Innovation, Public Management, Rural Management, General Management, Hotel Management, Intellectual Property Rights, Education Management, Communication Management, Lifecycle Management, Spiritual Management, Tourism Management, Hospitality Management, Leisure Management, Inventory Management, Waste Management, Hospital Management, Financial Markets, International Business, International Finance, E-Business, Empirical Finance, Financial Economics, Financial Engineering, Financial Forecasting, Financial Risk Management and Analysis, Systemic Risk, Corporate Finance, etc.</p>    
     
    <h3> Why publish with the Management Journal?</h3>
   <ul>
      <li>This is a peer-reviewed Management Journal</li>
      <li> DOI from CrossRef to each published paper</li>
      <li>Publication Certificate will be provided to all authors</li>
      <li>Open access journal (High Citation Rate)</li>
      <li>This Management Journal is indexed by various reputed databases</li>
      <li>Rapid publication after acceptance</li>
    </ul>   

      </div>
        
    </section>
  );
};

export default Home;
