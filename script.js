//Soal 1
// Lakukan pengambilan data yang berasal dari API berikut “https://api.github.com/users/<github_username>”
// Gunakan promise utk mendapatkan data
// Tampilkan data menggunakan DOM minimal nama, gambar profile, bio, followers, followings
// Tampilkan serapih mungkin menggunakan CSS

// const getDataAPI1 = () => {
//     const API1 = "https://api.github.com/users/molzania";
//     const option1 = {
//         method: "GET";
//     }
//     fetch(API1, option1)
//     .then(response => response.json()),
//     .then(result => console.log(result)),
//     .catch(error => console.log(error, "ERROR")),
// }


//Soal 2
// Ambil lah data dari API berikut “https://restcountries.eu/rest/v2/all”
// Gunakan async await
// Tampilkan seluruh bendera negara dan nama negaranya ke dalam dom

let API2 = "https://restcountries.eu/rest/v2/all";

fetch(API2, {method:"GET"})
.then(result => result.json())
then(result =>
    console.log(result))
.catch(error => {
    console.log(error);
})