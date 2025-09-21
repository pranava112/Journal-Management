import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React, { useEffect, useState } from "react";

import axios from "axios";

const VisitorStats = () => {
  const [stats, setStats] = useState([]);

  // Track visit on page load
  useEffect(() => {
    // /api/ijmsabc/visitors
    axios.post("http://localhost:8080/api/ijmsabc/visitors/visit").catch(console.error);

    // Fetch stats
    axios.get("http://localhost:8080/api/ijmsabc/visitors/stats").then((res) => {
      setStats(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Visitor Statistics</h1>

      {/* Show today's visitor count */}
      {stats.length > 0 && (
        <h2>
          Today's Visitors:{" "}
          {stats[stats.length - 1].count}
        </h2>
      )}

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorStats;



// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import React, { useEffect, useState } from "react";

// import axios from "axios";

// const VisitorStats = () => {
//   const [stats, setStats] = useState([]);

//   // Track visit on page load
//   useEffect(() => {
//     const trackAndFetch = async () => {
//       try {
//         // Record visit
//         await axios.post("http://localhost:8080/api/ijmsabc/visitors/visit");

//         // Fetch stats
//         const res = await axios.get("http://localhost:8080/api/ijmsabc/visitors/stats");

//         // Ensure date is string (for chart)
//         const formatted = res.data.map((item) => ({
//           ...item,
//           date: item.date, // backend should return ISO string "yyyy-MM-dd"
//         }));

//         setStats(formatted);
//       } catch (err) {
//         console.error("Error fetching visitor stats:", err.response || err.message);
//       }
//     };

//     trackAndFetch();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>📊 Visitor Statistics</h1>

//       {/* Today's visitor count */}
//       {stats.length > 0 && <h2>Today's Visitors: {stats[stats.length - 1].count}</h2>}

//       {/* Bar Chart */}
//       <ResponsiveContainer width="100%" height={400}>
//         <BarChart data={stats} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis allowDecimals={false} />
//           <Tooltip />
//           <Bar dataKey="count" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default VisitorStats;
