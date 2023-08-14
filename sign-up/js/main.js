nameInput = document.getElementById('inputName');
mailInput = document.getElementById('inputEmail');
passInput = document.getElementById('inputPass');


var usersArr = [];

if(  localStorage.getItem('user') != null  ){
    usersArr =  JSON.parse( localStorage.getItem('user')) 
}
else{
    usersArr = [];
}

console.log(usersArr)

function clear(){
    nameInput.value=''
    mailInput.value=''
    passInput.value=''
}




function addUser(){


    if( nameInput.value=='' || mailInput.value=='' || passInput.value==''  ){
        alert('all inputs are required')
    }
    else{
        var obj = {
            name: nameInput.value,
            email: mailInput.value,
            pass: passInput.value
        }
        usersArr.push(obj);
        localStorage.setItem('user', JSON.stringify(usersArr))
        document.getElementById('success').classList.remove('d-none')
    }
    // validate()


    clear()

 
}

function validate(){
    var regexName = /^[a-z]{3,10}$/
    var regexMail = /^[a-z]{3,10}@(yahoo|gmail).com$/
    var regexPass = / ^[0-9]{3,10}$ /

    if(regexName.test( nameInput.value ) == false ){
        alert('enter a valid name') 
    }
    else if( regexMail.test( mailInput.value ) == false ){
        alert('enter a valid mail') 
    }
    else if ( regexPass.test( passInput.value ) == false ){
        alert('enter a valid password')
    }

    
    
}
