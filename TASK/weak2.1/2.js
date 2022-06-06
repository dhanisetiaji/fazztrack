const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]
const searchName = (searchParams, showNum, callback) => {
    const datas = {
        data: name, searchParams, showNum
    }
    return callback(datas)
}

const search = (datas) => {
    const { data, searchParams, showNum } = datas
    const filters = data.filter((params) => {
        params = params.toLowerCase();
        return params.indexOf(searchParams) > -1;
    })
    if (filters.length <= 0) {
        return "data tidak ditemukan"
    } else {
        let tampung = [];
        for (let i = 0; i < showNum; i++) {
            tampung.push(filters[i])
        }
        return tampung
    }
}

console.log(searchName('an', 4, search))
