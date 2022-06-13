const fetch = require('node-fetch')
const readline = require('readline-sync')


const GithubInfo = (username) => new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))

});


const cekSakit = (status = false) => {
    return new Promise((resolve, reject) => {
        const msg = 'LAGI SEHAT'
        if (status === false) {
            resolve(msg)
        } else {
            reject(new Error('Sedang Sakit'))
        }
    })
}



(async () => {
    try {
        console.log('======== PROGRAM 1 GET GITHUB INFO ========')
        const username = await readline.question('Username Github: ')
        const GetInfo = await GithubInfo(username)
        if (!GetInfo.login) return console.log('Username Tidak ada!')
        console.log(`\n+++++ GET GITHUB INFO @${GetInfo.login} +++++\n`)
        console.log(`Username: ${GetInfo.login}`)
        console.log(`Nama: ${GetInfo.name}`)
        console.log(`Following: ${GetInfo.following}`)
        console.log(`Followers: ${GetInfo.followers}\n\n`)
        console.log('==== PROGRAM 2 CEK SAKIT ====')
        const sakit = await cekSakit(false)
        console.log(sakit)
    }
    catch (e) {
        console.log(`${e}`)
    }
})();