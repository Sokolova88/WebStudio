const filterBtn = document.querySelector('.filter');
const filterItems = document.querySelectorAll('.gallery-list__item');
const btns = document.querySelectorAll('.filter-button');

function filter() {
  filterBtn.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      return;
    }
    const btnId = e.target.dataset.id;
    const target = e.target;

    if (target.classList.contains('filter-button')) {
      btns.forEach(btn => btn.classList.remove('filter-button--active'));
      target.classList.add('filter-button--active');
    }

    switch (btnId) {
      case 'btn-all':
        gefilterItems('gallery-list__item');
        break;
      case 'btn-websites':
        gefilterItems(btnId);
        break;
      case 'btn-design':
        gefilterItems(btnId);
        break;
      case 'btn-apps':
        gefilterItems(btnId);
        break;
      case 'btn-marketing':
        gefilterItems(btnId);
        break;
    }
  });
}
filter();

function gefilterItems(className) {
  filterItems.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
