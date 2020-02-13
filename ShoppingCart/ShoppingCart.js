const Arr = [
  {
    id: 1,
    src: "https://static-01.daraz.pk/p/dd4070e00f90cecac42b26180d5e753e.jpg",
    description:
      "HUAWEI Y6s 64GB ROM + 3GB RAM - 6.09” HD+ Dewdrop FullView Display 13MP Rear Camera",
    price: 20899,
    category: "mobile"
  },
  {
    id: 2,
    src: "https://static-01.daraz.pk/p/63e1d5a5a63a860c2d8e84fdf2c56c93.jpg",
    description:
      "Infinix S5 lite - 6.6“ HD+ Infinity-O Display - Fingerprint Sensor",
    price: 20999,
    category: "mobile"
  },
  {
    id: 3,
    src: "https://static-01.daraz.pk/p/6e8c2acd76b5b576dbfb71e4f2e168a3.jpg",
    description:
      "Realme 5 - 6.5   FHD Display - 3GB RAM - 64GB ROM - Fingerprint Sensor",
    price: 23999,
    category: "mobile"
  },
  {
    id: 4,
    src:
      "https://static-01.daraz.pk/p/mdc/b20fb97784e8715a152da49449da5c06.jpg",
    description:
      "HUAWEI Y9 Prime(2019) - 6.59  UHD Display - 4GB RAM - 64GB ROM - Auto Pop-up Camera - Fingerprint Sensor",
    price: 31999,
    category: "mobile"
  },
  {
    id: 5,
    src: "https://static-01.daraz.pk/p/f1518fa75f046abe1d2125906c805ab6.jpg",
    description:
      "Vgo Tel SMART 7 5.9 Inch 3GB RAM 32 GB ROM Dual Sim 1 Year Warranty",
    price: 11749,
    category: "mobile"
  },
  {
    id: 6,
    src: "https://static-01.daraz.pk/p/fb895c6a0eff2a52172f5ba420eef66c.jpg",
    description:
      "Huawei  Y6  prime Display 6.1 Inch 2GB RAM 32 GB ROM 13 MP CAMERA 8 MP FRONT 2019",
    price: 18880,
    category: "mobile"
  },
  {
    id: 7,
    src:
      "https://static-01.daraz.pk/p/mdc/fa530c40f2455e19e88bfa84df2aefda.jpg",
    description:
      "I-life Zed Note Prime - 11.6  FHD Display - Intel Celeron - 2GB 32GB eMMC - Convertible 2-in-1 - Windows 10 Home",
    price: 32500,
    category: "labtop"
  },
  {
    id: 8,
    src: "https://static-01.daraz.pk/p/b5b71083fd075b221af2615fedfba490.jpg",
    description:
      "HP PROBOOK 450 G5 - 15.6   FHD Display - 8th Gen. Intel®Core™ i3-8130U - 4GB RAM - 1TB ROM -  Intel® UHD 620 - FreeDOS",
    price: 73999,
    category: "labtop"
  },
  {
    id: 9,
    src: "https://static-01.daraz.pk/p/a57391f7a4b39c9d50bacfdd73b0d093.jpg",
    description:
      "i-Life ZED Air Lite - 11.6 IPS Display - Intel Quad Core Processor - 2GB - 32GB Storage - Windows 10 Home- Gold",
    price: 27399,
    category: "labtop"
  },
  {
    id: 10,
    src: "https://static-01.daraz.pk/p/0d308038a0934b384fb86314db518ef1.jpg",
    description:
      "HP x2 210 G2 Detachable PC - 1.44 Ghz Intel Atom - 10.1  diagonal WXGA Touch Display - 4GB RAM - 64GB eMMC HD",
    price: 28000,
    category: "labtop"
  },
  {
    id: 11,
    src: "https://static-01.daraz.pk/p/4f56defd45815040c73140b72f3e7076.jpg",
    description:
      "Dell Latitude XT3 13.3 touch screen Display - Intel® Core™ i5 - 2nd generation - 4GB RAM - 250GB HDD - Windows® 10  7 (Activated) Refurbished",
    price: 18999,
    category: "labtop"
  },
  {
    id: 12,
    src: "https://static-01.daraz.pk/p/0a3a904b9b6d851de4601a508dd4d337.jpg",
    description:
      "HP EliteBook 8470p - 14 Wide HD LED - Core i5 3rd Gen - 4GB RAM - 320GB HDD - Win 7 - Refurbished Laptop",
    price: 50000,
    category: "labtop"
  }
];
const NameSpane = document.querySelector("#userName");
// Fetching Current User Who LogedIn From LocalStorage
const Obj = JSON.parse(localStorage.getItem("LoginUser"));
if (Obj) {
  NameSpane.innerHTML = Obj.firstName;
} else {
  window.location.assign("../SignUp/SignUp.html");
}
const Render = Arr => {
  const Column = document.querySelector("#row");
  // Rendering Of All Product Present In Arr Array
  for (let index = 0; index < Arr.length; index++) {
    const Div = document.createElement("div");
    Div.setAttribute("class", "elements");
    const A = document.createElement("a");
    const Img = document.createElement("img");
    const Description = document.createElement("a");
    const P = document.createElement("p");
    const Button = document.createElement("button");
    Button.setAttribute("class", "btn-block btn-warning");
    Button.style.color = "white";
    Button.style.borderRadius = "10px";
    Button.style.textAlign = "center";
    Img.src = Arr[index].src;
    Img.setAttribute("class", "c1ZEkM ");
    Description.innerText = Arr[index].description.slice(0, 60);
    P.innerText = "Rs." + Arr[index].price;
    P.style.color = "orange";
    Button.innerText = "Add To Cart";
    A.appendChild(Img);
    A.appendChild(Description);
    A.appendChild(P);
    A.appendChild(Button);
    Div.appendChild(A);
    Column.appendChild(Div);
    // End Rendering
    // Adding Event For Button Add To Cart Of Each Product
    Button.addEventListener("click", e => {
      // First Checking If User LoggedIn Then He/She Will Be Allowed To Go For Furthur Process Otherwise Go Back To SignUp Page
      const User = JSON.parse(localStorage.getItem("LoginUser"));
      if (User) {
        NameSpane.innerHTML = User.firstName;
      } else {
        window.location.assign("../SignUp/SignUp.html");
      }
      // Getting All Users Array To So That We Can Update His/Her Status
      const Users = JSON.parse(localStorage.getItem("Users"));
      // Find LogedInUser Index From Users Array
      const logedInUserIndex = Users.findIndex(U => U.email === User.email);
      // Getting Object Of User Who Is LoggedIn From Users Array Stored In Local Storage
      const Obj = Users.find(Users => Users.email === User.email);
      // Checking For The Existance Of Item Which We Are Trying To Add To User Object's Cart So That We Can Set Quantity Pefectly-
      const Index = Obj.Cart.findIndex(Item => Item.id === Arr[index].id);
      let Item = Arr.find(Item => Item.id === Arr[index].id);
      if (Index < 0) {
        // If Item Is Not Already In The User Cart Array Then This Code Will Run
        Item.quantity = 1;
        Item.total = Item.price;
        Obj.Cart.push(Item);
      } else {
        // If Item I Already In The User Cart Array Then This Code Will Run
        Item.quantity = Obj.Cart[Index].quantity + 1;
        Item.total = Item.price * Item.quantity;
        // Updating Cart Of User Who Is LogedIn
        const Part1 = Obj.Cart.slice(0, Index);
        const Part2 = Item;
        Part1.push(Part2);
        const Part3 = Obj.Cart.slice(Index + 1, Obj.Cart.length);
        const UserItemAdded = Part1.concat(Part3);
        Obj.Cart = UserItemAdded;
      }
      // Setting Users Again After Item Added To User Cart Array
      const Part1 = Users.slice(0, logedInUserIndex);
      const Part2 = Obj;
      Part1.push(Part2);
      const Part3 = Users.slice(logedInUserIndex + 1, Users.length);
      const NewUsersArray = Part1.concat(Part3);
      localStorage.setItem("LoginUser", JSON.stringify(Obj));
      localStorage.setItem("Users", JSON.stringify(NewUsersArray));
    });
  }
};
Render(Arr);
