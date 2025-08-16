import { Button } from 'react-bootstrap';
import React from 'react';

const CallButton = () => {
  const handleCall = () => {
    // window.location.href = "tel:+918143123534";
    BsWindowSidebar.location.href="tel:+919247719521"
  };

  return (
    <Button variant="success" onClick={handleCall}>
      📞 Call Now
    </Button>
  );
};

export default CallButton;