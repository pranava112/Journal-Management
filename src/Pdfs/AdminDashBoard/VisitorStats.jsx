import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";

import VisitorCount from "../../Components/VisitorCount";
import axios from "axios";

const VisitorStats = () => {
  const [stats, setStats] = useState([]);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;

      // Step 1: Track unique visit
      axios
        .post("http://localhost:8080/api/ijmsabc/visitors/visit")
        .then(() => {
          // ✅ Wait briefly to ensure backend has saved the new visit
          setTimeout(() => {
            // Step 2: Fetch updated stats after visit is stored
            axios
              .get("http://localhost:8080/api/ijmsabc/visitors/stats")
              .then((res) => {
                setStats(res.data || []);
              })
              .catch((err) =>
                console.error("Error fetching visitor stats:", err)
              );
          }, 300); // small delay for DB commit
        })
        .catch((err) => console.error("Error tracking visit:", err));
    }
  }, []);

  // ✅ Step 3: Calculate total visitors
  const totalVisitors = Array.isArray(stats)
    ? stats.reduce((sum, item) => {
        const value =
          typeof item.count === "number"
            ? item.count
            : parseInt(item.count || 0, 10);
        return sum + value;
      }, 0)
    : 0;

  // ✅ Step 4: Get today's visitors (last record’s count)
  const todaysVisitors =
    stats.length > 0
      ? parseInt(stats[stats.length - 1].count || 0, 10)
      : 0;

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="mb-4 text-center">📊 Visitor Statistics</h1>

      {/* Display total & today's visitors side by side */}
      <Row className="mb-4 justify-content-center">
       
        <Col xs={12} md={6} lg={4} className="mb-3">
          <VisitorCount count={todaysVisitors} title="Today's Visitors" color="#198754" />
        </Col>
        

         <Col xs={12} md={6} lg={4} className="mb-3">
          <VisitorCount count={totalVisitors} title="Total Visitors" color="#0d6efd" />
        </Col>
      </Row>

      {/* Chart visualization */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#0d6efd" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorStats;
