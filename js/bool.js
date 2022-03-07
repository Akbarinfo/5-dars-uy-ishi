// Bool 11

// let ason = 7;
// let bson = 3;

// if(ason % 2 != 0 && bson % 2 != 0)
//   console.log(true)
// else if(ason % 2 == 0 && bson % 2 != 0 || bson % 2 == 0 && ason % 2 != 0)
//   console.log(true)
// else {
//   console.log(false);
// }

// Bool 12

// let ason = 28;

// if(ason >= 10 && ason <= 99) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }

// Bool 13

// let ason = 100;

// if(ason >= 100 && ason <= 999) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// Bool 14

// let ason = 24;

// let a = ason % 10;
// let b = (ason - a) / 10;

// if(a == b) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// Bool 15

// let ason = 21;

// let a = ason % 10;
// let b = (ason - a) / 10;

// if((a + b) % 2 == 0 ) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }

// Bool 16

// let ason = 32;

// let a = ason % 10;
// let b = (ason - a) / 10;

// if((a + b) % 2 != 0 ) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// Bool 17

// let ason = 100;

// let a = ason % 10;
// let b = Math.floor(ason % 100 / 10);
// let c = Math.floor(ason / 100);

// if((a + b + c) % 2!= 0 ) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// Bool 18

// let ason = 50000;

// if(ason >= 10000 && ason <= 99999) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// Bool 19

// let ason = 54321;
// let test = true;
// let cson = 0;

// while (ason != 0) {
//   let bson = ason % 10;
//   if(bson < cson) {
//     test = false;
//     break
//   }
//   else{
//     cson = bson;
//   }
//   ason = Math.floor(ason / 10);
// }
// console.log(test);

// Bool 20

// let ason = 12845;
// let test = true;
// let cson = ason % 10;

// while (ason != 0) {
//   let bson = ason % 10;
//    if(bson > cson) {
//     test = false;
//     break
//   }
//   else {
//     cson = bson;
//   }

//   ason = Math.floor(ason / 10);
// }
// console.log(test);


// Bool 21

// let ason = 6;

// if(ason > 0) {
//   console.log(ason += 1);
// }
// else {
//   console.log(ason);
// }

// Bool 22

// let ason = -6;

// if(ason > 0) {
//   console.log(ason += 1);
// }
// else {
//   console.log(ason - 2);
// }


// Bool 23

// let ason = 0;

// if(ason > 0) {
//   console.log(ason + 1);
// }
// else if(ason == 0) {
//   console.log(10);
// }
// else {
//   console.log(ason - 2);
// }


// Bool 24

// let ason = 1;
// let bson = 3;
// let cson = -8;
// let count = 0;

// if (ason > 0) {
//   count += 1;
// }
// if (bson > 0) {
//   count += 1;
// }
// if (cson > 0) {
//   count += 1;
// }

// console.log(count);


// Bool 25

// let ason = -1;
// let bson = -3;
// let cson = -8;
// let count = 0;
// let mcount = 0;

// if (ason > 0) {
//   count += 1;
// }
// else {
//   mcount++;
// }
// if (bson > 0) {
//   count += 1;
// }
// else {
//   mcount++;
// }
// if (cson > 0) {
//   count += 1;
// }
// else {
//   mcount++;
// }

// console.log(`${count} musbat son, ${mcount} manfiy son`);

// Bool 26

// let ason = 14;
// let bson = 17;

// if(ason > bson){
//   console.log(ason, bson);
// }
// else {
//   console.log(bson, ason);
// }