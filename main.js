function sendMail(){
    // alert("hello mail");
    var name = document.getElementById('name').value;
    if(name =="") {

       alert("name is empty");
       return;
     }

    var email = document.getElementById('email').value;
    if(email =="") {alert("email is empty"); return;}

    var number = document.getElementById('number').value;
    if(number =="") {alert("number is empty"); return;}

    var message = document.getElementById('message').value;
    if(message =="") {alert("message is empty"); return;}
}
