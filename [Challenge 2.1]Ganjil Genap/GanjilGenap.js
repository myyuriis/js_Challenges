// [Challenge 2.1]Ganjil Genap
// Nama: Muhammad Yusril Yuriis

function cekGanjilGenap(angka) {
    if (angka % 2 == 0) {
        hasil = "genap"
    } else {
        hasil = "ganjil"
    }
    return hasil
}

let input = 3;
console.log(cekGanjilGenap(input)) 