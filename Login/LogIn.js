const Data = JSON.parse(localStorage.getItem("Users")) || [];

const Form = document.querySelector("#MyForm");
Form.addEventListener("submit", e => {
  e.preventDefault();
  const Email = document.querySelector("#Email").value;
  const Password = document.querySelector("#Password").value;
  console.log(Email);
  console.log(Password);
  const Obj = Data.find(Item => Item.email == Email);
  console.log(Obj);
  if (!Obj) {
    ShowMessage("Invalid Email Or Password");
  } else {
    if (Obj.password == Password) {
      // console.log(Obj);
      // NameSpane.innerHTML = Obj.firstName;
      // console.log(Obj.firstName);
      localStorage.setItem("LoginUser", JSON.stringify(Obj));
      // Obj.login = true;
      e.target.reset();
      window.location.assign("../ShoppingCart/ShoppingCart.html");
    } else {
      ShowMessage("Invalid Email Or Password");
    }
  }
});
