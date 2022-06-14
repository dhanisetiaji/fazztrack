const Str = require('@supercharge/strings')


function cekPalindrom(kata) {
    const balik = Str(kata).reverse().get()
    if (kata != balik) return console.log("Bukan Palindrom")
    return console.log("Palindrom")
}

function reverseword(kata) {
    const balik = kata.split(" ").reverse().join(" ")
    return console.log(balik)
}

function Fazzfood(harga, voucher, jarak, pajak) {
    const kupon = {
        data: [{
            kode: "FAZZFOOD50",
            minimal: 50000,
            diskon: 50,
            maksPot: 50000
        },
        {
            kode: "DITRAKTIR60",
            minimal: 25000,
            diskon: 60,
            maksPot: 30000
        }]

    }

    let cek = kupon.data.find((item) => {
        return item.kode === voucher
    })

    let potongan
    let biayaantar = 5000
    let pajaktotal
    let Subtotal

    //Logic
    if (!cek) return console.log("Voucher Tidak ada!")
    if (harga < cek.minimal) return console.log(`Minimal harga untuk menggunakan voucher senilai ${cek.minimal} `)
    potongan = cek.diskon / 100 * harga
    if (potongan > cek.maksPot) potongan = cek.maksPot
    if (jarak <= 2) biayaantar = 5000
    for (let n = 3; n <= jarak; n++) {
        biayaantar += 3000
    }
    pajaktotal = 0.05 * harga
    if (!pajak) pajaktotal = 0
    Subtotal = potongan + biayaantar + pajaktotal
    return console.log(`==== FazzFood Details ===\nHarga: ${harga}\nPotongan: ${potongan}\nBiaya Antar: ${biayaantar}\nPajak: ${pajaktotal}\nSubtotal: ${Subtotal}`)
}

function divideAndSort(angka) {
    if (typeof angka !== 'number') return console.log("Inputan Harus angka")
    resReplace = angka.toString().split('0')
    let hasil = []
    resReplace.forEach(item => {
        hasil.push(item.split('').sort((a, b) => { return a - b }).join(''))
    });
    console.log(hasil.join(''))

}


cekPalindrom("malam")
console.log("-----------")
reverseword("Saya belajar javascript")
console.log("-----------")
divideAndSort(5956560159466056)



