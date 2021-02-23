// load default page, add ability for user to define default later
var default_page = 'movies';
var default_page_title = 'Movies';

let button_page_navs = Array.from(document.getElementsByClassName('page_nav'));

navigateToPage('movies');

function navigateToPage(id) {
  button_page_navs.forEach(p => {
    if (p.id == id) {
      let client = new XMLHttpRequest();
      let page_html = id + '.html';
      client.open('GET', page_html, true);
      client.onreadystatechange = function() {
        if (client.readyState == 4) {
          if (client.status == 200) {
            let capitalize_id = id.charAt(0).toUpperCase() + id.slice(1);
            page_title.innerHTML = capitalize_id;
            page_container.innerHTML = client.responseText;
            document.title = "DOMNavigation." + id;
          }
        }
      }
      client.send();
    }
  });
}

button_page_navs.forEach(p => {
  let id = p.id;
  p.addEventListener('click', e => {
    history.pushState({id}, `Selected: ${id}`)
    navigateToPage(id);
  });
});

window.addEventListener('popstate', e => {
  navigateToPage(e.state.id);
});

history.replaceState({id: null}, 'Default state', './');
