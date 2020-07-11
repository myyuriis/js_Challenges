[Challenge 6.1]Callback
Problem

Pada tugas ini kamu diminta untuk membuat rambu lalu lintas, dan akan tercetak keterangan di console kuning, hijau, merah

 

Kriteria
Gunakan metode callback dan setTimeout
Posisi dan value tidak boleh terbalik atau di ubah


Skeleton Code

var merah = “Berhenti”

var kuning = “Hati-hati”

var hijau = “Jalan”

 

function Kuning(callback){
            setTimeout(

       callback()

   )

}


Output
//input

Merah()

Kuning(Hijau)

 

Berhenti    //detik ke 1

Hati-hati    //detik ke 2

Jalan         //detik ke 3