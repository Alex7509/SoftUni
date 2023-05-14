function getArticleGenerator(articles) {

    let div = document.getElementById('content');

    return function showText() {
        if (articles.length > 0) {
            let current = articles.shift();

            let article = document.createElement('article');
            article.textContent = current;
            div.appendChild(article);
        }
    }
}
