
//// Array of car objects with details such as car type, license plate, availability, and daily rate
const cars = [
  { type: "SUV", licensePlate: "ABC 124", available: false, dailyRate: 15 },
  { type: "SEDAN", licensePlate: "BXL 009", available: true, dailyRate: 10 },
  { type: "SUV", licensePlate: "KML 155", available: true, dailyRate: 15 },
  ];

//// Function to create a car reservation
const createReservation = (carType, days, seatNeeded) => 
{
  const car = cars.find((car) => car.type.toUpperCase() === carType.toUpperCase() && car.available);
  if (!car) {
    console.log(`Sorry, no ${carType} available.`);
    console.log(`\n`);
    return;
  }

//// Calculate fees and taxes for the rental
const rentalFee = days * car.dailyRate;
const carSeatFee = seatNeeded ? 3 * days : 0;
const subtotal = rentalFee + carSeatFee;
const tax = 0.13 * subtotal;
const total = subtotal + tax;
const reservationId = Math.floor(Math.random() * 9000) + 1000;

//// Print the reservation receipt
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`RECEIPT`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`
ID: ${reservationId}
Car Type: ${car.type}
License Plate: ${car.licensePlate}
Rental Days: ${days}
Car Seat: ${seatNeeded ? "true": "false"}
Subtotal: $${subtotal.toFixed(2)}
Tax: $${tax.toFixed(2)}
Total: $${total.toFixed(2)}
`);
console.log(`\n`)

//// Set the car's availability to false
car.available = false;
}


//// Welcome message to the car rental
  console.log(`\n`);
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`Welcome to Junayad's car rental`);
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  
//// *** / Prompt user to enter rental details such as car type, rental days,
//// *** / and additional seats needed but this block is commented out to directly pass the values to the function.

/*
const prompt = require('prompt-sync')();
let carType = prompt(`What type of car do you need? `).toUpperCase();
let days = prompt(`For how many days do you need the car? `);
let seatNeeded = prompt(`Do you need additional seats? (yes/no) `).toLowerCase() === "yes";
*/

//// *** //// For successful reservation
carType="Suv";
days=3;
seatNeeded = "yes";

//// *** //// For unsuccessful reservation
/*
carType="Truck";
days=3;
seatNeeded = "yes";
*/

//// Print rental details entered by the user
  console.log(`\n`);
  console.log(`Rental Details:`);
  console.log(`Requested Car Type: ${carType}`);
  console.log(`Rental Days: ${days}`);
  console.log(`Car Seat: ${seatNeeded ? "true" : "false"}`);
  console.log(`\n`);

//// *** / Call createReservation function with the rental details entered by the user
//createReservation(carType, days, seatNeeded);

createReservation(carType, days, seatNeeded);