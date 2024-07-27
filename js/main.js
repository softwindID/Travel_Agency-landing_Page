$('.tour-timetable-cards').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    dots:true,
    responsive: [
        {
            breakpoint: 935,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
            },
        },
    ],
});

$('.photo-slider').slick({
   infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:true
});

$('.photo-slide-adaptive').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:true,
    adaptiveHeight: true

});

 $('.review-cards').slick({
     infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true,
    dots:true,
     responsive: [
         {
             breakpoint: 1220,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
             },
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
             },
         },
     ],
 });

$(document).ready(function() {

    $('.photo-cards').magnificPopup({
        delegate: 'a',
        type: 'image'

    });

});


document.addEventListener('DOMContentLoaded', function () {

    const programLink = document.getElementById('program-link');
    const scheduleLink = document.getElementById('schedule-link');
    const photoLink = document.getElementById('photo-link');
    const commentsLink = document.getElementById('comments-link');
    const watchProgramBtn = document.getElementById('program-button');


    function scrollToElement(element) {
        element.scrollIntoView()({
            behavior: 'smooth',

        });
    }



    programLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = document.getElementById('program');
        if (targetElement) {
            scrollToElement(targetElement);
        }
    });

    scheduleLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = '#schedule'; // id блока с расписанием
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            scrollToElement(targetElement);
        }
    });

    photoLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = '#photo'; // id блока с фото
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            scrollToElement(targetElement);
        }
    });

    commentsLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = document.getElementById('comments');
        if (targetElement) {
            scrollToElement(targetElement);
        }
    });
    watchProgramBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = document.getElementById('program');
        if (targetElement) {
            scrollToElement(targetElement);
        }
    });
});
function showThankYouMessage() {
    $('#thank-you-message').show();
}

$('#submit').click(function () {
    let name = $('#your-name');
    let phone = $('#your-phone');
    let hasError = false;

    $('.error-input').hide();
    $('.application').removeClass('red-border');

    if (!name.val()) {
        name.next().show();
        name.addClass('red-border');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.addClass('red-border');
        hasError = true;
    }

    if (hasError) {
        return;
    }

    $.ajax({
        method: "POST",
        url: "https://testologia.ru/checkout",
        data: { name: name.val(), phone: phone.val() },
    }).done(function (msg) {
        if (msg.success === 1) {
            // $('.actions-buttons').hide();
            // $('.actions-title').hide();
            // $('.actions-instructions').hide();
            showThankYouMessage();

        } else {
            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
        }
    });
});


    $('#subscribe-button').click(function () {
        console.log('Button clicked');
        let emailInput = $('#subscribe');
        let circleSubscribe = $('#circle-button-subscribe');
        if (!emailInput.val().trim()) {
            circleSubscribe.addClass('red-border');
        } else {
            circleSubscribe.removeClass('red-border');
        }
    });





function showThankYouMessage1() {
    $('#thank-you-message1').show();

}

$('#submit1').click(function () {
    let name = $('#your-name1');
    let phone = $('#your-phone1');
    let hasError = false;

    $('.error-input').hide();
    $('.application').removeClass('red-border');

    if (!name.val()) {
        name.next().show();
        name.addClass('red-border');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.addClass('red-border');
        hasError = true;
    }

    if (hasError) {
        return;
    }

    $.ajax({
        method: "POST",
        url: "https://testologia.ru/checkout",
        data: { name: name.val(), phone: phone.val() },
    }).done(function (msg) {
        if (msg.success === 1) {
            $('#inputs').hide();
            $('#submit1').hide();

            showThankYouMessage1();
            
        } else {
            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
        }
    });
});


    const openPopupBtn = document.getElementById("openPopup");
    const popup = document.getElementById("popupContainer");
    const openPopupBtn2 = document.getElementById("call-us");
    openPopupBtn.addEventListener("click", openPopupFunction);
    openPopupBtn2.addEventListener("click", openPopupFunction);

$('#close-popup').click(function() {
    $('#popupContainer').hide();
});



function openPopupFunction(e) {
    e.preventDefault();
    popup.style.display = "flex";
}


// new WOW().init();

new WOW({
    animateClass: 'animate_animated',
}).init();



document.getElementById('burger').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    let headerLine = document.querySelector('.header-line');
    menu.classList.add('active');
    headerLine.classList.add('hidden');
});

document.getElementById('close-menu').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    let headerLine = document.querySelector('.hidden');
    menu.classList.remove('active');
    if (headerLine) {
        headerLine.classList.remove('hidden');
        headerLine.classList.add('header-line');
    }

});

let read = $('.show-text-items');
read.click(function(e) {
    $(e.target).parent().hide();
    $(e.target).parent().prev().css('height','200px')
    $(e.target).parent().prev().css('-webkit-line-clamp','unset')
});
let show = $('.show-review-text-items');
show.click(function(e) {
    $(e.target).parent().hide();
    $(e.target).parent().prev().css('height','270px')
    $(e.target).parent().prev().css('-webkit-line-clamp','unset')
});
document.addEventListener('DOMContentLoaded', (event) => {

    const closeButton = document.querySelector('.close-thank-you-message');
    const thankYouMessage = document.getElementById('thank-you-message');

    closeButton.addEventListener('click', () => {

        thankYouMessage.style.display = 'none';
    });
});

document.getElementById("return-home-button").addEventListener("click", function() {
    window.location.href = "index.html"; 
});