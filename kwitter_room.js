var firebaseConfig = {
      apiKey: "AIzaSyCl8kRPdNZRx9mEA7ZX1lBAJCNBzakhIcs",
      authDomain: "kwitter-8d6f2.firebaseapp.com",
      databaseURL: "https://kwitter-8d6f2-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d6f2",
      storageBucket: "kwitter-8d6f2.appspot.com",
      messagingSenderId: "601595000861",
      appId: "1:601595000861:web:ce89efe4382affa7492ef4",
      measurementId: "G-DT6ES3TG52"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
    
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=user_name;
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
;
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      crow="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      ;document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}