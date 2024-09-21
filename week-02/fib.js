function fib_iter(n) {
  if(n==0 || n==1){
    console.log(n);
    return;
  }
  let an = [0,1];
  for(let i=2; i<=n; ++i){
    an.push(an[i-1]+an[i-2]);
  }
  console.log(an[n]);
}

console.log('========DP method========')
fib_iter(0); // 0
fib_iter(1); // 1
fib_iter(5); // 5
fib_iter(10); // 55

function fib_recursive(n) {
  if(n==0 || n==1){
    return n;
  }
  else return fib_recursive(n-1)+fib_recursive(n-2);
}

console.log('========recursive method========')
console.log(fib_recursive(0));
console.log(fib_recursive(1));
console.log(fib_recursive(5));
console.log(fib_recursive(10));

