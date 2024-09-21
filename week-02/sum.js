// ary: number array
// use reduce method
function sum(ary) {
  const initialValue = 0;
	return ary.reduce(
    (accumulator, currentValue) =>accumulator + currentValue, 
    initialValue
  )
}
console.log(sum([1, 5, 3, 2])); // 11



// 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，
// 一樣不能用 for, while 寫，要怎麼做？

// use math formula 
function sum_input_n(n) {
	return n*(n+1)/2;
}
console.log(sum_input_n(5)); // 