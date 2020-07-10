// [Challenge 1.2]Waktu Belajar
// Nama: Muhammad Yusril Yuriis

function cekWaktu(waktu) {
    if (waktu >= 8 && waktu <= 11) {
        console.log("WAKTU BELAJAR")
    } else if (waktu >= 13 && waktu <= 17) {
        console.log("WAKTU BELAJAR")
    } else if (waktu == 12) {
        console.log("WAKTU ISTIRAHAT")
    } else if (waktu >= 4 && waktu <= 5) {
        console.log("WAKTU BANGUN")
    } else if (waktu > 24) {
        console.log("HANYA ADA 24 JAM DALAM SEHARI")
    } else {
        console.log("WAKTU MAIN")
    }
}

let input = 20;
cekWaktu(input);