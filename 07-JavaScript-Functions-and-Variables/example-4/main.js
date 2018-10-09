// Your scripts here

// const n = Math.random() * 100;
//
// console.log(n)
// const m = n.toFixed(2)
// console.log(m);
// console.log(m * 2);
// console.log(Number(m) + 3);
// console.log(typeof m);
// if (typeof m === 'string') {
//
// }
let formatter = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
 minimumFractionDigits: 2
})

let tip = document.querySelector('#tip')
let total = document.querySelector('#total')

let tipPer = document.querySelector('#tip-per')
let totalPer = document.querySelector('#total-per')

let amount, percent, people, tipVal, totalVal;

document.querySelector('#calculate').addEventListener("click", (e) => {
    console.log("Calculating");
    amount = Number(document.querySelector('#amount').value);
    percent = Number(document.querySelector('#percent').value) / 100;
    people = Number(document.querySelector('#people').value);

    tipVal = amount * percent;
    tip.innerHTML = formatter.format(tipVal);
    total.innerHTML = formatter.format(tipVal + amount);

    tipPer.innerHTML = formatter.format(tipVal / people);
    totalPer.innerHTML = formatter.format(tipVal / people);

})
