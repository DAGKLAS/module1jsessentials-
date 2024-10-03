var xhr = new XMLHttpRequest() ;
var url = '/.health_article.json' ;

xhr.open('GET' , url , true) ;
//GET :Specifies the HTTP method used for the request (in this case, a GET request).
//URL : Represents the URL from where you will fetch the data 
//true : indicates if the request is asychronous 

xhr.responseType='json' ; //we inform XHR object that the expected response from the server should be in JSON format .

xhr.onload=function() {
  var articles = xhr.response.articles ;  //to retrieve the articles array from JSON repsonse .
  var articlesDiv =document.getElementById('articles') ; // to retrieve the HTML element with the ID 'articles' where the fetched content will be displayed . 
   
}

  articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
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
  });