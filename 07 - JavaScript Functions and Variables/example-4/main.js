// Your scripts here


// define a function
// get the value of bill and assign to const

const elem = document.querySelector('#calculate');

elem.onclick = (e) => {
    const bill = document.querySelector('#amount').value;
    const tipPercent = document.querySelector('#percent').value;

    const tip = bill * tipPercent / 100;
    const total = Number(bill) + tip;

    document.querySelector('#tip').innerHTML = tip;
    document.querySelector('#total').innerHTML = bill + tip;
}
