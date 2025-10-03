// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import React, { useEffect, useState } from "react";

// import VisitorCount from "../../Components/VisitorCount";
// import axios from "axios";

// const VisitorStats = () => {
//   const [stats, setStats] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);

//   useEffect(() => {
//     // const fetchStats = async () => {
//     //   try {
//     //     // Record visit (only once per user per day using localStorage)
//     //     const today = new Date().toISOString().split("T")[0]; // yyyy-MM-dd
//     //     const visitedKey = `visited_${today}`;

//     //     if (!localStorage.getItem(visitedKey)) {
//     //       await axios.post("http://localhost:8080/api/ijmsabc/visitors/visit");
//     //       localStorage.setItem(visitedKey, "true");
//     //     }

//     //     // Fetch stats from backend
//     //     const res = await axios.get("http://localhost:8080/api/ijmsabc/visitors/stats");

//     //     const statsData = res.data || [];
//     //     setStats(statsData);

//     //     // ✅ Calculate total visitors across all days
//     //     const total = statsData.reduce((sum, item) => sum + (item.count || 0), 0);
//     //     setTotalCount(total);

//     //   } catch (err) {
//     //     console.error("Error fetching visitor stats:", err);
//     //   }
//     // };

//     // fetchStats();

//     const fetchStats = async () => {
//   try {
//     const today = new Date().toISOString().split("T")[0];
//     const visitedKey = `visited_${today}`;

//     if (!localStorage.getItem(visitedKey)) {
//       await axios.post("http://localhost:8080/api/ijmsabc/visitors/visit");
//       localStorage.setItem(visitedKey, "true");
//     }

//     const res = await axios.get("http://localhost:8080/api/ijmsabc/visitors/stats");

//     if (res.data && Array.isArray(res.data)) {
//       setStats(res.data);

//       // ✅ Total count
//       const total = res.data.reduce((sum, item) => sum + (item.count || 0), 0);
//       setTotalCount(total);
//     } else {
//       console.warn("Stats response is not an array:", res.data);
//       setStats([]);
//       setTotalCount(0);
//     }

//   } catch (err) {
//     console.error("Error fetching visitor stats:", err.response?.data || err.message);
//     setStats([]);
//     setTotalCount(0);
//   }
// };



//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>📊 Visitor Statistics</h1>

//       {/* ✅ Display total count via props */}
//       <VisitorCount count={totalCount} />

//       {/* Chart */}
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={stats}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis allowDecimals={false} />
//           <Tooltip />
//           <Line type="monotone" dataKey="count" stroke="#8884d8" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default VisitorStats;




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

const VisitorStats = () => {
  const [stats, setStats] = useState([]);
  const hasTracked = useRef(false); // ✅ prevents duplicate POST in React Strict Mode

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;

      // Track visit only once
      axios
        .post("http://localhost:8080/api/ijmsabc/visitors/visit")
        .catch(console.error);

      // Fetch stats
      axios
        .get("http://localhost:8080/api/ijmsabc/visitors/stats")
        .then((res) => setStats(res.data))
        .catch(console.error);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Visitor Statistics</h1>

      {/* Show today's visitor count */}
      {stats.length > 0 && (
        <h2>
          Today's Visitors: {stats[stats.length - 1].count}
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // VisitorStats.jsx

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

// import VisitorCount from "../../Components/VisitorCount";
// import axios from "axios";

// // import VisitorCount from "./VisitorCount"; // ✅ import the new component



// const VisitorStats = () => {
//   const [stats, setStats] = useState([]);
//   const [todayCount, setTodayCount] = useState(0);

//   // Track visit on page load
//   useEffect(() => {
//     const trackAndFetch = async () => {
//       try {
//         // Check if user already visited today
//         const today = new Date().toISOString().split("T")[0]; // yyyy-MM-dd
//         const visitedKey = `visited_${today}`;

//         if (!localStorage.getItem(visitedKey)) {
//           // Record visit only if not already visited today
//           await axios.post("http://localhost:8080/api/ijmsabc/visitors/visit");
//           localStorage.setItem(visitedKey, "true");
//         }

//         // Fetch stats
//         const res = await axios.get("http://localhost:8080/api/ijmsabc/visitors/stats");

//         // Format dates
//         const formatted = res.data.map((item) => ({
//           ...item,
//           date: item.date,
//         }));

//         setStats(formatted);

//         // Set today's count
//         if (formatted.length > 0) {
//           setTodayCount(formatted[formatted.length - 1].count);
//         }
//       } catch (err) {
//         console.error("Error fetching visitor stats:", err.response || err.message);
//       }
//     };

//     trackAndFetch();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>📊 Visitor Statistics</h1>

//       {/* ✅ Pass count as prop */}
//       <VisitorCount count={todayCount} />

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
