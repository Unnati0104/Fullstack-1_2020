var x = document.getElementById("container");
// console.log(x);

x.style.width = "200px";
x.style.height = "200px";
x.style.background = "red";
x.style.margin = "20px";

var y = document.getElementById("btn");
// console.log(y);
y.onclick = function() {
    alert('This is an alert');
    x.style.background = "blue";
};