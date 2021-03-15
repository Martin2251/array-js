const priceList = [2, 5, 7, 20, 30, 40, 55];

// 1 For Loop
for (let i = 0; i < priceList.length; i++) {
  //console.log(priceList[i])
}

// 2. for Each
priceList.forEach(function (element, index) {
  //console.log(element, index)
});

//3. map function
const result = priceList.map(function (element) {
  return element * 2;
});
console.log(result);
// doubles the result

const sortedList = priceList.sort(function compare(a, b) {
  return b - a;
});

console.log(sortedList);
