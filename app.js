var nums = [0,1,2,3,4,5,6,7,8,9];
var inputs = [""];
var totalStr;
var operators = ["+","-","*","/"];
var dot = ["."];
function getValue (input) {
    if (inputs[inputs.length - 1] === "." && input === ".") {
       console.log("Duplicate");
    } else if (operators.includes(inputs[inputs.length - 1])===false) {
        inputs.push(input);
    } else if (inputs.length === 1 && operators.includes(input)===false) {
        inputs.push(input);
    } else if (nums.includes(Number(input))) {
        inputs.push(input);
    }
    update();
}
function update() {
    totalStr = inputs.join("");
    $("#result-txt").html(totalStr);
}
function getTotal() {
    totalStr = inputs.join("");
    $("#result-txt").html(eval(totalStr));
}
$("a").on("click", function () {
    if (this.id === "btn-clear") {
        inputs = [""];
        update();
    } else if (this.id === "btn-clear-one") {
        inputs.pop();
        update();
    } else if (this.id === "btn-equal") {
        getTotal();
    } else {
        if (inputs[inputs.length - 1].indexOf("+","-","*","/",".")===-1) {
            getValue(this.id);
        } else {
            getValue(this.id);
        }
    }
});