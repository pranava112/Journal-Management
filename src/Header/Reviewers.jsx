import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react'

import Api from '../Pdfs/Api';

const Reviewers = () => {

  const[reviewers,setReviewers]=useState({
    name:"",
    designation:"",
    email:"",
    address:"",
    cv:null,
  });

  let{name,designation,email,address,cv}=reviewers;

  // const handleSubmit=async (e)=>{
  //   e.preventDefault();
  //   console.log(reviewers);

  //   try{
  //     const response=await Api.post("/reviews",reviewers,{
  //       headers:{"Cotent-Type":"application/json"},
  //     });
  //     console.log("Reviews Saved Successfully",response.data);
  //     alert("Review Saved Successfully");
      
  //   }catch(error){
  //     console.error("Error Occurred:",error.response?error.respose.data:error.message);
  //     alert("Upload failed");
      
  //   }finally{
  //     setReviewers({
  //        name:"",
  //        designation:"",
  //        email:"",
  //        address:"",
  //        cv:null,
  //     })
  //   } 
  // }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", reviewers.name);
  formData.append("email", reviewers.email);
  formData.append("address", reviewers.address);
  formData.append("designation",reviewers.designation);
  formData.append("cv", reviewers.cv); // file

  try {
    const response = await Api.post("/reviews", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Reviers Details Saved Successfully", response.data);
    alert("Reviers Details Saved successfully ✅");
    setReviewers({
      name: "",
      designation:"",
      email: "",
      address: "",
      cv: null,
    });
  } catch (error) {
    console.error("Error occurred:", error.response ? error.response.data : error.message);
    alert("Upload failed ❌");
  }
};


  const handleInput=(e)=>{
    let{name,value}=e.target;
    setReviewers({...reviewers,[name]:value});
  }

  return (
    <>
      
        <Container className="reviews-container">
      <h1 className="text-center sub_title">Reviewers..........</h1>

     <p>
      IJMSABC serves as a valuable platform for academicians, researchers, and students worldwide to share knowledge and innovations in management and business sciences. We warmly invite your support and collaboration as a reviewer to strengthen the journal’s academic excellence.
     </p>
  <Row className="mb-4">
      <Col xs={12} className="contact-form">
         <h5>Please enter the details for Reviewers.</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name*</Form.Label>
            <Form.Control type="text" value={name} name='name' placeholder='Enter Your Name' required  onChange={handleInput}/>
          
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email*</Form.Label>             
            <Form.Control type="email" name="email"  value={email} placeholder='Enter Your Email' required onChange={handleInput} />
         
            </Form.Group>

            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>Designation*</Form.Label>
               <Form.Control type="text"  name='designation' value={designation} placeholder='Enter Your Designation' required  onChange={handleInput}/>
          
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address*</Form.Label>
                <Form.Control type="text"  name='address' value={address} placeholder='Enter Your Address' required onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cv">
  <Form.Label>CV*</Form.Label>
  <Form.Control
    type="file"
    name="cv"
    accept=".pdf,.doc,.docx" // restrict file types
    required
    onChange={(e) => setReviewers({ ...reviewers, cv: e.target.files[0] })}
  />
</Form.Group>


            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>



    </>
  )
}

export default Reviewers
