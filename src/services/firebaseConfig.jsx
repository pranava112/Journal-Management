// // src/firebase.js

// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT.appspot.com",
//   messagingSenderId: "XXXXXX",
//   appId: "XXXXXX"
// };



// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// // import { initializeApp } from "firebase/app";




// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAi7WZ2T5Fwzozm1NtGP4WFGl5KjX57bQk",
//   authDomain: "ijmsabc-a5e7a.firebaseapp.com",
//   projectId: "ijmsabc-a5e7a",
//   storageBucket: "ijmsabc-a5e7a.firebasestorage.app",
//   messagingSenderId: "488070454964",
//   appId: "1:488070454964:web:3bc2480425eefdd48a01e1",
//   measurementId: "G-BC529CYLJC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // src/firebaseConfig.js

// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// // ✅ Firebase config - make sure these values match your Firebase Console
// const firebaseConfig = {
//   apiKey: "AIzaSyAi7WZ2T5Fwzozm1NtGP4WFGl5KjX57bQk",
//   authDomain: "ijmsabc-a5e7a.firebaseapp.com",
//   projectId: "ijmsabc-a5e7a",
//   storageBucket: "ijmsabc-a5e7a.appspot.com",
//   messagingSenderId: "488070454964",
//   appId: "1:488070454964:web:3bc2480425eefdd48a01e1",
//   measurementId: "G-BC529CYLJC",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export auth and analytics
// export const auth = getAuth(app);
// export const analytics = getAnalytics(app);

// export default app;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// src/firebase.js

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi7WZ2T5Fwzozm1NtGP4WFGl5KjX57bQk",
  authDomain: "ijmsabc-a5e7a.firebaseapp.com",
  projectId: "ijmsabc-a5e7a",
  storageBucket: "ijmsabc-a5e7a.appspot.com", // corrected: ".app" → ".appspot.com"
  messagingSenderId: "488070454964",
  appId: "1:488070454964:web:3bc2480425eefdd48a01e1",
  measurementId: "G-BC529CYLJC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
