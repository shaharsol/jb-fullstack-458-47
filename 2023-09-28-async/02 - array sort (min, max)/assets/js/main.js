const grades = [98, 66, 20, 100, 0, 44];
const sorted = grades.sort((a,b) => a > b ? -1 : 1);
console.log(sorted[sorted.length - 1]);