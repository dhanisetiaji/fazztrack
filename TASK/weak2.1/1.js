/** 
 * 1. Join => menggabungkan elemen array menjadi sebuah string. contoh:
 */

let arr1 = ['aku adalah', 'anak', 'gembala']
console.log(arr1.join(' '))
//output : aku adalah anak gembala

/** 
 * 2. reverse => membalikan elemen didalam array. contoh:
 */

let arr2 = ['aku', 'adalah', 'dia']
console.log(arr2.reverse())
//output : ['dia', 'adalah', 'aku']

/**
 * 3. ToLowerCase => digunakan untuk mengubah huruf kapital menjadi huruf kecil
 */

const kapital = "Aku"
console.log(kapital.toLowerCase())
//output: aku


/**
 * 4. ToUpperCase => digunakan untuk mengubah huruf kecil menjadi huruf kapital
 */

const kecil = "Ini Contoh"
console.log(kecil.toUpperCase())
// output: INI CONTOH

/**
 * 5. split() => digunakan untuk membagi string ke dalam array substring
 */

const splitKata = "ini_akan_displit"
const arrSplit = splitKata.split('_', 2)
console.log(arrSplit)
// output: ['ini','akan']

/**
 * 6. parseInt => digunakan untuk mengubah string kedalam bentuk integer
 */

const string1 = "1" //bentuk string
console.log(`${parseInt(string1)} adalah ${typeof parseInt(string1)}`)
//output: 1 adalah number


/**
 * 7. replace => digunakan untuk mencari sebuah kata lalu menggantinya dengan kata yang ditentukan
 */

const kalimat = "aku lahir di yogyakarta"
console.log(kalimat.replace('yogyakarta', 'jakarta'))
//output: aku lahir di jakarta

/**
 * 8. Date => digunakan untuk menampilkan current date and time.
 */

const now = new Date()
console.log(now)
// output: 2022-06-06T03:09:52.046Z

/**
 * 9. length => digunakan untuk mengetahui panjang dari sebuah array/string
 */

const lengthKata = "test"
console.log(lengthKata.length)
//output : 4

/**
 * 10. array push => digunakan untuk menambah item ke dalam array
 */

const arrayAwal = ['satu', 'dua', 'tiga']
arrayAwal.push('empat', 'lima')
console.log(arrayAwal)
// output: [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]
