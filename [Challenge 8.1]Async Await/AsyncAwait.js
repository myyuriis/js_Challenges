// [Challenge 8.1]Async Await
// Nama: Muhammad Yusril Yuriis

const janji = (waktu) => (new Promise((resolve, reject) => {
    if (waktu >= 7 && waktu <= 11) {
        resolve(console.log("Datang"))
    } else {
        reject(console.log("Tidak Datang!"))
    }
}))

const run = async function (waktu) {
    const isJanji = await janji(waktu)
    isJanji
}

run(12)
    .then((janji) => { })
    .catch((janji) => { })