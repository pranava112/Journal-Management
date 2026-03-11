// import axios from "axios";

// const Api = axios.create({
  
//   baseURL:"https://api.ijmsabc.org/wp-json/wp/v2/posts",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });




//  export default Api;

import axios from "axios";

const Api = axios.create({
  baseURL: "https://backendapi.ijmsabc.org/wp-json",
});

export default Api;

 // baseURL: "https://api.ijmsabc.org/api/ijmsabc", // ✅ Ensure it matches the Spring Boot backend
  

 // curl http://160.250.205.87:8080/api/ijmsabc/pdfs

// import axios from "axios";

// const Api = axios.create({
//   baseURL: "https://localhost:8080/api/ijmsabc", // ✅ Ensure it matches the Spring Boot backend
//   // headers: {
//   //   "Content-Type": "application/json",
//   // },
// });

//  export default Api;
