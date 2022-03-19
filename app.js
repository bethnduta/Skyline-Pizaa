let searchbtn = document.querySelector('#search');
let searchform = document.querySelector('.head.search-bar');

searchbtn.onclick = () => {
    searchfrm.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.head .navbar');
menu.onclick = () => {
    menu.classList.toggle('active');
    searchfrm.classList.remove('active');
