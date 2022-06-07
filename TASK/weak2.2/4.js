const fetch = require('node-fetch')

const getName = () => new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
})

async function name() {
    try {
        const data = await getName()
        data.map(item => {
            console.log(item.name)
        })
    } catch (e) {
        console.log(`Terdapat masalah: ${e}`)
    }
}

name()