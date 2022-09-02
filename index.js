fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(response => response.json())
    .then(json => json.data.news_category)
    .then(data => {
        const ul = document.getElementById('category');

        for(i in data)
        {
            const a = document.createElement('a');

            a.innerText = data[i].category_name; 
            a.setAttribute("class", "nav-link")
            a.setAttribute("href", "#");
            ul.appendChild(a);
        }
    })


// const ul = document.getElementById('catagory')
// for(const catagory of )