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
            <div class="row g-0" style="height:300px;">
            <div class="col-md-4">
                <img id="image" src="${news[n].thumbnail_url}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 id ="title" class="card-title">${news[n].title}</h5>
                <p id="text" class="card-text" style="white-space:nowrap;  overflow:hidden; text-overflow: ellipsis;">${news[n].details}</p>
                </div>
                <div class="d-flex">
                    <div class="mr-auto p-2">
                    <img src="${news[n].author.img}" width="30" height="30" class="d-inline-block align-top">
                    ${news[n].author.name}
                    </div> 
                    <p class="p-2">Views: ${news[n].total_view}</p>
                    <button type="button" class="btn btn-primary" onclick="detailsNews('${news[n]._id}')" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Read</button>

                </div>
            </div>
            </div>
        `;
        newsContainer.appendChild(newsDiv);
    }
}

function detailsNews(news_id)
{
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;

    fetch(url)
        .then(response => response.json())
        .then(json => modal(json.data[0]))
    
}

function modal(news)
{
    const modalTitle = document.getElementById("modal-title");
    modalTitle.innerText = news.title;

    const modalDetails = document.getElementById("modal-details");
    modalDetails.innerText = news.details;
}





