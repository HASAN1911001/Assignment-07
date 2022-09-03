
fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(response => response.json())
    .then(json =>{
        const img = document.getElementById("image");
        img.setAttribute("src", json.data[0].thumbnail_url);

        const title = document.getElementById("title");
        title.innerText = json.data[0].title;

        const text = document.getElementById("text");
        text.innerText = json.data[0].details;
    })