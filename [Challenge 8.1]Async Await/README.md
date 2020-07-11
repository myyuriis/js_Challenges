[Challenge 8.1]Async Await
Problem
Pada tugas ini, buatlah sebuah Async Await untuk memunculkan sebuah console “Datang” ketika kondisi terpenuhi dan “Tidak Datang!” ketika kondisi tidak terpenuhi!

 

Kriteria
buatlah code untuk sebuah Async Await dari sebuah kondisi yang ada pada skeleton code


Skeleton Code

const janji= (waktu) => (new Promise((resolve, reject)=>{

    if(waktu >= 7 && waktu <= 11){

        resolve(console.log("Datang"))

    } else{

        reject(console.log("Tidak Datang!"))

    }

}))


Output
// waktu  8

Datang

// waktu 12

Tidak Datang!