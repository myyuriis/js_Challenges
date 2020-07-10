// [Challenge 1.1]FizzBuzz
// Nama: Muhammad Yusril Yuriis

function cekFizzBuzz(angka) {
    if (angka % 5 == 0) {
        if (angka % 2 == 0) {
            hasil = "FizzBuzz"
        } else {
            hasil = "Fizz"
        }
    } else {
        if (angka % 2 == 0) {
            hasil = "Buzz"
        } else {
            hasil = angka
        }
    }
    return hasil
}

function FizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        console.log(cekFizzBuzz(i))
    }
}

let input = 20
FizzBuzz(input)

