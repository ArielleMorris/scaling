$(document).ready(function(){
  var menu_btn = document.querySelector("#menu-btn");
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    menu_btn.addEventListener("click", () => {
      sidebar.classList.toggle("active-nav");
      container.classList.toggle("active-cont");
    });
    
    $(".navbar-toggler").click(function () {
        $(".wrapper").toggleClass("move-to-right");
        $("body").toggleClass("fixed");
        $(".click-menu-btn").toggleClass("change-btn");
    });
    
    $(".close-navbar-toggler").click(function () {
        $(".wrapper").removeClass("move-to-right");
    });

    if ($(window).width() > 991) {
      bannerWidth();
    }
    $(window).resize(function(){
      if ($(window).width() > 991) {
        bannerWidth();
      }
    });

    function bannerWidth() {
      $(".banner-img").width(($(".banner").width() / 2)-15);
    }
});

$('.our-client-slider').slick({
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
});

$(".checkbox-menu").on("change", "input[type='checkbox']", function() {
    $(this).closest("li").toggleClass("active", this.checked);
});

$(document).on('click', '.allow-focus', function (e) {
    e.stopPropagation();
});

var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function() {
  $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function() {
  $droparea.removeClass('is-active');
});

// change inner text
$fileInput.on('change', function() {
  var filesCount = $(this)[0].files.length;
  var $textContainer = $(this).prev().prev();

  if (filesCount === 1) {
    // if single file is selected, show file name
    var fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
  } else {
    // otherwise show number of files
    $textContainer.text(filesCount + ' Select files');
  }
});


$(".contact-form-inner").on("submit",function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "contact.php",
    type: "POST",
    data:formData,
    cache:false,
                contentType: false,
                processData: false,
    success: function (data) {
      console.log(data);
      if($.trim(data) == 'done'){
        window.location.href = 'contact-form-success.html';        
      }

    }
  });
})