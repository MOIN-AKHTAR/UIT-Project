const Body = document.querySelector("body");
// Targetting The TableBody
const Tbody = document.querySelector("tbody");
// Getting All Users-
const Users = JSON.parse(localStorage.getItem("Users"));
// Fetching Current User Who LogedIn From LocalStorage
const Obj = JSON.parse(localStorage.getItem("LoginUser"));
// Checking For The Existance Of User Whether User LoggedIn Or Not
const TotalAmount = User =>
  User.Cart.reduce((Accumalator, Current) => Accumalator + Current.total, 0);
const CheckLogin = () => {
  if (Obj) {
    if (Users) {
      // Getting Index Of Currently LoggedIn Users
      const LoggedIndex = Users.findIndex(User => User.email === Obj.email);
      if (LoggedIndex < 0) {
        // If User Doesn't Exist In Users Array
        window.location.assign("../SignUp/SignUp.html");
      } else {
        Render(Users[LoggedIndex]);
        const span = document.querySelector("span");
        span.innerHTML = "RS." + TotalAmount(Users[LoggedIndex]);
      }
    }
  } else {
    window.location.assign("../SignUp/SignUp.html");
  }
};
// Update The Table Of Add To Cart
const UpdateTable = (User, index, LoggedIndex, Role) => {
  if (Role === "AddToCart") {
    User.Cart[index].quantity += 1;
  } else {
    if (User.Cart[index].quantity > 1) {
      User.Cart[index].quantity -= 1;
    }
  }
  User.Cart[index].total = User.Cart[index].price * User.Cart[index].quantity;
  const Part1 = Users.slice(0, LoggedIndex);
  const Part2 = User;
  const Part3 = Users.slice(LoggedIndex + 1, Users.length);
  Part1.push(Part2);
  const NewUsersArray = Part1.concat(Part3);
  localStorage.setItem("Users", JSON.stringify(NewUsersArray));
  const NewUsers = JSON.parse(localStorage.getItem("Users"));
  Body.innerHTML = "";
  window.location.reload(true);
  Render(NewUsers[LoggedIndex]);
};
// Delete Item From Table
const DeleteItem = Item => {
  console.log(Item);
};
// Render Cart Array Of LoggedIn User
const Render = User => {
  const Users = JSON.parse(localStorage.getItem("Users"));
  // Getting Index Of Currently LoggedIn Users
  const LoggedIndex = Users.findIndex(User => User.email === Obj.email);
  for (let index = 0; index < User.Cart.length; index++) {
    //   Rendering Start From Here
    const Tr = document.createElement("tr");
    const Brand = document.createElement("td");
    const Total = document.createElement("td");
    const Quantity = document.createElement("td");
    const Action = document.createElement("td");
    const DeleteItem = document.createElement("td");
    const Add = document.createElement("button");
    const Remove = document.createElement("button");
    const Delete = document.createElement("button");
    Add.setAttribute("class", "btn btn-primary");
    Remove.setAttribute("class", "btn btn-danger");
    Delete.setAttribute("class", "btn btn-danger");
    Add.innerHTML = "+";
    Remove.innerHTML = "-";
    Delete.innerHTML = "X";
    Remove.style.marginLeft = "5px";
    Brand.innerHTML = User.Cart[index].brand;
    Total.innerHTML = User.Cart[index].total;
    Quantity.innerHTML = User.Cart[index].quantity;
    Action.appendChild(Add);
    Action.appendChild(Remove);
    DeleteItem.appendChild(Delete);
    Tr.appendChild(Brand);
    Tr.appendChild(Total);
    Tr.appendChild(Quantity);
    Tr.appendChild(Action);
    Tr.appendChild(DeleteItem);
    Tbody.appendChild(Tr);
    // Rendering Ended
    // Add Event Listener For Buttons Such As + - and X
    Add.addEventListener("click", e => {
      UpdateTable(User, index, LoggedIndex, "AddToCart");
    });
    Remove.addEventListener("click", e => {
      UpdateTable(User, index, LoggedIndex, "RemoveToCart");
    });
    Delete.addEventListener("click", e => {
      // Making A Copy Of Cart By Deleting The INtended Item From Cart
      const Part1 = User.Cart.slice(0, index);
      const Part2 = User.Cart.slice(index + 1, User.Cart.length);
      User.Cart = Part1.concat(Part2);
      const Users = JSON.parse(localStorage.getItem("Users"));
      const P1 = Users.slice(0, LoggedIndex);
      P1.push(User);
      const NewUsersArray = P1.concat(
        Users.slice(LoggedIndex + 1, Users.length)
      );
      localStorage.setItem("Users", JSON.stringify(NewUsersArray));
      Body.innerHTML = "";
      window.location.reload(true);
      Render(NewUsersArray[LoggedIndex]);
    });
  }
};

CheckLogin();
