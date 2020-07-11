const janji = (waktu) => (new Promise((resolve, reject) => {

    if (waktu >= 7 && waktu <= 11) {
        resolve(console.log("Datang"))
    } else {
        reject(console.log("Tidak Datang!"))
    }
}))

function getResult() {
    let waktu = 12
    janji(waktu)
        .then((janji) => {

        })
        .catch((janji) => {

        })
}

getResult()

