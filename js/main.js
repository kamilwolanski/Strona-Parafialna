const btn = document.querySelectorAll('.btn');
const btnColor = document.querySelector('.btn-color');
const navLink = document.querySelectorAll('.nav-link');
const navBar = document.querySelector('.navbar-collapse');
const navBarToggler = document.querySelector('.navbar-toggler')

btn.forEach(el =>{
    el.addEventListener('mouseover', (e)=>{
        e.target.parentElement.childNodes[3].style.left = '0px';
        e.target.parentElement.childNodes[3].style.bottom = '0px';
    })
})

btn.forEach(el =>{
    el.addEventListener('mouseout', (e)=>{
        e.target.parentElement.childNodes[3].style.left = '-20px';
        e.target.parentElement.childNodes[3].style.bottom = '-20px';
    })
})

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});