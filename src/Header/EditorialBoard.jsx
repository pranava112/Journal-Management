import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import React from 'react';

const members = [
  {
    name: 'Dr. Tanvir Hussein',
    position:"Associate Professor",
    Department:"Accounting & Financial Science",
    university:"Gulf University,.",
    address:"Building 1964, Road 4363, Block 743, Sanad, Kingdom of Bahrain. ",
    email:"dr.tanvir@gulfuniversity.edu.bh ",
    Profilelink: 'https://www.gulfuniversity.edu.bh/colleges/administrative-and-financial-science/departments/accounting-and-financial-science/department-staff/dr-tanvir-hussein/',
    pdf: '/assets/john.pdf',
    image: '../dummy-image.png',
  },
  // {
  //   name:"Prof. Prema Kirubakaran",
  //   position:"Deputy Vice Chancellor  (Central Admin) & HOD, ",
  //   Department:"Department Information Technology & Systems",
  //   university:"Nile University of Nigeria  ",
  //   address:"Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass, Abuja FCT, 900001 Nigeria. ",
  //   email:"prema.kirubakaran@nileuniversity.edu.ng ",
  //   Profilelink: ': https://nileuniversity.edu.ng/staff/dr-a-prema-kirubakaran',
  //   pdf:"",
  //   image:"../dummy-image.png",
  // },

  {
    name:"Dr.Vinoth raman rangan",
    position:"Assistant Professor",
    Department:"Deanship of Quality and Academic Accreditation ",
    university:"Imam Abdulrahman Bin Faisal University",
    address:"Dammam, Saudi Arabia",
    email:"vrrangan@iau.edu.sa ",
    Profilelink:": https://www.iau.edu.sa/en/colleges/deanship-of-quality-and-academic-accreditation/faculty/dr-vinoth-raman-rangan",
    pdf:"",
    image:"../dummy-image.png",
  },

  {
    name:"Dr. Vottiprolu Vijaya Kumar ",
    position:"•	Publisher/ Editor in Chief / Assistant Professor",
    Department:"Institute of Management and Research",
    university:"MGM University",
    address:"Chhatrapati Sambhajinagar, Maharashtra.",
    email:"vvottiprolu@mgmu.ac.in",
    Profilelink: 'https://mgmu.ac.in/admissions/program/master-of-business-administration-mba',
    pdf:"",
    image:"../dummy-image.png",
  },

  {
    name:"Dr Vishali Kahpradhe ",
    
    position:"Head, & Director I/C,",
    Department:"Department of Library & Information Science & Knowledge Resource Centre",
    university:"Dr. Babasaheb Ambedkar Marathwada University, University Campus, Near Soneri Mahal",
    address:"Jaisingpura Chhatrapati Sambhajinagar  431004",
    email:"head.libscience@bamu.ac.in ",
    Profilelink: 'https://www.bamu.ac.in/campus/institutional-excellence/krc-library/#',
ProfileLink1:'https://www.bamu.ac.in/en/academicspage/department-of-library-and-information-science/',
    pdf:"",
    image:"../dummy-image.png",
  },

  {
    name:"DR ZEENA FLAVIA D’SOUZA",
    position:"Associate Professor",
    Department:"School of Commerce, Finance and Accountancy",
    university:" St Aloysius (Deemed to be University)",
    address:"Mangalore. Karnataka",
    email:"zeena_flavia@staloysius.edu.in",
    Profilelink: 'https://staloysius.edu.in/school/school-of-commerce-finance-and-accountancy',
    pdf:"",
    image:"../dummy-image.png",
  },

  {
    name:"DR. Nirav Joshi",
    position:"Assistant Professor",
    Department:"VM Patil Institute of Management",
    university:"Ganpat University",
    address:"Mehsana Gandhinagr Highway, PO-384012, North Gujarat, India",
    email:"nrj01@ganpatuniversity.ac.in",
    Profilelink: 'https://vmpim.guni.ac.in/people/faculty/dr-nirav-joshi',
    pdf:"",
    image:"../dummy-image.png",
  },

  {
    name:"Mr. Ganesh Sagre",
    position:"Librarian",
    Department:"Institute of Management and Research Librarian ",
    university:"MGM University",
    address:"Institute of Management and Research N-6 CIDCO Chhatrapati Sambhajinagar  431003",
    email:"gsagare@mgmu.ac.in",
    Profilelink: 'https://mgmu.ac.in/knowledge-resource-center?srsltid=AfmBOop5WpQ08inSpv3tQUl_QgjeLSMmkzSZR48Sx6BiCuFWbWEpcxOp',
    pdf:"",
    image:"../dummy-image.png",
  },
  
];

const EditorialBoard = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Editorial Board</h1>
      <Row className="g-4">
        {members.map((member, index) => (
          <Col key={index} md={12}>
            <Card className="shadow-sm p-3">
              <Card.Body>
                <Row className="align-items-center">
                  {/* Image Column - ID 1 */}
                  <Col xs={12} sm={3} className="text-center mb-3 mb-sm-0">
                    <Image
                      src={member.image}
                      roundedCircle
                      width={100}
                      height={100}
                      style={{ objectFit: 'cover' }}
                      alt={member.name}
                      id="1"
                    />
                  </Col>

                  {/* Text Column - ID 2 */}
                  <Col xs={12} sm={6} id="2">
                    <h5 style={{color:'purple'}}>{member.name}</h5>
                    <ul itemType='document' className="list-unstyled">
                      <li>{member.position}</li>
                    <li><h5>Department:</h5>{member.Department}</li>
                    <p><h5>University:</h5>{member.university}</p>
                    <li><h5>Address: </h5>{member.address}</li>
                    <li><h5>Email:</h5>{member.email}</li>
                    <li><h5>Profile Link:</h5><a href={member.Profilelink}>{member.Profilelink}</a><a href={member.ProfileLink1}>{member.ProfileLink1}</a></li>
                    </ul>
                    
                    
                    {/* <p>{member.Profilelink}</p> */}
                  </Col>

                  {/* PDF Link Column - ID 3 */}
                  <Col xs={12} sm={3} className="text-center" id="3">
                    <a
                      href={member.pdf}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View PDF
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditorialBoard;
