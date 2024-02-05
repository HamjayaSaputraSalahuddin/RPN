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