const cars = [
  { type: "SUV", licensePlate: "ABC 124", available: false, dailyRate: 15 },
  { type: "SEDAN", licensePlate: "BXL 009", available: true, dailyRate: 10 },
  { type: "SUV", licensePlate: "KML 155", available: true, dailyRate: 15 },
];

function createReservation(carType, days, seatNeeded) {
  const car = cars.find((car) => car.type === carType && car.available);
  if (!car) {
    console.log(`Sorry, no ${carType} available.`);
    return;
  }

  const rentalFee = days * car.dailyRate;
  const carSeatFee = seatNeeded ? 3 * days : 0;
  const subtotal = rentalFee + carSeatFee;
  const tax = 0.13 * subtotal;
  const total = subtotal + tax;
  const reservationId = Math.floor(Math.random() * 9000) + 1000;

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(
`RECEIPT`)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`  
ID: ${reservationId}
Car Type: ${car.type}
License Plate: ${car.licensePlate}
Rental Days: ${days}
Car Seat: ${seatNeeded ? "true" : "false"}
Subtotal: $${subtotal.toFixed(2)}
Tax: $${tax.toFixed(2)}
Total: $${total.toFixed(2)}`);
console.log(`\n`)
car.available = false;
}

const prompt=require('prompt-sync')();
console.log("\n");

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Welcome to Junayad's car rental`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`\n`);


let carr = prompt(`What type of car you need ? `)
carType=carr.toUpperCase();
let days = prompt(`For how many days ? `)
let seatNeeded = prompt(`Do you need additional seats ? `)
console.log(`\n`);


console.log(
`Rental Details:
Requested Car Type: ${carType}
Rental Days: ${days}
Car Seat: ${seatNeeded ? "true" : "false"}`);

console.log(`\n`);

createReservation(carType, days, seatNeeded);
