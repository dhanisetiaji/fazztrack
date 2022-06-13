const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

// cekHariKerja('sabtu').then(result => {
//     console.log(result)
// }).catch(err => {
//     // console.log(`${err}`)
//     console.log(err)
// })
/**
 * Disini cara yang dipakai memakai then catch dimana jika parameter kita isi argument yg
 * sesuai list dataDay maka akan mengembalikan hari yang kita isi dan jika selain dataDay akan
 * memunculkan eror hari ini bukan hari kerja
 */

async function cek() {
    try {
        const result = await cekHariKerja('senin')
        console.log(result)
    } catch (err) {
        console.log(`${err}`)
    }
}

cek()

/**
 * disini memakai async try catch dimana didalam try saya inisialisasikan terlebih dahulu,
 * lalu fungsi dari await itu sendiri dimaksdkan agar menunggu proses itu selesai dulu baru
 * mengeksekusi perintah selanjutnya
 * jika memasukan sesuai dataDay maka muncul hari 
 * dan jika tidak sama maka keluar pesan eror
 */