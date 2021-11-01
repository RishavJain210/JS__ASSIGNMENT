function un_defined() {
  console.log(a); //Here I am calling a without declaring the variable So, it says Undefined.
  var a = "Before assigning value if we call a variable, it shows UNDEFINED."; //After assigning value to a , if we call the variable, It shows the value of var.
  console.log(a);
}
function not_defined() {
  console.log(
    "When we did not declare the variable and try to call that variable, it shows NOT DEFINED."
  );
  console.log(b);
}
