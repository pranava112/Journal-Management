import { Card } from "react-bootstrap";
import React from "react";

const VisitorCount = ({ count, title, color }) => {
  return (
    <Card
      className="text-center shadow-sm border-0"
      style={{ borderRadius: "12px" }}
    >
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "1.3rem",
            color: color || "#0d6efd",
            fontWeight: "600",
          }}
        >
          {title || "Visitors"}: {count}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
           
            marginTop: "10px",
          }}
        >
          {/* {count} */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VisitorCount;
