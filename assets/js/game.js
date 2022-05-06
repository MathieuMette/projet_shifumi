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
var ciseauxComputer = document.getElementById('ciseauxComputer')
// Modal
var modalWin = document.getElementById('modalWin');
var modalLoose = document.getElementById('modalLoose')
var modalEgal = document.getElementById('modalEgal')

scoreUser.innerHTML = compteurUser;
scoreComputer.innerHTML = compteurComputer;

// papier
sheetUser.addEventListener('click', function(){
    sheetUser.style.opacity = 0;
    stoneUser.style.opacity = 1;
    cisorUser.style.opacity = 1;
    feuilleUser.style.display = 'flex';
    pierreUser.style.display = 'none';
    ciseauxUser.style.display = 'none';
    var ChoixOrdiNumero = Math.random();
    if (ChoixOrdiNumero < 0.34) {
        var choixOrdiName = 'Pierre';
        stoneComputer.style.opacity = 0;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'flex';
        ciseauxComputer.style.display = 'none';
    } else if (ChoixOrdiNumero<=0.34, ChoixOrdiNumero<0.66) {
        var choixOrdiName = 'Feuille';
        sheetComputer.style.opacity = 0;
        stoneComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'flex';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'none';
    } else {
        var choixOrdiName = 'Ciseaux';
        stoneComputer.style.opacity = 1;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 0;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'flex';
    }
    // Choix gagnant
    if (choixOrdiName == 'Ciseaux') {
        modalLoose.classList.add('show');;
        compteurComputer++;
        scoreComputer.innerHTML = compteurComputer;
    } else if (choixOrdiName == 'Pierre') { 
        modalWin.classList.add('show');
        compteurUser++;
        scoreUser.innerHTML = compteurUser;
    } else { 
        modalEgal.classList.add('show');;
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
    var ChoixOrdiNumero = Math.random();
    if (ChoixOrdiNumero < 0.34) {
        var choixOrdiName = 'Pierre';
        stoneComputer.style.opacity = 0;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'flex';
        ciseauxComputer.style.display = 'none';
    } else if (ChoixOrdiNumero<=0.34, ChoixOrdiNumero<0.66) {
        var choixOrdiName = 'Feuille';
        sheetComputer.style.opacity = 0;
        stoneComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'flex';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'none';
    } else {
        var choixOrdiName = 'Ciseaux';
        stoneComputer.style.opacity = 1;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 0;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'flex';
    }
    // Choix gagnant
    if (choixOrdiName == 'Feuille') {
        modalLoose.style.visibility = 'visible';
        compteurComputer++;
        scoreComputer.innerHTML = compteurComputer;
    } else if (choixOrdiName == 'Ciseaux') { 
        modalWin.style.visibility = 'visible';
        compteurUser++;
        scoreUser.innerHTML = compteurUser;
    } else { 
        modalEgal.style.visibility = 'visible';
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
    var choixOrdiNumero = Math.random();
    if (choixOrdiNumero < 0.34) {
        var choixOrdiName = 'Pierre';
        stoneComputer.style.opacity = 0;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'flex';
        ciseauxComputer.style.display = 'none';
    } else if (choixOrdiNumero<=0.34, choixOrdiNumero<0.66) {
        var choixOrdiName = 'Feuille';
        sheetComputer.style.opacity = 0;
        stoneComputer.style.opacity = 1;
        cisorComputer.style.opacity = 1;
        feuilleComputer.style.display = 'flex';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'none';
    } else {
        var choixOrdiName = 'Ciseaux';
        stoneComputer.style.opacity = 1;
        sheetComputer.style.opacity = 1;
        cisorComputer.style.opacity = 0;
        feuilleComputer.style.display = 'none';
        pierreComputer.style.display = 'none';
        ciseauxComputer.style.display = 'flex';
    };
    // Choix gagnant
    if (choixOrdiName == 'Pierre') {
        modalLoose.style.visibility = 'visible';
        compteurComputer++;
        scoreComputer.innerHTML = compteurComputer;
    } else if (choixOrdiName == 'Feuille') { 
        modalWin.style.visibility = 'visible';
        compteurUser++;
        scoreUser.innerHTML = compteurUser;
    } else { 
        modalEgal.style.visibility = 'visible';
    }
})



