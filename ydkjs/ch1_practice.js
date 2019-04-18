const TAX_RATE = 0.07; 
const PHONE_PRICE = 500.00;
const ACCESSORY_PRICE = 30.00;
const SPENDING_THRESHOLD = 900.00;

var purchase_amount = 0;
var bank_balance = 2000;

function calculateTax(amt) {
    return amt*TAX_RATE;
}

function formatPrice(amt){
    return '$' + amt.toFixed(2);
}

while (purchase_amount < bank_balance){
    purchase_amount = purchase_amount + PHONE_PRICE;

    if (purchase_amount < SPENDING_THRESHOLD) { 
        purchase_amount = purchase_amount + ACCESSORY_PRICE;
    }
}

purchase_amount = purchase_amount + calculateTax(purchase_amount);

console.log("Your purchase: " + formatPrice(purchase_amount));

if (purchase_amount > bank_balance) {
    console.log("Insufficient funds.");
}