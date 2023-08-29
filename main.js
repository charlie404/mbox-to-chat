import "./style.css";

const myEmail = "myemail@gmail.com"; // replace this email with yours

fetch("/data/mbox.json")
  .then((response) => response.json())
  .then((data) => {
    displayChat(data);
  });

function displayChat(conversation) {
  let chatHTML = "";

  conversation.forEach((entry) => {
    const fromEmail = entry.headers.from.match(/<(.+)>/)[1];
    const alignment = fromEmail === myEmail ? "right" : "left";
    chatHTML += `<div class="${alignment}"><strong>${entry.headers.from}:</strong> ${entry.html}</div>`;
  });

  document.body.innerHTML = chatHTML;
}
