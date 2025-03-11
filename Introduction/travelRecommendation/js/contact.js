let db;
let btn = document.getElementById("confitmBtn");
btn.addEventListener( "click", send)



function send(event) {
    event.preventDefault();
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
    alert("Your message has been send");
}


