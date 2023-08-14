var  mailInput = document.getElementById('mailInput')
var passInput = document.getElementById('passInput')

var user = [];

user = JSON.parse(localStorage.getItem('user'))

var nameInput = document.getElementById('nameInput')
var passInput = document.getElementById('passInput')

document.getElementById('btn').addEventListener('click', function() {
    if ( mailInput.value == '' || passInput.value == '' ){
        alert('all inputs are required')
        document.getElementById('btn').removeAttribute('href')
    }
    else{
        // validate()
        checkUser()
        document.getElementById('btn').setAttribute('href', '/Assignment 4-js/home/index.html')
    }
})

console.log(user)

function checkUser(){

    userObj = {
        email: mailInput.value,
        pass: passInput.value
    }



    for (  var i=0; user.length; i++  ){
        if (mailInput.value == user[i].email && passInput.value == user[i].pass){
            var x = user[i].name
            localStorage.setItem('userName', x);
            break
        } 
    }

    // if ( mailInput.value != user[i].email && passInput.value != user[i].pass ){
    //     alert('invalid email or password')
    // }

}

function validate(){
    var regexMail = /^[a-z]{3,10}@(yahoo|gmail).com$/
    var regexPass = / ^[0-9]{3,10}$ /

    if( regexMail.test(mailInput.value) == false ){
        alert('enetr valid email')
    }
    else if ( regexPass.test(passInput.validate) == false ){
        alert('enter valid pass')
    }
}