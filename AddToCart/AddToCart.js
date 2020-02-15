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
  const Users = JSON.parse(localStorage.getItem("Users")) || [];
  if (Users.length > 0) {
    const LogedIn = JSON.parse(localStorage.getItem("LoginUser"));
    if (LogedIn == null) {
      const Body = document.querySelector("body");
      Body.innerHTML = "";
      ShowMessage(
        "You Are Not LoggedIn",
        "red",
        "alert-danger",
        "MoveToSignUp"
      );
    } else {
      if (Role === "AddToCart") {
        User.Cart[index].quantity += 1;
      } else {
        if (User.Cart[index].quantity > 1) {
          User.Cart[index].quantity -= 1;
        }
      }
      User.Cart[index].total =
        User.Cart[index].price * User.Cart[index].quantity;
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
    }
  } else {
    const Body = document.querySelector("body");
    Body.innerHTML = "";
    ShowMessage("You Are Not LoggedIn", "red", "alert-danger", "MoveToSignUp");
  }
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
      const Users = JSON.parse(localStorage.getItem("Users")) || [];
      if (Users.length > 0) {
        // Fetching Current User Who LogedIn From LocalStorage
        const Obj = JSON.parse(localStorage.getItem("LoginUser"));
        if (User == null) {
          const Body = document.querySelector("body");
          Body.innerHTML = "";
          ShowMessage(
            "You Are Not LoggedIn",
            "red",
            "alert-danger",
            "MoveToSignUp"
          );
        } else {
          // Making A Copy Of Cart By Deleting The INtended Item From Cart
          const Part1 = User.Cart.slice(0, index);
          const Part2 = User.Cart.slice(index + 1, User.Cart.length);
          User.Cart = Part1.concat(Part2);

          const P1 = Users.slice(0, LoggedIndex);
          P1.push(User);
          const NewUsersArray = P1.concat(
            Users.slice(LoggedIndex + 1, Users.length)
          );
          localStorage.setItem("Users", JSON.stringify(NewUsersArray));
          Body.innerHTML = "";
          window.location.reload(true);
          Render(NewUsersArray[LoggedIndex]);
        }
      } else {
        const Body = document.querySelector("body");
        Body.innerHTML = "";
        ShowMessage(
          "You Are Not LoggedIn",
          "red",
          "alert-danger",
          "MoveToSignUp"
        );
      }
    });
  }
};

// Payment Paying Method
const PaymentBtn = document.querySelector("#Payment");
PaymentBtn.addEventListener("click", e => {
  // Getting All Users-
  const Users = JSON.parse(localStorage.getItem("Users")) || [];
  if (Users.length > 0) {
    const LogedIn = JSON.parse(localStorage.getItem("LoginUser"));
    if (LogedIn == null) {
      const Body = document.querySelector("body");
      Body.innerHTML = "";
      ShowMessage(
        "You Are Not LoggedIn",
        "red",
        "alert-danger",
        "MoveToSignUp"
      );
    } else {
      // Fetching Current User Who LogedIn From LocalStorage
      const Obj = JSON.parse(localStorage.getItem("LoginUser"));
      //   Finding That LoggedIn User Exists In Users Array Or Not
      const User = Users.find(user => user.email === Obj.email);

      //   Finding The INdex Of LoggedIn User So That We Can Easily Update Users Array
      const Index = Users.findIndex(user => user.email === Obj.email);
      if (User.Cart.length > 0) {
        //   Updating Users Array And User Cart Who Is Logged In
        User.Cart = [];
        const Part1 = Users.slice(0, Index);
        const Part2 = User;
        const Part3 = Users.slice(Index + 1, Users.length);
        Part1.push(Part2);
        const NewUsersArray = Part1.concat(Part3);
        localStorage.setItem("Users", JSON.stringify(NewUsersArray));
        JSON.parse(localStorage.getItem("Users"));
        ShowMessage(
          "Paid Successfully!!!",
          "blue",
          "alert-primary",
          "MoveToShoppingCart"
        );
        Body.innerHTML = "";
      } else {
        ShowMessage("Nothig To Pay First Add Item To Cart");
      }
    }
  } else {
    const Body = document.querySelector("body");
    Body.innerHTML = "";
    ShowMessage("You Are Not LoggedIn", "red", "alert-danger", "MoveToSignUp");
  }
});
CheckLogin();
