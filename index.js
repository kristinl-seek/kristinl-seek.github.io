const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
greeting.style.fontsize = "50px";
greeting.style.color = "red";

const username = window.prompt("What's your name?", "Wonder Woman");
greeting.innerHTML = "Welcome to my website, " + username + "!";
