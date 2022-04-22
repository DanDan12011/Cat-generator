let button = document.querySelector("button");

button.addEventListener("click", fetchPics);

function fetchPics() {
    let cats = document.querySelector(".cats")
    cats.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
       let catsimgurl = data[0].url

       let catsimgel = document.createElement("img")
       catsimgel.setAttribute('src', `${catsimgurl}`)
       catsimgel.classList.add('showcase')
       
       let cats = document.querySelector(".cats")
       cats.appendChild(catsimgel)

    })
    .catch(err => console.log(err))
}