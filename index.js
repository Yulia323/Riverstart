init();

function init() {
    document.querySelector('.js-icon-close').addEventListener('click', toggleHidden);
    document.querySelector('.js-icon-open').addEventListener('click', toggleHidden);
    document.querySelector('.js-change-plan').addEventListener('click', changePlan);
    document.querySelectorAll('.js-limits_tabs_item').forEach(
        tab => tab.addEventListener('click', changeTab));
}

function toggleHidden() {
    const iconOpen = document.querySelector('.js-icon-open');
    const feature = document.querySelector('.js-feature');

    if (feature.classList.contains('hidden')) {
        feature.classList.remove('hidden');
        iconOpen.classList.add('hidden');
    } else {
        feature.classList.add('hidden');
        iconOpen.classList.remove('hidden');
    }
}

function changePlan() {
    const prices = document.querySelectorAll('.js-price');
    for (const price of prices) {
        const randomPrice = (min, max) => (min + Math.random() * (max - min)).toFixed(2);

        price.innerHTML = String(randomPrice(5, 20) + ' €');
    }
}


function changeTab(e) {
    if (e.target.classList.contains('active-tab')) return;

    let tabId = e.target.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId)

    document.querySelectorAll('.js-limits_tabs_item').forEach(tab => {
        if (tab.classList.contains('active-tab')) tab.classList.remove('active-tab');
    });

    document.querySelectorAll('.js-tab').forEach(tab => tab.classList.remove('active-tab'));

    e.target.classList.add('active-tab');
    currentTab.classList.add('active-tab');
}

