var woman1 = document.querySelector("#woman1");
var woman2 = document.querySelector("#woman2");
var woman3 = document.querySelector("#woman3");
var man1 = document.querySelector("#man1");
var man2 = document.querySelector("#man2");
var man3 = document.querySelector("#man3");
var sourceAvatar = '';

woman1.addEventListener('click', function() {
    woman1.classList.add('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
    sourceAvatar = "assets/img/avatars_game/avatar_magali.png";
})

woman2.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.add('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
    sourceAvatar = "assets/img/avatars_game/avatar_imelda.png";
})

woman3.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.add('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
    sourceAvatar = "assets/img/avatars_game/avatar_michele.png";
})

man1.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.add('active');
    man2.classList.remove('active');
    man3.classList.remove('active');
    sourceAvatar = "assets/img/avatars_game/avatar_thomas.png";
})

man2.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.add('active');
    man3.classList.remove('active');
    sourceAvatar = "assets/img/avatars_game/avatar_ines.png";
})

man3.addEventListener('click', function() {
    woman1.classList.remove('active');
    woman2.classList.remove('active');
    woman3.classList.remove('active');
    man1.classList.remove('active');
    man2.classList.remove('active');
    man3.classList.add('active');
    sourceAvatar = "assets/img/avatars_game/avatar_demphis.png";
})


// r??cup??ration des pseudos et avatar

var go = document.getElementById('ok');

go.addEventListener('click', function() {
    var choosePseudo = document.getElementById('choosePseudo').value;
    var alertPseudo = document.querySelector('.alertPseudo');    
    var alertAvatar = document.querySelector('.alertAvatar');    
    var clickEndPseudo = document.querySelector('.btnPseudo');
    var clickEndAvatar = document.querySelector('.btnAvatar');
    if (choosePseudo == '') {
        //alerte Pseudo
        alertPseudo.style.display = 'flex';
        clickEndPseudo.addEventListener('click', function() {
            alertPseudo.style.display = 'none';
        })
    } else if (sourceAvatar == '') {
        //alerte Avatar
        alertAvatar.style.display = 'flex';
        clickEndAvatar.addEventListener('click', function() {
            alertAvatar.style.display = 'none';
        })
    } else {
        localStorage.setItem('choosePseudo', choosePseudo);
        localStorage.setItem('sourceAvatar', sourceAvatar);
        window.location.href="game.html";
    }})
