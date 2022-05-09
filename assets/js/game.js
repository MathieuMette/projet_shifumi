// Recupération donnée page Login
var nameUser = document.getElementById('nameUser');
var imgAvatarUser = document.getElementById('imgAvatarUser');
var pseudo = localStorage.getItem('choosePseudo');
var avatar = localStorage.getItem('sourceAvatar');
nameUser.innerHTML = pseudo;
imgAvatarUser.src = avatar;

// Score Bar
var scoreUser = document.getElementById('scoreUser');
var scoreComputer = document.getElementById('scoreComputer');
var compteurUser = 0;
var compteurComputer = 0;
// Choix joueur
var sheetUser = document.getElementById('sheetUser');
var feuilleUser = document.getElementById('feuilleUser');
var stoneUser = document.getElementById('stoneUser');
var pierreUser = document.getElementById('pierreUser');
var cisorUser = document.getElementById('cisorUser');
var ciseauxUser = document.getElementById('ciseauxUser')
// Choix ordinateur
var sheetComputer = document.getElementById('sheetComputer');
var feuilleComputer = document.getElementById('feuilleComputer');
var stoneComputer = document.getElementById('stoneComputer');
var pierreComputer = document.getElementById('pierreComputer');
var cisorComputer = document.getElementById('cisorComputer');
var ciseauxComputer = document.getElementById('ciseauxComputer');
var choixOrdiName = 'Pierre';
// Modal
var modalWin = document.getElementById('staticBackdropWin');
var modalLoose = document.getElementById('staticBackdropLoose');
var modalEgal = document.getElementById('staticBackdropEgal');

// Initailisation du score sur la page
scoreUser.innerHTML = compteurUser;
scoreComputer.innerHTML = compteurComputer;

function raz () { 
    stoneUser.style.opacity = 1;
    sheetUser.style.opacity = 1;
    cisorUser.style.opacity = 1;
    feuilleUser.style.display = 'none';
    pierreUser.style.display = 'none';
    ciseauxUser.style.display = 'none';
    stoneComputer.style.opacity = 1;
    sheetComputer.style.opacity = 1;
    cisorComputer.style.opacity = 1;
    feuilleComputer.style.display = 'none';
    pierreComputer.style.display = 'none';
    ciseauxComputer.style.display = 'none';
}

function mainsOrdi () {
    var ChoixOrdiNumero = Math.random();
    if (ChoixOrdiNumero < 0.34) {
        choixOrdiName = 'Pierre';
        stoneComputer.style.opacity = 0;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'flex';
        ciseauxComputer.style.display = 'none';
    } else if (ChoixOrdiNumero<=0.34, ChoixOrdiNumero<0.66) {
        choixOrdiName = 'Feuille';
        sheetComputer.style.opacity = 0;
        stoneComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'flex';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'none';
    } else {
        choixOrdiName = 'Ciseaux';
        stoneComputer.style.opacity = 1;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 0;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'flex';
    }
}

// papier
sheetUser.addEventListener('click', function(){
    sheetUser.style.opacity = 0;
    stoneUser.style.opacity = 1;
    cisorUser.style.opacity = 1;
    feuilleUser.style.display = 'flex';
    pierreUser.style.display = 'none';
    ciseauxUser.style.display = 'none';
    // Choix aléatoire ordinateur
    mainsOrdi ()
    // Choix gagnant
    if (choixOrdiName == 'Ciseaux') {
        $('#staticBackdropLoose').modal('show');
        compteurComputer++;
        scoreComputer.innerHTML = compteurComputer;
        var closeButtonLoose = document.querySelector('#closeButtonLoose');
        closeButtonLoose.addEventListener('click', function() { 
            raz()
        })
    } else if (choixOrdiName == 'Pierre') { 
        $('#staticBackdropWin').modal('show');
        compteurUser++;
        scoreUser.innerHTML = compteurUser;
        var closeButtonWin = document.querySelector('#closeButtonWin');
        closeButtonWin.addEventListener('click', function() { 
            raz()
        })
    } else { 
        $('#staticBackdropEgal').modal('show');
        var closeButtonEgal = document.querySelector('#closeButtonEgal');
        closeButtonEgal.addEventListener('click', function() { 
            raz()
        })
    }
})
// Pierre
stoneUser.addEventListener('click', function(){
    stoneUser.style.opacity = 0;
    sheetUser.style.opacity = 1;
    cisorUser.style.opacity = 1;
    feuilleUser.style.display = 'none';
    pierreUser.style.display = 'flex';
    ciseauxUser.style.display = 'none';
    // Choix aléatoire ordinateur
    mainsOrdi ()
    // Choix gagnant
    if (choixOrdiName == 'Feuille') {
        $('#staticBackdropLoose').modal('show');
        compteurComputer++;
        scoreComputer.innerHTML = compteurComputer;
        var closeButtonLoose = document.querySelector('#closeButtonLoose');
        closeButtonLoose.addEventListener('click', function() { 
            raz()
        })
    } else if (choixOrdiName == 'Ciseaux') { 
        $('#staticBackdropWin').modal('show');
        compteurUser++;
        scoreUser.innerHTML = compteurUser;
        var closeButtonWin = document.querySelector('#closeButtonWin');
        closeButtonWin.addEventListener('click', function() { 
            raz()
        })
    } else { 
        $('#staticBackdropEgal').modal('show');
        var closeButtonEgal = document.querySelector('#closeButtonEgal');
        closeButtonEgal.addEventListener('click', function() { 
            raz()
        })
    }
})
// Ciseaux
cisorUser.addEventListener('click', function(){
    stoneUser.style.opacity = 1;
    sheetUser.style.opacity = 1;
    cisorUser.style.opacity = 0;
    feuilleUser.style.display = 'none';
    pierreUser.style.display = 'none';
    ciseauxUser.style.display = 'flex';
    // Choix aléatoire ordinateur
    mainsOrdi ()
    // Choix gagnant
    if (choixOrdiName == 'Pierre') {
        console.log($('#staticBackdropLoose'));
        $('#staticBackdropLoose').modal('show');
        compteurComputer++;
        scoreComputer.innerHTML = compteurComputer;
        var closeButtonLoose = document.querySelector('#closeButtonLoose');
        closeButtonLoose.addEventListener('click', function() { 
            raz()
        })
    } else if (choixOrdiName == 'Feuille') { 
        $('#staticBackdropWin').modal('show');
        compteurUser++;
        scoreUser.innerHTML = compteurUser;
        var closeButtonWin = document.querySelector('#closeButtonWin');
        closeButtonWin.addEventListener('click', function() { 
            raz()
        })
    } else { 
        $('#staticBackdropEgal').modal('show');
        var closeButtonEgal = document.querySelector('#closeButtonEgal');
        closeButtonEgal.addEventListener('click', function() { 
            raz()
        })

    }
})




