const magnifyingGlass = document.querySelector('.magnifyingGlass')

const searchClickHandler = () => {
    const searchBar = document.querySelector('.searchBar')
    searchBar.classList.add('visible')
}

magnifyingGlass.addEventListener('click', searchClickHandler)