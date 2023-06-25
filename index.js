console.log("Added to page successfully");

// Firebase SDK
// Import the functions WE need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// These are Firebase products that we use
// import { getAuth } from "h  ttps://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import {
  getDatabase,
  onValue,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwa0dRgxVXAQc-d1SsHutiTjhSanLNSJ4",
  authDomain: "htmlcssjs-with-firebase.firebaseapp.com",
  databaseURL:
    "https://htmlcssjs-with-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "htmlcssjs-with-firebase",
  storageBucket: "htmlcssjs-with-firebase.appspot.com",
  messagingSenderId: "174733276286",
  appId: "1:174733276286:web:3f10a15db93282405d142f",
  measurementId: "G-1SSPVMEBX2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getData
const db = getDatabase();
const distanceRef = ref(db, "/blogs" + blogId + "/distance");
onValue(distanceRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  updateDistance(postElement, data);
});

function saveBlog(name, email, message) {
  let newBlog = blogsRef.push();
  newBlogRef.set({
    name: name,
    email: email,
    message: message,
  });
}

// write data function initializing
function writeUserData(userId, name, email, message) {
  const db = getDatabase();
  // const reference = ref(db, "blogs/", +userId);
  set(ref(db, "blogs/" + blogId), {
    name: name,
    email: email,
    message: message,
  });
}

// write data fun calling
writeUserData("saif", "Saif!", "saifali2906@gmail.com", "That's cool");
