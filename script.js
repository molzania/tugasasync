//Soal 1
// Lakukan pengambilan data yang berasal dari API berikut “https://api.github.com/users/<github_username>”
// Gunakan promise utk mendapatkan data
// Tampilkan data menggunakan DOM minimal nama, gambar profile, bio, followers, followings
// Tampilkan serapih mungkin menggunakan CSS

// let API1 = "https://api.github.com/users/molzania";
// let profileContainer = document.getElementById("profile-github");

// const getDataAPI1 = () => {
//     fetch(API1, {method:"GET"}) 
//     .then(response1 => response1.json()),
//     .then(result1 => {console.log(result1)},
//     .catch(error => {console.log(error)}),

// )}

let image = document.getElementById("gambar");
let nama = document.getElementById("nama");
let blog = document.getElementById("blog");
let bio = document.getElementById("bio");
let lokasi = document.getElementById("location");
let twitter = document.getElementById("twitter")

const getDataAPI1 = () => {
    const API1 = "https://api.github.com/users/molzania";
    const option1 = {
        method: "GET"
    }
    fetch(API1, option1)
    .then(response => response.json())
    .then(result => {
        console.log(result)
    image.innerHTML = `<img src="${result.avatar_url}">`
    nama.innerHTML = `<p>Name : ${result.name}</p>`
    blog.innerHTML = `<p>Blog : ${result.blog}</p>`
    lokasi.innerHTML = `<p>Lokasi : ${result.location}</p>`
    twitter.innerHTML = `<p>Twitter : @${result.twitter_username}</p>`
    bio.innerHTML = `<h4>Bio</h4>
    <p>${result.bio}</p>`


}
    )
    .catch(error => console.log(error, "ERROR"))
}

getDataAPI1();

//Soal 2
// Ambil lah data dari API berikut “https://restcountries.eu/rest/v2/all”
// Gunakan async await
// Tampilkan seluruh bendera negara dan nama negaranya ke dalam dom

let countriesContainer = document.getElementById("countries");

let API2 = "https://restcountries.eu/rest/v2/all";

fetch(API2, {method:"GET"})
.then(result2 => result2.json())
.then(result2 => {
    console.log(result2)
    for (let b=0;b<=23;b++){
        countriesContainer.innerHTML += `
        <div id="flag"> 
        <img src='${result2[b].flag}'/>
        <span>${result2[b].name}</span>
         </div>` }
})
.catch(error2 => {
    console.log(error2);
})