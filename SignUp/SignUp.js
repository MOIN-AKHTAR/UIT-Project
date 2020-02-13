// Targeting Login Button
const LoginBtn = document.querySelector("#LoginBtn");
LoginBtn.addEventListener("click", () => {
  window.location.assign("../Login/Login.html");
});
// Targeting Signup Form
const Form = document.querySelector("#MyForm");

// AddingEventListener For Signup Form
Form.addEventListener("submit", function(e) {
  // Preventing Default Behavior
  e.preventDefault();
  // Collecting Data From Local Storage If Any...
  const Data = JSON.parse(localStorage.getItem("Users")) || [];
  // Collecting Data From Signup Form
  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#Email").value.trim();
  const password = document.querySelector("#Password").value.trim();
  // Making Object To Store In Array
  const User = {
    firstName,
    lastName,
    email,
    password,
    Cart: []
  };
  // Checking For Email Already Anybody Have Or Not
  const Index = Data.findIndex(Item => Item.email == User.email);
  // If Email Which Typed Is Alraedy Any User Have Then Lower Code Will Run
  if (Index >= 0) {
    ShowMessage("This Email Is Already Taken");
  } else {
    // If Not Then This Code Will Run
    // Saving Current LogedIn Or SignedUp User
    const Obj = User;
    // Saving User Into Users Array
    Data.push(User);
    localStorage.setItem("Users", JSON.stringify(Data));
    localStorage.setItem("LoginUser", JSON.stringify(Obj));
    e.target.reset();
    window.location.assign("../ShoppingCart/ShoppingCart.html");
  }
});
