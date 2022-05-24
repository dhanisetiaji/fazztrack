let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
console.log("======= DATA AWAL =======")

console.log(data)

console.log("======= SOAL A =======")

let editData = {
    ...data,
    name: "Dhani Setiaji",
    email: "dhanisetiaji99@gmail.com",
    hobby: "belajar"
}
console.log(editData)

console.log("======= SOAL B =======")

const { address: { street, city } } = data
console.log(`${street} \n${city}`)