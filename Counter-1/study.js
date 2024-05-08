function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  a = 500;
  return y;
}
var z = x();
z();
