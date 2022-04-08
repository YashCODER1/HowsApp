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

    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_tag="<h4>"+name+"<img class='user_tick src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
document.getElementById("output").innerHTML=name_tag+message_tag+like_button+span_tag;
//End code
      } });  }); }
getData();
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

          });
          document.getElementById("msg").value="";

    }
    function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
function updateLike(message_id)
{
      console.log("Clicked On like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function decreaseLike(message_id)
{
      console.log("Clicked On like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      decreased_likes=Number(likes)-1;
      console.log(decreased_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}