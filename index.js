
// for text and dots

document.addEventListener('DOMContentLoaded', function () {
    const line = document.querySelector('.label-animation__block');
    const firstText = document.querySelector('.animation__first-text');
    const dot = document.querySelector('.end-dot');
    const secText = document.querySelector('.animation__sec-text');

    line.addEventListener('animationend', function () {
        setTimeout(function () {
            firstText.style.opacity = 1;
            dot.classList.add("active")
        }, 100);

        setTimeout(function () {
            secText.style.opacity = 1;
        }, 900)
    });
});


// for hover aimation change bg location

document.addEventListener("DOMContentLoaded", function(event) {
    const firstHoverButton = document.querySelector('.hover-button__first')
    const secondHoverButton = document.querySelector('.hover-button__second')
    const bg = document.querySelector('body');

    firstHoverButton.addEventListener('mouseover', function() {
        bg.style.backgroundPosition = "25% 50%";
    });

    secondHoverButton.addEventListener('mouseover', function() {
        bg.style.backgroundPosition = "75% 50%";
    });

    firstHoverButton.addEventListener('mouseout', function() {
        bg.style.backgroundPosition = "50% 50%";
    });

    secondHoverButton.addEventListener('mouseout', function() {
        bg.style.backgroundPosition = "50% 50%";
    });
});


// for pop-up

document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

