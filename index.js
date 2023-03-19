

const batteryBatches = [
  { batteryAmount: 4 },
  { batteryAmount: 5 },
  { batteryAmount: 3 },
  { batteryAmount: 4 },
  { batteryAmount: 4 },
  { batteryAmount: 6 },
  { batteryAmount: 5 },
];

const totalBatteries = batteryBatches.reduce((acc, curr) => {
  return acc + curr.batteryAmount;
}, 0);

console.log(totalBatteries); // Output: 31
