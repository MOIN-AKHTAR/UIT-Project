// Getting All Users From LocalStorage
const Data = JSON.parse(localStorage.getItem("Users")) || [];
// Tragetting LoginForm For Adding EventListener
const Form = document.querySelector("#MyForm");
// Adding EventListener
Form.addEventListener("submit", e => {
  // Preventing Default Behavior
  e.preventDefault();
  // Getting Email & Password From Input Controls
  const Email = document.querySelector("#Email").value;
  const Password = document.querySelector("#Password").value;
  // Compairing Email & Password To Grant Permission
  const UserFind = Data.find(Item => Item.email == Email);
  if (!UserFind) {
    ShowMessage("Invalid Email Or Password");
  } else {
    if (UserFind.password == Password) {
      const Obj = {
        firstName: UserFind.firstName,
        lastName: UserFind.lastName,
        email: UserFind.email,
        password: UserFind.password,
        Cart: []
      };
      localStorage.setItem("LoginUser", JSON.stringify(Obj));
      e.target.reset();
      window.location.assign("../ShoppingCart/ShoppingCart.html");
    } else {
      ShowMessage("Invalid Email Or Password");
    }
  }
});
