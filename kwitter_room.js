const firebaseConfig = {
    apiKey: "AIzaSyDtPjEv-HQ2aHLrXxPuRntUcUua6iTWU-Q",
    authDomain: "lets-chat-e3ae9.firebaseapp.com",
    projectId: "lets-chat-e3ae9",
    storageBucket: "lets-chat-e3ae9.appspot.com",
    messagingSenderId: "299177673362",
    appId: "1:299177673362:web:469ab9764d72943b03dc4b",
    measurementId: "G-6JHBDD9WHG"
  }; 
  // Initialize Firebase
const app = initializeApp(firebaseConfig);





function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "kwitter_room.html";
}