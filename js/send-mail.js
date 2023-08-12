const senderName = document.getElementById("sender-name");
const sendBody = document.getElementById("send-body");

function sendMail() {
  window.open(
    `mailto:imfaizanahmed6@gmail.com?subject=${senderName.value}-from-portfolio&body=${sendBody.value}`
  );
}
