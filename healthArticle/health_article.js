// Create global letibles

let url = './health_article.json';

// Making a request
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function () {
    let articles = xhr.response.articles;
    let articlesDiv = document.getElementById('articles');

    createArticles(articles, articlesDiv)
}
xhr.send();

// Making a second request
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', './health.json', true);
xhr2.responseType = 'json';
xhr2.onload = function () {
    let articles = xhr2.response.articles;
    let articlesDiv = document.getElementById('newArticles');

    createArticles(articles, articlesDiv)
}
xhr2.send();

// Creating an article
function createArticles(articles, articlesDiv){
    articles.forEach(function (article) {
        let articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        let title = document.createElement('h2');
        title.textContent = article.title;

        let description = document.createElement('p');
        description.textContent = article.description;

        let waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        let waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            let listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        let benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        let benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            let listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    })
}