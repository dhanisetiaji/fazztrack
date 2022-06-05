const SeleksiNilai = (NilaiAwal, NilaiAkhir, dataArray) => {
    if (NilaiAwal > NilaiAkhir) return 'Nilai akhir harus lebih besar dari nilai awal'
    if (dataArray.length < 5) return 'Jumlah angka dalam dataArray harus lebih dari 5'

    const sorting = dataArray.sort((a, b) => { return a - b })
    const hasil = sorting.filter(item => item > NilaiAwal && item < NilaiAkhir)
    if (hasil.length < 1) return 'Nilai tidak ditemukan'
    return hasil

}

console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))