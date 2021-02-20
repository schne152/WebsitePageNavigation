// load default page, add ability for user to define default later
var default_page = 'movies.html';
var default_page_title = 'Movies';
var page_title = document.getElementById("page_title");
var page_container = document.getElementById("page_container")

var client = new XMLHttpRequest();
client.open('GET', default_page, true);
client.onreadystatechange = function() {
  if (client.readyState == 4) {
    if (client.status == 200) {
      page_title.innerHTML = default_page_title;
      page_container.innerHTML = client.responseText;
    }
  }
}
client.send();

// navbar button click listeners

document.getElementById("movies").addEventListener("click", function() {

  var client = new XMLHttpRequest();
  client.open('GET', 'movies.html', true);
  client.onreadystatechange = function() {
    if (client.readyState == 4) {
      if (client.status == 200) {
        page_title.innerHTML = "Movies";
        page_container.innerHTML = client.responseText;
      }
    }
  }
  client.send();

});

document.getElementById("tv").addEventListener("click", function() {

  var client = new XMLHttpRequest();
  client.open('GET', 'tv.html', true);
  client.onreadystatechange = function() {
    if (client.readyState == 4) {
      if (client.status == 200) {
        page_title.innerHTML = "TV";
        page_container.innerHTML = client.responseText;
      }
    }
  }
  client.send();

});

document.getElementById("books").addEventListener("click", function() {

  var client = new XMLHttpRequest();
  client.open('GET', 'books.html', true);
  client.onreadystatechange = function() {
    if (client.readyState == 4) {
      if (client.status == 200) {
        page_title.innerHTML = "Books";
        page_container.innerHTML = client.responseText;
      }
    }
  }
  client.send();

});
