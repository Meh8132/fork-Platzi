const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMobileMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const iconCartMenu = document.querySelector(".navbar-shopping-cart")
const cartList = document.querySelector(".product-detail")
const cartArrow = document.querySelector("#cart-arrow")
const cardsContainer = document.querySelector(".cards-container")

navEmail.addEventListener("click", enableMenu)
iconMobileMenu.addEventListener("click", enableMobileMenu)
iconCartMenu.addEventListener("click", enableCartList)
cartArrow.addEventListener("click", enableCartList  )

function enableMenu(){
    desktopMenu.classList.toggle("inactive");
}

function enableMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    if(!cartList.classList.contains("inactive")){
        cartList.classList.toggle("inactive")
    }
}

function enableCartList(){
    cartList.classList.toggle("inactive")
    if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.toggle("inactive")
    }
}

const productList = []

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike 2",
    price: 125,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike 3",
    price: 130,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


for(product of productList){
    const productCart = `
    <div class="product-card">
    <img src=" ${product.image} " alt="">
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
    </div>
    `
    cardsContainer.innerHTML += productCart

}