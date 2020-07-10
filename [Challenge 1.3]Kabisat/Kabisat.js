// [Challenge 1.3]Kabisat
// Referensi: https://id.wikipedia.org/wiki/Tahun_kabisat#Algoritme
// Nama: Muhammad Yusril Yuriis

function cekKabisat(tahun) {
    if (tahun % 400 == 0) {
        kabisat = true;
    } else if (tahun % 400 != 0) {
        if (tahun % 100 == 0) {
            kabisat = false;
        } else {
            if (tahun % 4 == 0) {
                kabisat = true;
            } else {
                kabisat = false;
            }
        }
    }

    if (kabisat == true) {
        console.log("TAHUN KABISAT")
    } else {
        console.log("BUKAN TAHUN KABISAT")
    }
}

let input = 2019;
cekKabisat(input)