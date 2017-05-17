var link = document.querySelector(".title-form-search");
      var popup = document.querySelector(".search-form");
      var close = popup.querySelector(".search-form-show");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("search-form-show");
      });
      
      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("search-form-show");
      });