const guestForm = document.getElementById("guestForm");
const messages = document.getElementById("messages");

guestForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = this.elements.name.value;
  const message = this.elements.message.value;

  // Menambahkan ucapan baru ke dalam tampilan
  const newMessage = document.createElement("div");
  newMessage.innerHTML = `
    <p><strong>${name}</strong> says:</p>
    <p>${message}</p>
    <hr>
  `;
  messages.appendChild(newMessage);

  // Reset form setelah pesan dikirim
  this.reset();
});
