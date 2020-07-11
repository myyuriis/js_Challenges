// [Challenge 6.1]Callback
// Nama: Muhammad Yusril Yuriis

var merah = "Berhenti"
var kuning = "Hati-hati"
var hijau = "Jalan"

function Merah() {
    setTimeout(
        function () {
            console.log(merah)
        }, 1000
    )
}

function Kuning(callback) {
    setTimeout(
        function () {
            console.log(kuning)
            callback()
        }, 2000
    )


}

function Hijau() {
    setTimeout(
        function () {
            console.log(hijau)
        }, 1000
    )
}

Merah()
Kuning(Hijau)
