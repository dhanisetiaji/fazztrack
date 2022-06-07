const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July',
            'August', 'September', 'October', 'November', 'Desember'];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'))
        }
    }, 4000)
}

const showMonth = (data, month) => {
    try {
        month.map(item => {
            console.log(item)
        })
    } catch (error) {
        console.log(`${error}`)
    }
}

getMonth(showMonth)