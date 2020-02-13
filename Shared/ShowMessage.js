const ShowMessage = message => {
  var H1 = document.createElement("h1");
  H1.setAttribute("id", "message");
  H1.setAttribute("class", "alert alert-danger");
  H1.innerText = message;
  H1.style.textAlign = "center";
  H1.style.color = "red";
  setTimeout(() => {
    const Message = document.querySelector("#message");
    Message.remove();
  }, 3000);
  document
    .getElementsByTagName("body")[0]
    .insertAdjacentElement("beforebegin", H1);
};
