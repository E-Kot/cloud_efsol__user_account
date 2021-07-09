
// Adding category name (attribute value) to page url and page title

(function () {
    let filterNav = document.querySelectorAll('.filter-nav');
    let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;

    for (let i = 0; i < filterNav.length; i++) {
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


// form in accordion item (add modal callback)

(function () {

    let el1 = document.querySelectorAll('.accordion-item');

    for (let i = 0; i < el1.length; i++) {
        el1[i].onclick = function() {
            let ele = this.querySelector('.uk-open .service-form');
            if(ele) {
                ele.addEventListener("submit", callback, false);  //Modern browsers
            }
            function callback() {
                UIkit.modal('#modal__callback-service-form').show();
            }

        }

    }

})();




