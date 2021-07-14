
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
                document.querySelector('.button.uk-modal-close').onclick = function () {
                    ele.submit();
                }
                document.querySelector('.modal-close').onclick = function () {
                    ele.submit();
                }
            }
        }
    }
})();

// form in modal (add callback)

(function () {
    let modalFormSubmit = document.querySelectorAll('.call_modal-form');

    for (let i = 0; i < modalFormSubmit.length; i++) {
        modalFormSubmit[i].onclick = function() {
            let modalFormOpen = document.querySelector('#modal__service-form .service-form');
            if (modalFormOpen) {
                modalFormOpen.addEventListener("submit", modalCallback, false);
            }

            function modalCallback() {
                document.querySelector('.modal-service-form_wrap').style.display = 'none';              // Hide
                document.querySelector('.modal-service-form_callback').style.display = 'block';          // Show

                document.querySelector('#modal__service-form .button.uk-modal-close').onclick = function () {
                    modalFormOpen.submit();
                }
                document.querySelector('#modal__service-form .modal-close').onclick = function () {
                    modalFormOpen.submit();
                }
            }
        }
    }

})();



// form in Settings (add modal callback)

(function () {

    let settingsEl = document.querySelectorAll('.horizontal-blocks__item');

    for (let i = 0; i < settingsEl.length; i++) {
        settingsEl[i].querySelector('.button').onclick = function() {

            let FormEl = settingsEl[i].querySelector('.settings-form');

            if(FormEl) {
                FormEl.addEventListener("submit", callback1, false);  //Modern browsers
            }
            function callback1() {

                UIkit.modal('#modal__callback-settings').show();
                document.querySelector('#modal__callback-settings .button.uk-modal-close').onclick = function () {
                    FormEl.submit();
                }
                document.querySelector('#modal__callback-settings .modal-close').onclick = function () {
                    FormEl.submit();
                }
            }
        }

    }
})();



// Show / hide password

(function () {
    let passwordBlock = document.querySelectorAll('.password-block');
    for (let i = 0; i < passwordBlock.length; i++) {

        let passwordToggle = passwordBlock[i].querySelector('.password-block__toggle');
        passwordToggle.onclick = function() {
            let input = passwordBlock[i].querySelector('.password-block__input');
            input.type = (input.type==="password") ? "text" : "password";
        }

    }
})();





