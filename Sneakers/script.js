
  
  const cartImage = document.querySelector('.cart');
  const cartRectangle1 = document.querySelector('.cart-box');
// Event listener for the cart image to toggle the visibility of the rectangle
cartImage.addEventListener("click", () => {
  // Toggle the visibility of the cart rectangle
  if (cartRectangle1.style.display === "block") {
    cartRectangle1.style.display = "none";
  } else {
    cartRectangle1.style.display = "block";
    updateCartContent(); // Update cart content when cart is opened
  }
});


const carousel = document.getElementById('imageCarousel');
const thumbnails = document.querySelectorAll('.thumbnail');
const white1=document.querySelectorAll(".white-out1")
let currentIndex = 0;

// Change Image by thumbnail
function changeImage(index) {
    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateThumbnailSelection();
    updateborder()
}

// Change Image by Buttons

function changeImageBy(delta) {
    currentIndex += delta;
    if (currentIndex < 0) {
        currentIndex = thumbnails.length - 1;
    } else if (currentIndex >= thumbnails.length) {
        currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateThumbnailSelection();
    updateborder();
}

// Select Thumbnail
function updateThumbnailSelection() {
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentIndex) {
            thumbnail.classList.add('selected');
        } else {
            thumbnail.classList.remove('selected');
        }
    });
}
// Select Border
function updateborder(){
  white1.forEach((white,index)=>{
    if(index === currentIndex){
        white.classList.add('select');
    } else{
        white.classList.remove('select');
    }
  });
}

    // Ham toggle
function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const overlay = document.getElementById('overlay');
  
    if (menuContent.classList.contains('show')) {
      menuContent.classList.remove('show');
      overlay.style.display = 'none';
    } else {
      menuContent.classList.add('show');
      overlay.style.display = 'block';
    }
  }
    

// Add to Cart 
 
const numElement = document.querySelector(".num");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const addToCartButton = document.querySelector(".addtocart");
const cartCountElement = document.querySelector(".cart-count");
const cartContentElement = document.querySelector(".cartinside");



// Initial value
var count = 0;
var countindex=0;

// Function to update the displayed value
function updateValue() {
  numElement.textContent = count.toString();
}

// Event listener for the minus button
minusButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateValue();
  }
});

// Event listener for the plus button
plusButton.addEventListener("click", () => {
  count++;
  updateValue();
});

// Event listener for the "Add to Cart" button
addToCartButton.addEventListener("click", () => {

  
  if (count === 0) {
    cartCountElement.style.display = "none"; // Hide cart-count when count is zero
  } else {
    cartCountElement.style.display = "block"; // Show cart-count for non-zero count
  }
  cartCountElement.textContent = (parseInt(cartCountElement.textContent) + count).toString();
  
  countindex=parseInt(cartCountElement.textContent, 10);
  count = 0;
  updateValue();
});

// Initial display
updateValue();
   


const cartRectangle = document.getElementById("cartRectangle");



// Cart Contents

// Function to update the cart content
function updateCartContent() {
  if (countindex === 0) {           // Show Empty Cart
    cartContentElement.innerHTML = `
    <div class="emptytext">
      <p>Your Cart is empty</p>
    </div>
     `;
  } else {                                  // Show products in cart
    
    const itemPrice = 125; 
    const totalAmount = countindex * itemPrice;
    localStorage.setItem('countindex', countindex);   //Stored to get the count in checkout
    cartContentElement.innerHTML = `
      <div class="cart-item">
        <div class="item-img">
          
        </div>
        <div class="item-text">  
          <p>Fall limited Edition Sneakers $${itemPrice}.00 x ${countindex} <span class="item-price">$${totalAmount}.00</span></p>
        </div>
        <button class="item-delete" onclick="resetCount()">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="#C3CAD9"/>
        <mask id="mask0_0_81" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="16">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_0_81)">
        </g>
      </svg>
        </button>
      </div>
      <a href="checkout.html" class="checkout-button">
      Checkout
      </a>
    `;
    
  }
}

// Delete Cart
function resetCount() {
  countindex = 0;
  cartCountElement.textContent = (parseInt(0)).toString();
  cartCountElement.style.display = "none";
  updateValue();
}





// Function to open the modal
function openModal() {

    if (window.innerWidth < 550) {
        return; // Disable Modal
      }
    else{          
    var modal = document.getElementById("myCustomModal");
    modal.style.display = "block";
    showCustomSlide(slideIndex);
    }
  }
  
  // Function to close the Modal
  function closeCustomModal() {
    var modal = document.getElementById("myCustomModal");
    modal.style.display = "none";
  }
  
  var slideIndex = 1;
  
    
  // Function to show the current slide in the custom modal carousel
  function showCustomSlide(n) {
    var carouselImages = document.getElementById("customImageCarousel").getElementsByTagName("img");
    var thumbnails = document.getElementsByClassName("custom-thumbnail");
    var whiteselect = document.getElementsByClassName("white-out");
    
    slideIndex = (n < 1) ? carouselImages.length : (n > carouselImages.length) ? 1 : n;
  
    for (var i = 0; i < carouselImages.length; i++) {
      carouselImages[i].classList.remove("active-slide"); // Hide all images
      thumbnails[i].classList.remove("selected");
      whiteselect[i].classList.remove("selected");
    }
  
    carouselImages[slideIndex - 1].classList.add("active-slide"); // Display the active slide
    thumbnails[slideIndex - 1].classList.add("selected");
    whiteselect[slideIndex - 1].classList.add("selected");
  }
  
  function changeCustomSlide(n) {
    showCustomSlide(n);
  }
  function changeCustomModalImage(index) {
    showCustomSlide(slideIndex += index);
  }

  
 

