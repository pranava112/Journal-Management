import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8080/api/ijmsabc", // ✅ Ensure it matches the Spring Boot backend
  headers: {
    "Content-Type": "application/json",
  },
});

 export default Api;

// Optional: intercept the response to handle errors globally
// Api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error: ", error);
//     return Promise.reject(error);
//   }
// );

// export default Api;

// import axios from "axios";

// const Api = axios.create({
//   baseURL: "http://localhost:8080/api/ijmsabc", // ✅ Must match backend
// });

// export default Api;


// import axios from "axios";

// const Api = axios.create({
//   baseURL: "http://localhost:8080/api/ijmsabc", // ✅ must match backend
// });

// export default Api;
