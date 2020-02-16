const Users = JSON.parse(localStorage.getItem("Users")) || [];
const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const Form = document.querySelector("#MyForm");
Form.addEventListener("submit", e => {
  e.preventDefault();
  if (Users.length == 0) {
    ShowMessage("You Are Not Allowed For This Action");
    e.target.reset();
  } else {
    const UserIndex = Users.findIndex(User => User.email == Email.value.trim());
    if (UserIndex < 0) {
      ShowMessage("You Are Not Allowed For This Action");
      e.target.reset();
    } else {
      const User = Users[UserIndex];
      User.password = Password.value.trim();
      const Part1 = Users.slice(0, UserIndex);
      Part1.push(User);
      const NewUsersArray = Part1.concat(
        Users.slice(UserIndex + 1, Users.length)
      );
      e.target.reset();
      localStorage.setItem("Users", JSON.stringify(NewUsersArray));
      localStorage.setItem("LoginUser", JSON.stringify(User));
      window.location.assign("../ShoppingCart/ShoppingCart.html");
    }
  }
});
