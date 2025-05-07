var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

const productListHtml = document.querySelector("#product");
const productListHtml2 = document.querySelector("#products");
const productListHtml3 = document.querySelector("#product_rated");
const productListHtml4 = document.querySelector("#blogrow");
const productListHtml5 = document.querySelector("#shoprow");



const detailList = document.querySelector("#productInfo");

const categoriesListHtml = document.querySelector("#category");
const newsListHtml = document.querySelector("#newsrow");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});
const dumyInstantceAxios = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 5000,
});

const getApiData = async (url) => {
  const res = await axiosInstance.get(url);
  return res.data;
};

const LoginApi = async (url, payload) => {
  const res = await dumyInstantceAxios.post(url, payload);
  return res.data;
};
getApiData("categories").then((data) => {
  data?.forEach((item) => {
    let renderCard = `<div class="col-xl-4">
                        <div class="cards">
                            <div class="image">
                                <img src="${item.image}" alt="">
                                <div class="text">
                                    <h1>${item.text}</h1>
                                    <p>${item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
    categoriesListHtml.innerHTML += renderCard;
  });
});
getApiData("news").then((data) => {
  data?.forEach((item) => {
    let renderCard = `
    <div class="col-xl-4">
            <div class="cards">
                <div class="image">
                    <img src="${item.image}" alt="">
                </div>
                <div class="text">
                    <div class="category">
                        <h1>${item.text}</h1>
                    </div>
                    <h2>${item.desc}</h2>
                </div>
            </div>
        </div>`;
    newsListHtml.innerHTML += renderCard;
  });
});

getApiData("products").then((data) => {
  let renderdata = data.slice(0, 4);
  renderdata?.forEach((item) => {
    let renderCard = `  <div class="col-xl-3">
            <div class="cards" >
                <a href="/home-page/public/product.html?id=${item.id}" class="image">
                <img src="${item.image}" alt="">
            </a>
            <div class="text">
                <h1>${item.title}</h1>
                <div class="price">
                    <h2>$${item.price}</h2>
                    <h3>$49.99</h3>
                    <button id="butn" data-id="${item.id}"> add </button>
                </div>
            </div>
            </div>
            
        </div>`;
    productListHtml.innerHTML += renderCard;
    const btnId = document.querySelectorAll("#butn");
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedİd = parseInt(e.target.getAttribute("data-id"));

        axiosInstance.get(`products?id=${clickedİd}`).then((res) => {
          console.log(res?.data[0]);
        });

        // btnId.forEach((btn) => {
        //   btn.addEventListener("click", (e) => {
        //     const button = e.target;
        //     const card = button.closest(".cards");
        //     const clonedCard = card.cloneNode(true);
        //     clonedCard.querySelector("button").remove();
        //     // document.getElementById("board").appendChild(card);
        //   });
        // });
      });
    });
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const button = e.target;
        const card = button.closest(".cards");
        const clonedCard = card.cloneNode(true);
        clonedCard.querySelector("button").remove();
        document.getElementById("shopBoard").appendChild(clonedCard);
      });
    });
  });
});
getApiData("products").then((data) => {
  let renderdata = [0, 4, 5, 6, 7, 8, 9, 1].map((i) => data[i]).filter(Boolean);
  renderdata?.forEach((item) => {
    let renderCard = `  <div class="col-xl-3">
            <div class="cards" >
                <a href="/home-page/public/product.html?id=${item.id}" class="image">
                <img src="${item.image}" alt="">
            </a>
            <div class="text">
                <h1>${item.title}</h1>
                <div class="price">
                    <h2>$${item.price}</h2>
                    <h3>$49.99</h3>
                    <button id="butns" data-id="${item.id}"> add </button>
                </div>
            </div>
            </div>
            
        </div>`;
    productListHtml2.innerHTML += renderCard;
    const btnId = document.querySelectorAll("#butns");
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedİd = parseInt(e.target.getAttribute("data-id"));

        axiosInstance.get(`products?id=${clickedİd}`).then((res) => {
          console.log(res?.data[0]);
        });
      });
    });
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const button = e.target;
        const card = button.closest(".cards");
        const clonedCard = card.cloneNode(true);
        clonedCard.querySelector("button").remove();
        document.getElementById("shopBoard").appendChild(clonedCard);
      });
    });
  });
});
getApiData("products").then((data) => {
  let renderdata = [0, 4, 5, 6, 7, 8].map((i) => data[i]).filter(Boolean);
  renderdata?.forEach((item) => {
    let renderCard = `  <div class="col-xl-4">
            <div class="cards" >
                <a href="/home-page/public/product.html?id=${item.id}" class="image">
                <img src="${item.image}" alt="">
            </a>
            <div class="text">
                <h1>${item.title}</h1>
                <div class="price">
                    <h2>$${item.price}</h2>
                    <h3>$49.99</h3>
                    <button id="butnd" data-id="${item.id}"> add </button>
                </div>
            </div>
            </div>
            
        </div>`;
    productListHtml3.innerHTML += renderCard;
    const btnId = document.querySelectorAll("#butnd");
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedİd = parseInt(e.target.getAttribute("data-id"));

        axiosInstance.get(`products?id=${clickedİd}`).then((res) => {
          console.log(res?.data[0]);
        });
      });
    });
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const button = e.target;
        const card = button.closest(".cards");
        const clonedCard = card.cloneNode(true);
        clonedCard.querySelector("button").remove();

        document.getElementById("shopBoard").appendChild(clonedCard);
      });
    });
  });
});
getApiData("products").then((data) => {
  let renderdata = [0, 4, 5, 6, 7, 8].map((i) => data[i]).filter(Boolean);
  renderdata?.forEach((item) => {
    let renderCard = `  <div class="col-xl-9">
            <div class="cards" >
                <a href="/home-page/public/product.html?id=${item.id}" class="image">
                <img src="${item.image}" alt="">
            </a>
            <div class="text">
                <h1>${item.title}</h1>
                <div class="price">
                    <h2>$${item.price}</h2>
                    <h3>$49.99</h3>
                    <button id="butnd" data-id="${item.id}"> add </button>
                </div>
            </div>
            </div>
            
        </div>`;
    productListHtml4.innerHTML += renderCard;
    const btnId = document.querySelectorAll("#butnd");
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedİd = parseInt(e.target.getAttribute("data-id"));

        axiosInstance.get(`products?id=${clickedİd}`).then((res) => {
          console.log(res?.data[0]);
        });
      });
    });
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const button = e.target;
        const card = button.closest(".cards");
        const clonedCard = card.cloneNode(true);
        clonedCard.querySelector("button").remove();

        document.getElementById("shopBoard").appendChild(clonedCard);
      });
    });
  });
});

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const detail = document.getElementById("productInfo");

if (productId) {
  fetch(`http://localhost:3000/products/${productId}`)
    .then((res) => res.json())
    .then((item) => {
      detail.innerHTML = `  
          <div class="col-xl-6">
            <div class="product-detail">
                        <div class="image">
                            <img src="${item.image}" alt="">
                        </div>
            </div>
          </div>
                    <div class="col-xl-6">
                        <div class="left_info">
                            <h1>${item.name}</h1>
                            <h2>${item.title}</h2>
                            <div class="price">
                                <h3>${item.price}</h3>
                                <button id="butnl" data-id="${item.id}"> add </button>
                            </div>
                            <div class="addToCard"></div>
                                                

                        </div>
                      </div>
        
                    `;
                    const btnId = document.querySelectorAll("#butnl");
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedİd = parseInt(e.target.getAttribute("data-id"));

        axiosInstance.get(`products?id=${clickedİd}`).then((res) => {
          console.log(res?.data[0]);
        });
      });
    });
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const button = e.target;
        const card = button.closest(".cards");
        const clonedCard = card.cloneNode(true);
        clonedCard.querySelector("button").remove();
        document.getElementById("shopBoard").appendChild(clonedCard);
      });
    });
                    
    });
} else {
  // detail.innerHTML = "<p>Məhsul tapılmadı.</p>";
}

getApiData("products").then((renderdata) => {
  // let renderdata = data.slice(0, 10);
  renderdata?.forEach((item) => {
    let renderCard = `  <div class="col-xl-3">
            <div class="cards" >
                <a href="/home-page/public/product.html?id=${item.id}" class="image">
                <img src="${item.image}" alt="">
            </a>
            <div class="text">
                <h1>${item.title}</h1>
                <div class="price">
                    <h2>$${item.price}</h2>
                    <h3>$49.99</h3>
                    <button id="butn" data-id="${item.id}"> add </button>
                </div>
            </div>
            </div>
            
        </div>`;
    productListHtml5.innerHTML += renderCard;
    const btnId = document.querySelectorAll("#butn");
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedİd = parseInt(e.target.getAttribute("data-id"));

        axiosInstance.get(`products?id=${clickedİd}`).then((res) => {
          console.log(res?.data[0]);
        });
      });
    });
    btnId.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const button = e.target;
        const card = button.closest(".cards");
        const clonedCard = card.cloneNode(true);
        clonedCard.querySelector("button").remove();
        document.getElementById("shopBoard").appendChild(clonedCard);
      });
    });
  });
});

const shop = document.querySelector("#shop");
const shopBoard = document.querySelector("#shopBoard");
const closeBtnBasket = document.querySelector("#closeBtnBasket");
shop.addEventListener("click", () => {
  shopBoard.style.display = "flex";
});
closeBtnBasket.addEventListener("click", () => {
  shopBoard.style.display = "none";
});

// Register or Login
const userRegister = document.querySelector("#register");
const registerDiv = document.querySelector("#registerDiv");
const eyeOff = document.querySelector(".ri-eye-off-line");
const eyeOn = document.querySelector(".ri-eye-line");
const Password = document.querySelector("#password");
const eyeBtn = document.querySelector(".openpsw");
const closeBtn = document.querySelector("#closeBtn");

userRegister.addEventListener("click", () => {
  registerDiv.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  registerDiv.style.display = "none";
});

eyeBtn.addEventListener("click", () => {
  // eyeOn.style.display = "flex";
  // eyeOff.style.display = "none"
  if (Password.type == "text") {
    Password.type = "password";
    eyeOff.style.display = "flex";
    eyeOn.style.display = "none";
  } else {
    Password.type = "text";
    eyeOn.style.display = "flex";
    eyeOff.style.display = "none";
  }
});
// eyeBtn.addEventListener('click',()=>{
//   eyeOn.style.display = "none";
//   eyeOff.style.display = "flex"
//   password.type = "text"
// })

// Product Info

// btnId.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const button = e.target;
//     const card = button.closest(".cards");
//     const clonedCard = card.cloneNode(true);
//     clonedCard.querySelector("button").remove();
//     // document.getElementById("board").appendChild(card);
//   });
// });

const LoginForm = document.querySelector("#login_form");
const UserNameInput = document.querySelector("#username");
const PasswordInput = document.querySelector("#password");

LoginForm &&
  LoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
      username: UserNameInput.value,
      password: PasswordInput.value,
    };
    LoginApi("auth/login", payload).then((data) => {
      sessionStorage.setItem("token", data.accessToken);
      const { username, email, image } = data;

      const StoreData = {
        name: username,
        email: email,
        image: image,
      };

      localStorage.setItem("user", JSON.stringify(StoreData));
    });
    LoginApi("auth/login", payload).then((data) => {
      console.log(data);
      if (200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // else {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //     footer: '<a href="#">Why do I have this issue?</a>'
      //   });
      // }
    });
    UserNameInput.value = "";
    PasswordInput.value = "";
  });
