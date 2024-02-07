//Dasar Array
let animals = ["kuda", "gajah", "singa"];
console.log(animals[0]);

let randomArrays = ["human", 12, false, ["array clone"], {name: "jel"}]; //Lebih baik bikin array dengan satu tipe data yang sama!
console.log(randomArrays[2]);

//Method Array
let hewan = ["kuda", "gajah", "singa"];
console.log(hewan.length); // method length untuk melihat panjang dari array atau total dari item pada array

let hewanPush = ["kuda", "gajah", "singa"];
hewanPush.push("ikan")
console.log(hewanPush); // method push untuk memasukkan item ke array ke index paling kanan / terakhir

let hewanPop = ["kuda", "gajah", "singa"];
hewanPop.pop()
console.log(hewanPop); // method pop untuk menghapus item ke array ke index paling kanan / terakhir

let hewanShift = ["kuda", "gajah", "singa"];
hewanShift.shift()
console.log(hewanShift); // method shift untuk menghapus item ke array ke index paling kiri / pertama

let hewanUnshift = ["kuda", "gajah", "singa"];
hewanUnshift.unshift("mamoth")
console.log(hewanUnshift); // method unshift untuk memasukkan item ke array ke index paling kiri / pertama

let hewanSplice = ["kuda", "gajah", "singa", "jerapah", "tikus"];
hewanSplice.splice(1,3, "platipus", "kucing")
console.log(hewanSplice); // method splice untuk memasukkan dan menghapus item ke array ke index paling kanan

let hewanSlice = ["kuda", "gajah", "singa", "jerapah", "tikus"];
// hewanSlice.slice(1,3)
// console.log(hewanSlice.slice(1)); // method slice untuk memotong array tergantung parameter yang di berikan
let slicedHewan = hewanSlice.slice(2,4)
console.log(slicedHewan);