// [Challenge 1.5]BMI
// Nama: Muhammad Yusril Yuriis

let nama1 = "Rifky"
let tinggi1 = 170
let berat1 = 65

let nama2 = "Robby"
let tinggi2 = 175
let berat2 = 60

function hitungBMI(berat, tinggi) {
    BMI = berat / (tinggi * tinggi)
    return BMI
}

BMIRifky = hitungBMI(berat1, tinggi1);
BMIRobby = hitungBMI(berat2, tinggi2);

let bandingBMI = (BMIRifky > BMIRobby) ? true : false;

if (bandingBMI == true) {
    console.log("BMI Rifky lebih tinggi dari BMI Robby")
} else {
    console.log("BMI Robby lebih tinggi dari BMI Rifky")
}