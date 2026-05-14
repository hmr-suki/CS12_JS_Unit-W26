document.querySelector(".subtotal").value = '$0';
document.querySelector(".tax").value = '15%';
document.querySelector(".total").value = '$0';

document.querySelector(".button1").addEventListener("click", order);

function order() {
    let burgerNum = document.querySelector(".burgerNumber").value;
    let friesNum = document.querySelector(".friesNumber").value;
    let drinksNum = document.querySelector(".drinksNumber").value;
    let subtotal = 6*burgerNum + 3*friesNum + 1.5*drinksNum;
    let tax= 0.15*subtotal
    let total = tax + subtotal;

    document.querySelector(".subtotal").value ="$" + subtotal;
    document.querySelector(".tax").value = "$" + tax;
    document.querySelector(".total").value ="$"+ total;

    

}