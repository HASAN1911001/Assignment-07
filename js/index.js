fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(response => response.json())
    .then(json => json.data.news_category)
    .then(data => category(data))

function category(data)
{
    const ul = document.getElementById('category');

    for(const i in data)
    {
        const button = document.createElement('button');

        button.innerText = data[i].category_name; 
        button.setAttribute("id", data[i].category_id);
        button.setAttribute("onclick", `displayNews('${data[i].category_id}')`)
        ul.appendChild(button);
    }
}

function displayNews(category_id)
{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

    fetch(url)
        .then(response => response.json())
        .then(json => json.data)
        .then(data => newsD(data))
}

function newsD(news)
{
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = '';
    for(n in news)
    {

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');

        newsDiv.innerHTML = `
            <div class="row g-0">
            <div class="col-md-4">
                <img id="image" src="${news[n].thumbnail_url}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 id ="title" class="card-title">${news[n].title}</h5>
                <p id="text" class="card-text">${news[n].details}.slice(0, 300)</p>
                </div>
                <div class="d-flex">
                    <div class="mr-auto p-2">
                    <img src="${news[n].author.img}" width="30" height="30" class="d-inline-block align-top">
                    ${news[n].author.name}
                    </div> 
                    <p class="p-2">Views: ${news[n].total_view}</p>
                    <button type="button" class="btn btn-primary ml-auto p-2">Primary</button>

                </div>
            </div>
            </div>
        `;
        newsContainer.appendChild(newsDiv);
    }
}
