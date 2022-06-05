const printSegitiga = 6

if (typeof (printSegitiga) == 'number') {
    let hasil = '';
    for (let i = 0; i <= printSegitiga; i++) {
        for (let j = 1; j <= printSegitiga - i; j++) {
            hasil += j
            // console.log(j)
        }
        hasil += '\n';
    }
    console.log(hasil)
} else {
    console.log("Data harus number")
}