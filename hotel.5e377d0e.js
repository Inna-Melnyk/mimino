var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".backdrop").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".js-open-modal").forEach((e=>{e.addEventListener("click",(function(){document.querySelectorAll("body").forEach((e=>e.classList.add("no-scroll")))}))})),document.querySelectorAll(".modal-close-btn").forEach((e=>{e.addEventListener("click",(function(){document.querySelectorAll("body").forEach((e=>e.classList.remove("no-scroll")))}))})),document.querySelectorAll(".backdrop").forEach((e=>{e.addEventListener("click",(function(){document.querySelectorAll("body").forEach((e=>e.classList.remove("no-scroll")))}))}))}));new Swiper(".swiper-rest-details",{direction:"horizontal",loop:!0,navigation:{nextEl:".arrow-button-next",prevEl:".arrow-button-prev"},slidesPerView:"auto",breakpoints:{320:{spaceBetween:20},414:{spaceBetween:20},1024:{spaceBetween:25},1280:{spaceBetween:50}}}),new Swiper(".swiper-hotel-details",{direction:"horizontal",loop:!0,navigation:{nextEl:".arrow-button-next",prevEl:".arrow-button-prev"},slidesPerView:"auto",breakpoints:{320:{spaceBetween:20},414:{spaceBetween:20},1024:{spaceBetween:25},1280:{spaceBetween:50}}});
//# sourceMappingURL=hotel.5e377d0e.js.map
