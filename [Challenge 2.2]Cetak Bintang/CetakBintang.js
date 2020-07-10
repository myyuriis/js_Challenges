// [Challenge 2.2]Cetak Bintang
// Nama: Muhammad Yusril Yuriis

function cetakBintang() {
    let bintang = "*"
    var i, j;
    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= i; j++) {
            console.log(bintang)
            bintang = bintang + "*"
        }
    }
}

cetakBintang()