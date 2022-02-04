$(document).ready(function(){
var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

var owl = $('#carousel1');
owl.owlCarousel({
  margin: 10,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});

var owl = $('#carousel2');
owl.owlCarousel({
  margin: 10,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});

var owl = $('#carousel3');
owl.owlCarousel({
  margin: 10,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

var owl = $('#carousel4');
owl.owlCarousel({
  margin: 80,
  loop: true,
  dots: true,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

})