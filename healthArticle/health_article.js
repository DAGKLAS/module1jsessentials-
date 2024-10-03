// Initialize the XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the URL to the JSON file path
var url = './health_article.json';  // Adjust this path if the file is located elsewhere

// Open a new GET request
xhr.open('GET', url, true);

// Specify that the response type is JSON
xhr.responseType = 'json';

// Event handler for when the request is completed
xhr.onload = function() {
  if (xhr.status === 200) {
    // The response is automatically parsed as JSON due to xhr.responseType = 'json'
    var healthData = xhr.response;

    // Call the function to display articles
    displayArticles(healthData);
  } else {
    console.error('Failed to fetch articles. Status: ' + xhr.status);
  }
};

// Handle network errors
xhr.onerror = function() {
  console.error('Network error occurred while fetching health articles.');
};

// Send the request
xhr.send();

// Function to display health articles on the web page
function displayArticles(healthData) {
  var articlesDiv = document.getElementById("articles");

  // Iterate over each article and create HTML structure
  healthData.articles.forEach(function(article) {
    // Create a new div for each article
    var articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    // Title of the article
    var title = document.createElement("h2");
    title.textContent = article.title;
    articleDiv.appendChild(title);

    // Description of the article
    var description = document.createElement("p");
    description.textContent = article.description;
    articleDiv.appendChild(description);

    // List for ways to achieve the goal
    var waysToAchieveTitle = document.createElement("h3");
    waysToAchieveTitle.textContent = "Ways to Achieve:";
    articleDiv.appendChild(waysToAchieveTitle);

    var waysToAchieveList = document.createElement("ul");
    article.ways_to_achieve.forEach(function(way) {
      var li = document.createElement("li");
      li.textContent = way;
      waysToAchieveList.appendChild(li);
    });
    articleDiv.appendChild(waysToAchieveList);

    // List for benefits
    var benefitsTitle = document.createElement("h3");
    benefitsTitle.textContent = "Benefits:";
    articleDiv.appendChild(benefitsTitle);

    var benefitsList = document.createElement("ul");
    article.benefits.forEach(function(benefit) {
      var li = document.createElement("li");
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });
    articleDiv.appendChild(benefitsList);

    // Append the articleDiv to the main articles container
    articlesDiv.appendChild(articleDiv);
  });
}
