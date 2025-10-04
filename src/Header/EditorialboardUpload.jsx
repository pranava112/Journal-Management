import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react'

import Api from '../Pdfs/Api';

const EditorialboardUpload = () => {

  const[editorialboardUpload,setEditorialboardUpload]=useState({
    name:"",
    designation:"",
    email:"",
    address:"",
    cv:null,
  });

  let{name,designation,email,address,cv}=editorialboardUpload;

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
  formData.append("name", editorialboardUpload.name);
  formData.append("email", editorialboardUpload.email);
  formData.append("address", editorialboardUpload.address);
  formData.append("designation",editorialboardUpload.designation);
  formData.append("cv", editorialboardUpload.cv); // file

  try {
    const response = await Api.post("/editorialboardupload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Details Saved Successfully", response.data);
    alert("Details Saved successfully ");
    setEditorialboardUpload({
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
    setEditorialboardUpload({...editorialboardUpload,[name]:value});
  }

  return (
    <>
      
        <Container className="reviews-container">
      <h1 className="text-center sub_title">Editorial Board Members..........</h1>

<h3>Invitation to Join Our Editorial Board</h3>
<p>
  IJMSABC is seeking dedicated and qualified researchers to join its Editorial Team. Like our other journals, IJMSABC aims to be a valuable resource for academicians, researchers, and students across the globe. We invite you to support this initiative by becoming a part of our editorial team.
</p>
    
  <Row className="mb-4">
      <Col xs={12} className="contact-form">
         <h5>Please enter the details for Editorial Board Membership.</h5>
         {/* <h5>Invitation to Join Our Editorial Board</h5> */}
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
    onChange={(e) => setEditorialboardUpload({ ...editorialboardUpload, cv: e.target.files[0] })}
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

export default EditorialboardUpload;
