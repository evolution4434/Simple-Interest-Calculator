function updateRate() {
var rate_val = document.getElementById("rate").value;
document.getElementById("rate_val").innerText = rate_val;
}

function compute() {
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var amount = parseInt(principal) + parseFloat(interest);
var result = document.getElementById("result");
var year = new Date().getFullYear() + parseInt(years);

if (principal <=0) {
alert("please enter a positive number!");
document.getElementById("principal").focus();
} else {
result.innerHTML = "if you borrowed the sum of $" + principal +"," + "\<br/>for " + years + " year(s)," + "\<br/>at an interest rate of " + rate + "% your interest will be $" + interest + "\<br/>and your repayable amount in " + year + " will be " + "$" + amount;
}

}

