const mtk = 80
const bIndonesia = 90
const bInggris = 89
const ipa = 69

if (typeof mtk == 'number' && typeof bIndonesia == 'number' && typeof bInggris == 'number' && typeof ipa == 'number') {
    const jumlah = mtk + bIndonesia + bInggris + ipa
    const rataRata = jumlah / 4
    console.log(`Rata-rata = ${rataRata}`)
    if (rataRata >= 90) {
        console.log('Grade = A')
    } else if (rataRata >= 80) {
        console.log('Grade = B')
    } else if (rataRata >= 70) {
        console.log('Grade = C')
    } else if (rataRata >= 60) {
        console.log('Grade = D')
    } else {
        console.log('Grade = E')
    }
} else {
    console.log("Harap input value dan pastikan value angka")
}
