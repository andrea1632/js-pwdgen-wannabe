let username = prompt (`inserisci il tuo username`);
let lastName = prompt (`inserisci il tuo cognome`);
let color = prompt (`inserisci il tuo colore preferito`);
psw = username + lastName + color;
let risposta = (`la tua password è: ${psw}`);
document.getElementById("element1").innerHTML = risposta;