// Card Entering

// Year
const currentYear = new Date().getFullYear();
const selectYear = document.getElementById('expirationYear');

// Populate years from the current year (2023) to 2033
for (let year = currentYear; year <= 2033; year++) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  selectYear.appendChild(option);
}

// Card Number
const cardNumberInput = document.getElementById('cardNumber');
const cardNumContainer = document.querySelector('.cardnum');

// change card number

// JavaScript to update the card Number when typed
const ctextSpan = document.querySelector('.ctext'); 

// Add an event listener to the cardNumberInput to listen for input events
cardNumberInput.addEventListener('input', function () {
  
  const cardNumberValue = this.value.replace(/\D/g, ''); // Remove all non-numeric characters
  
  // Update the ctext span with the masked card number (replacing all '#' with input digits)
  const maskedCardNumber = formatCardNumber(cardNumberValue);
  ctextSpan.textContent = maskedCardNumber;

});
    //Show White Border on Card
cardNumberInput.addEventListener('focus', function () { 
  cardNumContainer.classList.add('highlighted');
});

//Remove White Border WHen Not Selected
cardNumberInput.addEventListener('blur', function () {
  cardNumContainer.classList.remove('highlighted');
});

// Function to format the card number input
function formatCardNumber(value) {
  const visibleDigits = Math.min(16, value.length);
  const hiddenDigits = 16 - visibleDigits;
  const maskedCardNumber = value.slice(0, visibleDigits) + '#'.repeat(hiddenDigits);

  // Split the masked card number into groups of 4 digits each
  const cardGroups = maskedCardNumber.match(/.{1,4}/g);

  // If the last group has a trailing space, remove it
  if (cardGroups.length > 0 && cardGroups[cardGroups.length - 1].length === 5) {
    cardGroups[cardGroups.length - 1] = cardGroups[cardGroups.length - 1].slice(0, 4);
  }

  // Join the groups with spaces and return the formatted number
  return cardGroups.join(' ');
}



// change card holder name

    
    const cardHolderInput = document.getElementById('cardHolder');
    const cardNameDisplay = document.getElementById('cardNameDisplay');
    const cardHolderContainer = document.querySelector('.cholder'); 

// Add Border to Card Holder
    cardHolderInput.addEventListener('focus', function () {
      cardHolderContainer.classList.add('highlighted');
    });


    cardHolderInput.addEventListener('blur', function () {
      cardHolderContainer.classList.remove('highlighted');
    });
    
    cardHolderInput.addEventListener('input', function () {
        
        cardNameDisplay.textContent = cardHolderInput.value.trim().toUpperCase() || 'Default';
    });

    
// Change month and year

const expirationMonthSelect = document.getElementById('expirationMonth');
const expirationYearSelect = document.getElementById('expirationYear');
const expmmDisplay = document.getElementById('expmm');
const expyyDisplay = document.getElementById('expyy');

// Add change event listeners to the select elements
const expiryContainer = document.querySelector('.exp');
expirationMonthSelect.addEventListener('change', updateExpirationDateM);
expirationYearSelect.addEventListener('change', updateExpirationDateY);

function updateExpirationDateM() {
    // Get the selected month
    const selectedMonth = expirationMonthSelect.value;
    const formattedMonth = selectedMonth.padStart(2, '0');
       
    // Update the month and year parts individually
    expmmDisplay.textContent = formattedMonth;
    
}

function updateExpirationDateY() {
    // Get the selected year  
    const selectedYear = expirationYearSelect.value;
    const formattedYear = selectedYear.slice(-2);
    
    // Update the month and year parts individually
    expyyDisplay.textContent = formattedYear;
}

expirationMonthSelect.addEventListener('click',function()
{
  expiryContainer.classList.add('highlighted');
});
expirationYearSelect.addEventListener('click',function()
{
  expiryContainer.classList.add('highlighted');
})
expirationMonthSelect.addEventListener('change', function () 
{
  updateExpirationDateM();
});

expirationYearSelect.addEventListener('change', function () {
  
  updateExpirationDateY();
});

expirationMonthSelect.addEventListener('blur', function () {
  expiryContainer.classList.remove('highlighted');
});

expirationYearSelect.addEventListener('blur', function () {
  expiryContainer.classList.remove('highlighted');
});

// Change CVV And Card Rotation
const displayCVV = document.getElementById('cvvinp');
const creditCard = document.querySelector('.credit-card');
const cvvInput = document.getElementById('cvv');
const creditCardFront = document.querySelector('.credit-card-front');

// Real-time update for CVV
cvvInput.addEventListener('input', () => {
  const value = cvvInput.value;
  displayCVV.textContent = value;
});

// Rotate the credit card to show the backside when entering CVV
cvvInput.addEventListener('focus', () => {
  creditCard.style.transition = 'transform 0.8s ease';
  creditCard.style.transform = 'rotateY(180deg)';
  creditCardFront.style.display = 'none';
});

cvvInput.addEventListener('blur', () => {
  creditCard.style.transition = 'transform 0.8s ease';
  creditCard.style.transform = 'rotateY(0)';
  creditCardFront.style.display = 'block';
});


// Order Side 

var display = document.querySelector(".counter-display");
var minusButton = document.querySelector(".counter-button.counter-minus");
var plusButton = document.querySelector(".counter-button.counter-plus");
var totalElement = document.querySelector(".svalue");
var taxvalue = document.querySelector(".taxvalue");
var totalamt = document.querySelector(".amt");

var ct =localStorage.getItem('countindex');
// Initial count value
var count = ct;

var price = 125.00;
var tax = 3.45;
// Function to update the total based on the count
function updateTotal() {
  
  var total = count * price;
  var taxtotal = count * tax;
  var amount = total + taxtotal;
  display.textContent = count;
  totalElement.textContent = "$" + total.toFixed(2);
  taxvalue.textContent = "$" + taxtotal.toFixed(2);
  totalamt.textContent = "$" + amount.toFixed(2);
}

// Increase and decrease the counter
minusButton.addEventListener("click", function() {
  if (count > 1) {
    count--;
    display.textContent = count;
    updateTotal();
  }
});

plusButton.addEventListener("click", function() {
  count++;
  display.textContent = count;
  updateTotal();
});

// Initial total calculation
updateTotal();

// Validation of the form

const creditCardInput = document.getElementById('cardNumber');

// Add input event listener for formatting
creditCardInput.addEventListener('input', () => {
  const rawValue = creditCardInput.value.replaceAll(/\s/g, '');
  const formattedValue = rawValue.replace(/(\d{4})/g, '$1 ');
  creditCardInput.value = formattedValue.trim();
});

// Add keypress event listener for validation
creditCardInput.addEventListener('keypress', (event) => {
  const keyCode = event.which || event.keyCode;
  const isNumeric = (keyCode >= 48 && keyCode <= 57) || keyCode === 8;
  if (!isNumeric) {
    event.preventDefault();
  }
});

// Add only alphabets to cardholdername
function restrictToAlphabets(input) {
  var regex = /[^a-zA-Z\s]/g;
  input.value = input.value.replace(regex, '');
}

// Add Only Numbers to cvv
function restrictToNumbers(input) {
  var regex = /[^0-9]/g;
  input.value = input.value.replace(regex, '');
}