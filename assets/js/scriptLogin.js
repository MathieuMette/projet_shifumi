var avatars = document.querySelectorAll(".avatar");

var woman1 = document.querySelector("#woman1");
var woman2 = document.querySelector("#woman2");
var woman3 = document.querySelector("#woman3");
var man1 = document.querySelector("#man1");
var man2 = document.querySelector("#man2");
var man3 = document.querySelector("#man3");

woman1.addEventListener('click', function() {
    woman1.classList.add('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
})
woman2.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.add('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
})
woman3.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.add('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
})
man1.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.add('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
})
man2.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.add('active');
    man3.classList.remove('active');
})
man3.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.add('active');
})


