const ShowMessage = (
  message,
  Color = "red",
  Class = "alert-danger",
  MoveTo
) => {
  var H1 = document.createElement("h1");
  H1.setAttribute("id", "message");
  H1.setAttribute("class", "alert " + Class);
  H1.innerText = message;
  H1.style.textAlign = "center";
  H1.style.color = Color;
  setTimeout(() => {
    const Message = document.querySelector("#message");
    Message.remove();
    if (MoveTo == "MoveToShoppingCart") {
      window.location.assign("../ShoppingCart/ShoppingCart.html");
    } else if (MoveTo == "MoveToSignUp") {
      window.location.assign("../SignUp/SignUp.html");
    }
  }, 3000);
  document
    .getElementsByTagName("body")[0]
    .insertAdjacentElement("beforebegin", H1);
};
