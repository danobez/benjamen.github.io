import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 1,
  radius1: 0,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})


let i = 0;
while (i <= 30) {
    i++;
    console.log(i);
}

// let i = 62;
// while ( i <= 67) {
//     i++;
//     console.log(i);
// }

// let i = 0;
// while (i <= 6) {
//     i++;
//     if (i == 3) {
//         console.log("To jest liczba " + [i]);
//         }
//     console.log(i);
// }

// let a = ['a', 'b', 'c'];
// let i = 1;
// while (i < 4) {
//     let e = 0;
//     while (e < a.length) {
//         console.log(`${i} ${a[e]}`);
//         e++;
//     }
//     i++;
// }

// let t = [25, "jablko", "banan", 36, "jablko", "banan", 73, "jablko", "banan"];
// let i = 0;
// while (i < t.length) {
//     i++;
//     console.log(t[i]);
// }

// let i = 9;
// while  (i >= 1) {
//     i--;
//     console.log(i);
// } 

// let i = 0;
// while (i <= 49) {
//     i++
//     console.log(i);
// }

// let i = 3;
// while (i > 0) {
//     console.log(i);
//     i--;
// }
// console.log("START");

// let sum = 0;
// let i = 0;
// while (i < 3) {
//     i++
//     const liczba = Number(prompt("Podaj liczbę:"));
//     sum += liczba;
// }
// console.log("Suma wpisanych liczb:", sum);

// let i = 0;
// while (i <= 3) {
//     i++
//     let linia = "*";
//     let j = 1;
//     while (j < i) {
//         j++;
//         linia += "*";
//     }
//     console.log(linia);
// }

// let i = 1;
// let n = 4;
// while (i <= n) {
//     let linia = ""; 
//     let space = n - i;
//     let j = 0;
//     while (j < space) {
//         linia += " ";
//         j++;
//     }
//     let gwiazda = 2 * i - 1;
//     j = 0;
//     while (j < gwiazda) {
//         linia += "*";
//         j++;
//     }
//     console.log(linia);
//     i++;
// }

// const słowa = ["Banan", "Marchew", "Gruszka", "Jabłko"];
// let i = 0;
// while (i < słowa.length) {
//     const a = słowa[i];
//     console.log(a, a.length);
//     i++;
// }