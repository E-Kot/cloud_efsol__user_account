
// Adding category name (attribute value) to page url and page title

(function () {
    let filterNav = document.querySelectorAll('.filter-nav');
    let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;

    for (var i = 0; i < filterNav.length; i++) {
        filterNav[i].onclick = function(event) {
            let attribute = this.querySelector('a[data-add-url]').dataset.addUrl;
            let category = this.querySelector('a[data-category-title]').dataset.categoryTitle;

            if (history.pushState) {
                let newUrl = baseUrl + '?' + attribute;
                history.pushState(null, null, newUrl);
            }
            document.getElementById("category-title").innerHTML = category;
        }
    }
    
}());



