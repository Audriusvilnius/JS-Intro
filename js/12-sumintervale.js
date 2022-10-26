const start = 0;
const end = 10_000_000_000_000_000_000_000_000_000_000_000;

let sum = 0;

// for (let i = start; i <= end; ++i) {
//     sum += i;
// }

const n = end - start;
sum = (1 + n) * n / 2;

console.log(`${start}..${end}=${sum}`);