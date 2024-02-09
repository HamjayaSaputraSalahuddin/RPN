/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

    function palindrome(kata) {
        // you can only write your code here!
        let j = kata.length - 1;

        for (let i = 0; i < kata.length / 2; i++) {
            if (kata[i] != kata[j]) {
                return false 
            }
            j--;
        }
        return true
    }

    // function palindrome(kata) {
    //     let reverse = "";

    //     for (let i = kata.length - 1; i >= 0; i--) {
    //         reverse += kata[i];
    //     }
    //     if (reverse == kata) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    
    // TEST CASES
    console.log(palindrome('katak')); // true
    console.log(palindrome('blanket')); // false
    console.log(palindrome('civic')); // true
    console.log(palindrome('kasur rusak')); // true
    console.log(palindrome('mister')); // false