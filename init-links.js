window.onload = init;
function init() {
    const nav = document.querySelectorAll('.js-nav_item');
    const url = document.location.href;

    for (const a of nav) {
        if (url.includes(a.href)) a.classList.add('active-link');
    }
}
