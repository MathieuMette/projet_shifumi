// var firstname = document.querySelector('#firstname');
// var form = document.querySelector('.form');
// var btnValidFirstname = document.querySelector('#btnValidFirstname');
// var helloInfo = document.querySelector('.helloInfo');
// var hello = document.querySelector('#hello')
// var info = document.querySelector('#info');
// var divEmail = document.querySelector('.divEmail')

// var email = document.querySelector('#email')
// var btnValidEmail = document.querySelector('#btnValidEmail');
// var merciSYS = document.querySelector('.merciSYS')
// var merci = document.querySelector('#merci')
// var SYS = document.querySelector('#SYS')

// btnValidFirstname.addEventListener('click', function() {
//     form.style.display ='none';
//     hello.textContent = hello.textContent +' '+ firstname.value;
//     // hello.innerHTML = '<p style="color: red;">Bonjour Tout le monde</p>';
//     helloInfo.style.display ='block';
//     divEmail.style.display ='block';
    
// })   /*'\n'+ info.textContent*/
// btnValidEmail.addEventListener('click', function() {
//     helloInfo.style.display ='none';
//     divEmail.style.display ='block';
//     alert('Merci ' + firstname.value + ', nous te confirmons que tu seras informé sur ton email : ' + email.value + '.');
//     merciSYS.style.display ='block';
//     divEmail.style.display ='none';
//     merci.textContent = merci.textContent + firstname.value;
//     SYS.value;
// })


// var divCookies = document.querySelector('.divCookies');
// var accept = document.querySelector('#accept');
// var personnalise = document.querySelector('#personnalise');
// var imgCookies = document.querySelector('.divCookies src');

// accept.addEventListener('click', function() {
//     divCookies.style.display ='none';
// })

// personnalise.addEventListener('click', function() {
//     alert('Paramétrer les cookies' + '\n' + imgCookies);
// })

var woman1 = document.querySelector('#woman1')
var woman2 = document.querySelector('#woman2')
var woman3 = document.querySelector('#woman3')
var man1 = document.querySelector('#man1')
var man2 = document.querySelector('#man2')
var man3 = document.querySelector('#man3')
var avatar = document.querySelector('.avatar')

woman1.addEventListener('click', function() {
    (woman2,woman3,man1,man2,man3).style.visibility = 'hidden';
})
    