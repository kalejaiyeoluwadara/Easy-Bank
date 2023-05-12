// function showMenu() {
//     const menu = document.querySelector('.menus');
//     if (menu.style.display === 'none') {
//         menu.style.display = 'flex';
//     } else {
//         menu.style.display = 'none';
//     }
// }


function showMenu() {
    const menu = document.querySelector('.menus');
    if (!menu.classList.contains('show')) {
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
    }
}
