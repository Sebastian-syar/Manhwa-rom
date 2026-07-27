const series = [

{
    title: "Learning the Hard Way",
    chapter: "Capitole 92",
    rating: "7.5",
    genre: "Erotica",
    image: "https://i.imgur.com/nApRQut.jpeg",
    link: "learning.html",
},

{
    title: "Absolute Hypnosis in Another World",
    chapter: "Capitole 85",
    rating: "9.4",
    genre: "Action • Fantasy",
    image: "https://i.imgur.com/UEmSo5f.jpeg",
    link: "absolute.html",
},

];

const container = document.getElementById("series-list");

function loadSeries(data){

container.innerHTML="";

data.forEach(manhwa=>{

container.innerHTML+=`

<div class="card">

    <img src="${manhwa.image}"alt="${manhwa.title}">

    <div class="info">

        <h3>${manhwa.title}</h3>

        <span class="rating">⭐ 7.25</span>

        <p class="genre">
            Action • Fantasy
        </p>

        <p>${manhwa.chapter}</p>
        <a href="${manhwa.link}" class="read-btn">Citește acum</a>
        
    </div>

</div>

`;

});

}

loadSeries(series);

const search=document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const result=series.filter(item=>{

return item.title.toLowerCase().includes(value);

});

loadSeries(result);

});

const slides=document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},4000);

