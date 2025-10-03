import { Card } from "react-bootstrap";
import React from "react";

const VisitorCount = ({ count }) => {
  return (
    <Card className="text-center shadow-sm mb-3">
      <Card.Body>
        <Card.Title>Today's Visitors</Card.Title>
        <Card.Text style={{ fontSize: "2rem", fontWeight: "bold", color: "#007bff" }}>
          {count}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VisitorCount;
