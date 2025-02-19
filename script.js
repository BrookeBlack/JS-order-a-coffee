// Problem Statement:
// You work at a coffee shop, and your manager has asked you to format customer 
// orders correctly before printing them on receipts. Customers might enter 
// their names and drink orders with extra spaces or incorrect formatting. Your goal is to 
// clean up the input and display a formatted confirmation.

// // Example Input & Output:
// // Input:

// // Customer Name: "   aLice    " string
// // Drink: "  LATTE    " string
// // Output:

// // alert: Order confirmed: aLice - LATTE popup
// // document.write: Thank you, aLice! Your LATTE is being prepared. string

let name = prompt("What is your name?");
let drink = prompt("What drink would you like?");

function formatCoffeeOrder (name, drink) {
    let trimmedName = name.trim();
    let trimmedDrink = drink.trim();

    alert(`Order confirmed: ${trimmedName} - ${trimmedDrink}`);
    document.write(`Thank you, ${trimmedName}! Your ${trimmedDrink} is being prepared.`);
};

formatCoffeeOrder(name, drink);