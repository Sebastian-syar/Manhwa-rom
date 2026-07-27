const reader = document.getElementById("reader");

const params = new URLSearchParams(window.location.search);

const series = params.get("series");
const chapter = params.get("chapter");

if (!series || !chapter) {

    reader.innerHTML = "<h2 style='text-align:center'>Capitol inexistent.</h2>";

    throw new Error("Lipsesc parametrii.");

}

fetch(`data/${series}/learning${chapter}.json`)

.then(response => response.json())

.then(data => {

    document.getElementById("seriesTitle").textContent = data.series;

    document.getElementById("chapterTitle").textContent =
    "Capitolul " + data.chapter;

    data.pages.forEach(src => {

        const img = document.createElement("img");

        img.src = src;

        img.className = "page";

        img.loading = "lazy";

        reader.appendChild(img);

    });

})

.catch(() => {

    reader.innerHTML = "<h2 style='text-align:center'>Capitolul nu există.</h2>";

});