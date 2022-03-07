// N1

// let ason = 30;

// for(let i = 0; i <= ason; i++) {
//   if (ason % i == 0) {
//     console.log(i)
//   }
// }


// N2

// let ason = 15;
// let bson = 0;

// for(let i = 0; i <= ason; i++) {
//   if (ason % i == 0) {
//     console.log(i)
//     bson += i;
//   }
// }
// console.log(bson);


// N3

// let ason = 28;
// let bson = 0;

// for(let i = 1; i < ason; i++) {
//   if(ason % i == 0) {
//     console.log(i);
//     bson += i;
//   }
// }
// if (ason == bson) {
//   console.log(`${ason} mukammal son`)
// }
// else {
//   console.log('Mukammal son emas');
// }


// N4


// let ason = 1000;

// for(let i = 1; i < ason; i++) {
//   let bson = 0;
//   for(let j = 1; j < i; j++) {
//     if (i % j == 0) {
//       bson += j;
//     }
//   }
//   if(bson == i) {
//     console.log(i);
//   }
// }

// N5

// let ason = 30;

// for(let i = 1; i <= ason; i++) {
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log(i);
//   }
// }


// N6

// let ason = 15;
// let bson = 0;

// for(let i = 2; i < ason; i++) {
//   if (ason % i == 0) {
//     bson += i;
//   }
// }

// if (bson == 0) {
//   console.log(`${ason} Tubson`);
// }
// else {
//   console.log(`${ason} Tubson emas`);
// }

// N7

let ason = 100;

for(let i = 2; i <= ason; i++) {
  let bson = true;
  for(let j = 2; j < i; j++) {
      if (i % j == 0) {
        bson = false;
        break;
      }
    }
  if (bson) {
    console.log(`${i} tubson`)
  }
}

// N8

// let ason = 50;
// let count = 0;
// for(let a = 1; a <= ason; a++) {
//   for(let b = a+1; b <= ason; b++) {
//      let c = Number.isInteger(Math.sqrt(a**2 + b**2));
//         if (c && Math.sqrt(a**2 + b**2) <= ason) {
//         console.log(a, b, Math.sqrt(a**2 + b**2));
//         }
//         ++count;
//       }
//   }
// console.log(`${count} marta aylandi`);


// N9



// N10

// let ason = 5;
// let bson = 1;
// console.log(2**ason);

// for(let i = 1; i <= ason; i++) {
//   bson *= i;
// }
// console.log(bson);
