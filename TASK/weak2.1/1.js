/** 
 * 1. Join => menggabungkan elemen array menjadi sebuah string. contoh:
 */

let arr1 = ['aku adalah', 'anak', 'gembala']
console.log(arr1.join(' '))

/** 
 * 2. reverse => membalikan elemen didalam array. contoh:
 */

let arr2 = ['aku', 'adalah', 'dia']
console.log(arr2.reverse())

/**
 * 3. ToLowerCase => digunakan untuk mengubah huruf kapital menjadi huruf kecil
 */

const kapital = "Aku"
console.log(kapital.toLowerCase())


/**
 * 4. ToUpperCase => digunakan untuk mengubah huruf kecil menjadi huruf kapital
 */

const kecil = "Ini Contoh"
console.log(kecil.toUpperCase())

/**
 * 5. split() => digunakan untuk membagi string ke dalam array substring
 */

const splitKata = "ini_akan_displit"
const arrSplit = splitKata.split('_', 2)
console.log(arrSplit)

/**
 * 6. parseInt => digunakan untuk mengubah string kedalam bentuk integer
 */

const string1 = "1" //bentuk string
console.log(`${parseInt(string1)} adalah ${typeof parseInt(string1)}`)


/**
 * 7. replace => digunakan untuk mencari sebuah kata lalu menggantinya dengan kata yang ditentukan
 */

const kalimat = "aku lahir di yogyakarta"
console.log(kalimat.replace('yogyakarta', 'jakarta'))

/**
 * 8. Date => digunakan untuk menampilkan current date and time.
 */

const now = new Date()
console.log(now)

/**
 * 9. length => digunakan untuk mengetahui panjang dari sebuah array/string
 */

const lengthKata = "test"
console.log(lengthKata.length)

/**
 * 10. array push => digunakan untuk menambah item ke dalam array
 */

const arrayAwal = ['satu', 'dua', 'tiga']
arrayAwal.push('empat', 'lima')
console.log(arrayAwal)
