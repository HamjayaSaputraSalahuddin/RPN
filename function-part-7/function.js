function helloWorld() {
    return 'Hello World!'
}

console.log(helloWorld());

function penjumlahan(angka1, angka2) {
    return angka1 + angka2;
}

console.log(penjumlahan(12,12));
console.log(penjumlahan(1,12));
console.log(penjumlahan(2,12));

function balikKata(kata) {
    let result = "";
    for(let i = kata.length - 1; i >= 0; i--) {
        result += kata[i];
    }
    return result;
}

console.log(balikKata("agus"));

function hurufKapital(kata) {
    let result = "";
    for (let i = 0; i < kata.length; i++) {
        if ((i === 0 || kata[i - 1] === ' ')) {
            result += kata[i].toUpperCase();
        } else {
            result += kata[i];
        }
    }
    return result;
}

console.log(hurufKapital("hamjaya saputra salahuddin"));
console.log(hurufKapital("haeruddin"));