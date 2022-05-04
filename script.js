const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const slides = document.getElementsByClassName("slide");
const cart = document.getElementById("cart");
const cartbtn = document.getElementById("cartbtn");
const sliderBtn = document.getElementsByClassName("sliderBtn");
const slider = document.getElementById("slides");


const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const amount = document.getElementById("amount");
const addToCart = document.getElementById("btn-add");

const thumbnail = document.getElementById("thumbnail");
const tnImgs = thumbnail.children;

const gallery = document.getElementById("gallery");
const prev = document.getElementById('prev');
const next = document.getElementById('next');
console.log(tnImgs);
Array.from(tnImgs).forEach((img) => {
  img.addEventListener("click", () => {
    Array.from(slides).forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[img.id - 1].classList.add("active");
  });
});

console.log(slides.innerHTML);
Array.from(slides).forEach((slide) => {
  slide.addEventListener("click", () => {
    let modal = gallery.cloneNode(true);
    modal.id = "modal";
    overlay.appendChild(modal);
    overlay.style.display = "flex";
    slide.classList.add("active");
    let sliderBtn = document.getElementsByClassName("sliderBtn");

  
  });
      

});

minus.addEventListener("click", () => {
  amount.innerText =
    parseFloat(amount.innerText) === 0 ? 0 : parseFloat(amount.innerText) - 1;
});
plus.addEventListener("click", () => {
  amount.innerText = parseFloat(amount.innerText) + 1;
});

addToCart.addEventListener("click", () => {
  //dodati da kada je 0 amount ne moze da se adduje u cart
  cart.innerHTML =
    `<h3>Cart</h3><div class='item'><img src='images/image-product-1-thumbnail.jpg' alt=''/><div class='details'><p>Autumn Limited Edition...</p><div class='price'>$125.00 x ` +
    parseFloat(amount.innerText) +
    ` <span>$` +
    125.0 * parseFloat(amount.innerText) +
    `.00</span></div></div><img src='images/icon-delete.svg' alt='' onclick='empty()'/></div>
    <button class='btn-primary'>Checkout</button>`;
});

function empty() {
  cart.innerHTML = `<h3>Cart</h3>
    <div class="product">Your cart is empty.</div>`;
}

//nav
openNav.addEventListener("click", () => {
  nav.classList.add("show-nav");
  openNav.classList.add("hide-icon");
  closeNav.classList.remove("hide-icon");
  overlay.style.display = "block";
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("show-nav");
  openNav.classList.remove("hide-icon");
  closeNav.classList.add("hide-icon");
  overlay.style.display = "none";
});

//mobile view slide
let currentSlide = 0;

Array.from(sliderBtn).forEach(btn => {
    btn.addEventListener('click', () =>{
        if(sliderBtn[0] === btn){
            changeSlide(currentSlide - 1);
        }
        else
        changeSlide(currentSlide + 1);
    })
    console.log(sliderBtn)
    if(sliderBtn[0] === btn){
        changeSlide(currentSlide - 1);
    }
    else
    changeSlide(currentSlide + 1);
    console.log(btn)
    console.log(sliderBtn[0])
})

/*prev.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

next.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});*/

function changeSlide(newPosition) {
  if (newPosition >= slides.length) {
    newPosition = 0;
  }
  if (newPosition < 0) {
    newPosition = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  slides[newPosition].classList.toggle("active");

  currentSlide = newPosition;
}

//cart
cartbtn.addEventListener("click", () => {
  cart.style.display = cart.style.display === "block" ? "none" : "block";
});
