//fetch news
let view = document.getElementById("view");
let leftView = document.getElementById("left-news");
let midView = document.getElementById("middle");
let rightView = document.getElementById("right-news")
let url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=";
let apiKey = "zQ5OGQ3NGOP2DJ9vm86ky4ZL5pmPZoCZ";

function myFunction(){
    fetch(url + apiKey)
    .then(response => response.json())
    .then( data =>{
        let htmlSegment = `
             <li><a href="${data.results[1].url}" target="_blank"><img src="${data.results[1].multimedia[0].url}"/>${data.results[1].title}<br></a></li>
             <li><a href="${data.results[3].url}" target="_blank"><img src="${data.results[3].multimedia[0].url}"/>${data.results[3].title}<br></a></li>
             <li><a href="${data.results[4].url}" target="_blank"><img src="${data.results[4].multimedia[0].url}"/>${data.results[4].title}<br></a></li> 
             <li><a href="${data.results[2].url}" target="_blank"><img src="${data.results[2].multimedia[0].url}"/>${data.results[2].title}<br></a></li>`
            leftView.innerHTML = htmlSegment;

               
                let mid = `
                 <a href="${data.results[0].url}" target="_blank"><img src="${data.results[0].multimedia[2].url}"></a>
                 <p class="mid-title"><a href="${data.results[0].url}" target="_blank"><span>${data.results[0].title}<span></a></p>
                 <p class="mid-abstract"><a href="${data.results[0].url}" target="_blank"><span>${data.results[0].abstract}</span</a></p>`
                midView.innerHTML = mid;

                let right = `<li><a href="${data.results[6].url}" target="_blank"><img src="${data.results[6].multimedia[1].url}"><br>${data.results[6].title}<br></a></li>
                             <li style="border:none"><a href="${data.results[7].url}" target="_blank"><img src="${data.results[7].multimedia[1].url}"><br>${data.results[7].title}<br><a></li>`
                rightView.innerHTML = right;    


                     
      
    }).catch( error => alert("Wrong way"));
};
myFunction();

//fetch weather

let temp = document.getElementById("temp");
let img = document.getElementById("weather-img")
let urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid="
let api = "281cf973c67f14e7700b906b122dcd24";
let nameValue = document.getElementById("name");

function myWeather() {
    fetch(urlWeather + api)
    .then(response => response.json())
    .then(data => {
        temp.innerHTML = Math.round(data.main.temp - 273) + "°";
        img.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        nameValue.innerHTML = data.name;
    })
    .catch(err => alert("Wrong city name"));
}

myWeather();

//fetch mid view (top view)
let urlTopView = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=";
let apiTopView = "fzMU6GyImYZ1MFG8AyyY6uOzhqIsRAb8";
let topViewSearch = document.getElementById('top-view-search');


function topStories(){
    fetch(urlTopView + apiTopView)
    .then(response => response.json())
    .then(data => {
        topViewSearch.innerHTML = 
        `<a href="${data.results[0].url}"><img src="${data.results[0].multimedia[2].url}"/></a>
         <li><a href="${data.results[0].url}">${data.results[0].title}</a></li>
         <li><a href="${data.results[1].url}">${data.results[1].title}</a></li>
         <li><a href="${data.results[2].url}">${data.results[2].title}</a></li>
         <li><a href="${data.results[3].url}">${data.results[3].title}</a></li>`
    })
    .catch(err => alert("Wrong Top Storeis"));
}
topStories();

//fetch world view

let urlWorldView = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=";
let worldSearch = document.getElementById('world-search')

function worldView(){
    fetch(urlWorldView + apiTopView)
    .then(response => response.json())
    .then(data => {
         worldSearch.innerHTML = 
         `<li><a href="${data.results[0].url}"><img src="${data.results[0].multimedia[2].url}"/>${data.results[0].title}</a></li>
          <li><a href="${data.results[1].url}">${data.results[1].title}</a></li>
          <li><a href="${data.results[2].url}">${data.results[2].title}</a></li>
          <li><a href="${data.results[3].url}">${data.results[3].title}</a></li>`
    })
    .catch(err => alert("Wrong World View"));
}
worldView();

//fetch business view
let urlBusiness = "https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key="
let businessSearch = document.getElementById('business-search');

function businessView(){
    fetch(urlBusiness + apiKey)
    .then(response => response.json())
    .then(data => {
        businessSearch.innerHTML = `
        <li><a href="${data.results[0].url}"><img src="${data.results[0].multimedia[3].url}"/>${data.results[0].title}</a></li>
        <li><a href="${data.results[1].url}">${data.results[1].title}</a></li>
        <li><a href="${data.results[2].url}">${data.results[2].title}</a></li>
        <li><a href="${data.results[3].url}">${data.results[3].title}</a></li>`
    })
    .catch(err => alert("Wrong business"))
}

businessView();

//fetch arts

let artsSearch = document.getElementById('arts-search');
let urlArts = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key="

function artsView(){
    fetch(urlArts + apiTopView)
    .then(response => response.json())
    .then(data => {
        artsSearch.innerHTML = `
        <li><a href="${data.results[0].url}"><img src="${data.results[0].multimedia[2].url}"/>${data.results[0].title}</a></li>
        <li><a href="${data.results[1].url}">${data.results[1].title}</a></li>
        <li><a href="${data.results[2].url}">${data.results[2].title}</a></li>
        <li><a href="${data.results[3].url}">${data.results[3].title}</a></li>`
    })
    .catch(err => alert("Wrong arts"))
}
artsView();

let apiBooks = "mp8t3UxEGKb6IE0JVADed1yFi22HIype";
let urlBooks = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=";
let books = document.getElementById("books-search");

function booksSearch(){
    fetch(urlBooks + apiBooks)
    .then(response => response.json())
    .then(data => {
        books.innerHTML = `
        <li><a href="${data.results.books[0].amazon_product_url}"><img src="${data.results.books[0].book_image}" style="width: 140px; height: 210px; "/>${data.results.books[0].title}</a></li>
        <li><a href="${data.results.books[1].amazon_product_url}">${data.results.books[1].title}</a></li>
        <li><a href="${data.results.books[2].amazon_product_url}">${data.results.books[2].title}</a></li>
        <li><a href="${data.results.books[3].amazon_product_url}">${data.results.books[3].title}</a></li>`
        
    })
    .catch(err => alert("Wrong Books"))
}
booksSearch();

//fetch weather
let city = document.getElementById('city');
let temputure = document.getElementById('temputure');
let feelLike = document.getElementById('feel-like');
let humid = document.getElementById('humid');
let imgWeather = document.getElementById('img');
let inputValue = document.getElementById('input');
let urlWeatherSearch = "https://api.openweathermap.org/data/2.5/weather?q=";
let submit = document.getElementById('submit');
let changeColor = document.getElementById('weather-forecast');

submit.addEventListener('click', () =>{
    fetch(urlWeatherSearch + inputValue.value + "&appid=" + api)
    .then(response => response.json())
    .then(data => {
         city.innerHTML = data.name;
         temputure.innerHTML = Math.round(data.main.temp - 273) + "°";
         feelLike.innerHTML = "Feel like: " + Math.round(data.main.feels_like - 273) + "°";
         humid.innerHTML = "Humidity: " + data.main.humidity;
         imgWeather.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
         changeColor.style.background = `url('${images[index]}')`;
         changeColor.style.backgroundSize = "cover";
         changeColor.style.backgroundRepeat= "no-repeat";
         inputValue.value = '';
    })
    .catch(err => alert("wrong city name"))
})

var images = [
    "https://preview.redd.it/7uqaobbptej51.jpg?width=1080&format=pjpg&auto=webp&s=80ed9577d08a635cd2de81a0f9ede4c9f81934f3",
    "https://preview.redd.it/hl6lzx8ptej51.jpg?width=1080&format=pjpg&auto=webp&s=be46f536d116b23fd79f71c48f25dac7e430f208",
    "https://preview.redd.it/1f6sid4jorj51.jpg?auto=webp&s=2c24544de33e47cd1a20a8b94223925e537050da",
    "https://cdn.vox-cdn.com/thumbor/OsF6UWiAW5eRCcBL7EzIRlKZTVI=/0x0:1066x731/1200x800/filters:focal(468x376:638x546)/cdn.vox-cdn.com/uploads/chorus_image/image/67287318/froggy.0.png"
], 
index = Math.floor(Math.random() * images.length); 

   
    

    


