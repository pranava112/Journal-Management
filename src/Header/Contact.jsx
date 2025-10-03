// import './Contact.css';

// import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';

// import ContactList from '../Pdfs/AdminDashBoard/ContactList';
// import { NavLink } from 'react-router-dom';
// import React from 'react';

// const Contact = () => {


//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const data = {
//     name: form.name.value,
//     email: form.email.value,
//     phone: form.phone.value,
//     address: form.address.value,
//     message: form.message.value,
//   };

//   try {
//     const res = await fetch('https://ijmsbc-backend.onrender.com/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();
//     if (res.ok) {
//       alert(result.message);
//       form.reset();
//     } else {
//       alert(result.error || 'Submission failed.');
//     }
//   } catch (error) {
//     alert('Error connecting to the server.');
//   }
// };

// return (
//   <>
    // <Container className="contact-container">
    //   <h1 className="text-center sub_title">Contact Us</h1>

    //   <Row className="mb-4">
    //     <Col xs={12} className="office-address">
    //       <h3>Office Address:</h3>
    //       <h5>Dr.V.Vijaya Kumar</h5>
    //       <p><strong>Publisher/Editor-in-Chief</strong></p>
    //       <p>International Journal of Management Science and Business Conclave</p>
    //       <p>11-31, Nandivelugu</p>
    //       <p>Tenali Mandal</p>
    //       <p>Guntur District</p>
    //       <p>Andhra Pradesh-522306</p>
    //       <p><strong>Mobile:</strong> +91 8143123534</p>
    //       <p><strong>Email:</strong> ijmsabc@gmail.com</p>
    //       <p><strong>Email:</strong> vvottiprolu@mgmu.ac.in</p>
    //       <p><strong>Website:</strong> <a href="https://www.ijmsabc.org/" target="_blank" rel="noopener noreferrer">www.ijmsabc.org</a></p>
    //     </Col>

    //     <Col xs={12} className="contact-form">
    //       <h4>Submit Your Information</h4>
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group className="mb-3" controlId="name">
    //           <Form.Label>Name*</Form.Label>
    //           <Form.Control type="text" placeholder="Enter your name" required />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="email">
    //           <Form.Label>Email*</Form.Label>
    //           <Form.Control type="email" placeholder="Enter your email" required />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="phone">
    //           <Form.Label>Phone*</Form.Label>
    //           <Form.Control type="tel" placeholder="Enter your phone number" required />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="address">
    //           <Form.Label>Address*</Form.Label>
    //           <Form.Control as="textarea" rows={2} placeholder="Enter your address" required />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="message">
    //           <Form.Label>Message*</Form.Label>
    //           <Form.Control as="textarea" rows={3} placeholder="Write your message here" required />
    //         </Form.Group>

    //         <Button variant="primary" type="submit">Submit</Button>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
//   </>
// );


  
// };

// export default Contact;

import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import React, { useState } from 'react'

import Api from '../Pdfs/Api';

const Contact = () => {

  const [contact,setContact]=useState({
  
    name:"",
    email:"",
    phone:"",
    address:"",
    message:""
  });
  

  let{name,email,phone,address,message}=contact;

  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(contact);

    try {
      const response = await Api.post("/contact", contact, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Contact Details Saved Successfully", response.data);
      alert("Contact Details Saved successfully ");
    } catch (error) {
      console.error("Error occurred:", error.response ? error.response.data : error.message);
      alert("Upload failed ");
    }
    setContact({
      name:"",
      email:"",
      phone:"",
      address:"",
      message:"",
    })
  //  e.target.reset();
    
  }

  const handleInput=(e)=>{
    let{name,value}=e.target;
    setContact({...contact,[name]:value});

  }


  return (
    <>

        <Container className="contact-container">
      <h1 className="text-center sub_title">Contact Us</h1>

      <Row className="mb-4">
        <Col xs={12} className="office-address">
          <h3>Office Address:</h3>
          <h5>Dr.V.Vijaya Kumar</h5>
          <p><strong>Publisher/Editor-in-Chief</strong></p>
          <p>International Journal of Management Science and Business Conclave</p>
          <p>11-31, Nandivelugu</p>
          <p>Tenali Mandal</p>
          <p>Guntur District</p>
          <p>Andhra Pradesh-522306</p>
          <p><strong>Mobile:</strong> +91 8143123534</p>
          <p><strong>Email:</strong> ijmsabc@gmail.com</p>
          <p><strong>Email:</strong> vvottiprolu@mgmu.ac.in</p>
          <p><strong>Website:</strong> <a href="https://www.ijmsabc.org/" target="_blank" rel="noopener noreferrer">www.ijmsabc.org</a></p>
        </Col>
        <hr />

        <Col xs={12} className="contact-form">
          <h4>Submit Your Information</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name*</Form.Label>
            <Form.Control type="text" value={name} name='name' placeholder='Enter Your Name' required  onChange={handleInput}/>
          
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email*</Form.Label>             
            <Form.Control type="email" name="email"  value={email} placeholder='Enter Your Email' required onChange={handleInput} />
         
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone*</Form.Label>
               <Form.Control type="text"  name='phone' value={phone} placeholder='Enter Your Mobile No' required  onChange={handleInput}/>
          
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address*</Form.Label>
                <Form.Control type="text"  name='address' value={address} placeholder='Enter Your Address' required onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message*</Form.Label>
              {/* <Form.Control  placeholder="Write your message here" required /> */}
              <Form.Control as="textarea" rows={3} name="message"  value={message} placeholder='Enter The Message' onChange={handleInput} required/>

            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>




    </>
  )
}

export default Contact
