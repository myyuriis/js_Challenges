// [Challenge 3.2] Tagihan Restoran
// Nama: Muhammad Yusril Yuriis

var tagihan = [250000, 710000, 125000];
var persenTips = [10 / 100, 15 / 100, 20 / 100];


function hitung(tagihan, persenTips) {
    var tips = []; // Berisi semua tips masing-masing tagihan
    var total = []; // Berisi total uang yang dikeluarkan (tagihan + tips)
    tagihan.reverse();

    for (i = 0; i < tagihan.length; i++) {
        if (tagihan[i] > 500000) {
            tips[tips.length] = tagihan[i] * persenTips[0];
            total[total.length] = tagihan[i] + tips[i];
        } else if (tagihan[i] > 250000 && tagihan[i] < 500000) {
            tips[tips.length] = tagihan[i] * persenTips[1];
            total[total.length] = tagihan[i] + tips[i];
        } else if (tagihan[i] <= 250000) {
            tips[tips.length] = tagihan[i] * persenTips[2];
            total[total.length] = tagihan[i] + tips[i];
        }
    }
    return { tagihan, tips, total }
}

var resultObj = hitung(tagihan, persenTips);
console.log(resultObj);


