var firebaseConfig = {
      apiKey: "AIzaSyAUUGxudNtQ_6Hi50CpdPw1vj5j88sKKiY",
      authDomain: "howsapp-34344.firebaseapp.com",
      projectId: "howsapp-34344",
      storageBucket: "howsapp-34344.appspot.com",
      messagingSenderId: "1079629821429",
      appId: "1:1079629821429:web:ebe5c35dff34de94965cbc",
      measurementId: "G-B1WMY7076G"
    };
    
    firebase.initializeApp(firebaseConfig);
function addroom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",room_name);
      window.location="howsapp_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room_name",room_name);
row="<div class='room_name' id="+Room_names+"onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="howsapp_page.html"; 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}