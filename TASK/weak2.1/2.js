const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]
const searchName = (data, searchParams, showNum, callback) => {
    const datas = {
        data, searchParams, showNum
    }
    return callback(datas)
}

const search = (datas) => {
    const { data, searchParams, showNum } = datas
    const filters = data.filter((params) => {
        params = params.toLowerCase();
        return params.indexOf(searchParams) > -1;
    })
    if (filters.length < 3) {
        return filters
    } else {
        let tampung = [];
        for (let i = 0; i < 3; i++) {
            tampung.push(filters[i])
        }
        return tampung
    }
}

console.log(searchName(name, 'an', 3, search))
