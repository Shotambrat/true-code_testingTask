
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
