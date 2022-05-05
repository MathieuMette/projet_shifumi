// Choix joueur
var sheetUser = document.getElementById('sheetUser');
var feuilleUser = document.getElementById('feuilleUser');
var stoneUser = document.getElementById('stoneUser');
var pierreUser = document.getElementById('pierreUser');
var cisorUser = document.getElementById('cisorUser');
var ciseauxUser = document.getElementById('ciseauxUser')
// papier
sheetUser.addEventListener('click', function(){
    sheetUser.style.opacity = 0;
    stoneUser.style.opacity = 1;
    cisorUser.style.opacity = 1;
    feuilleUser.style.display = 'flex';
    pierreUser.style.display = 'none';
    ciseauxUser.style.display = 'none';
})
// Pierre
stoneUser.addEventListener('click', function(){
    stoneUser.style.opacity = 0;
    sheetUser.style.opacity = 1;
    cisorUser.style.opacity = 1;
    feuilleUser.style.display = 'none';
    pierreUser.style.display = 'flex';
    ciseauxUser.style.display = 'none';
})
// Ciseaux
cisorUser.addEventListener('click', function(){
    stoneUser.style.opacity = 1;
    sheetUser.style.opacity = 1;
    cisorUser.style.opacity = 0;
    feuilleUser.style.display = 'none';
    pierreUser.style.display = 'none';
    ciseauxUser.style.display = 'flex';
})

// Choix ordinateur
var sheetComputer = document.getElementById('sheetComputer');
var feuilleComputer = document.getElementById('feuilleComputer');
var stoneComputer = document.getElementById('stoneComputer');
var pierreComputer = document.getElementById('pierreComputer');
var cisorComputer = document.getElementById('cisorComputer');
var ciseauxComputer = document.getElementById('ciseauxComputer')
// papier
sheetComputer.addEventListener('click', function(){
    sheetComputer.style.opacity = 0;
    stoneComputer.style.opacity = 1;
    cisorComputer.style.opacity = 1;
    feuilleComputer.style.display = 'flex';
    pierreComputer.style.display = 'none';
    ciseauxComputer.style.display = 'none';
})
// Pierre
stoneComputer.addEventListener('click', function(){
    stoneComputer.style.opacity = 0;
    sheetComputer.style.opacity = 1;
    cisorComputer.style.opacity = 1;
    feuilleComputer.style.display = 'none';
    pierreComputer.style.display = 'flex';
    ciseauxComputer.style.display = 'none';
})
// Ciseaux
cisorComputer.addEventListener('click', function(){
    stoneComputer.style.opacity = 1;
    sheetComputer.style.opacity = 1;
    cisorComputer.style.opacity = 0;
    feuilleComputer.style.display = 'none';
    pierreComputer.style.display = 'none';
    ciseauxComputer.style.display = 'flex';
})
