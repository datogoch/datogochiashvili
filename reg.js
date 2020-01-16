function names(){  
    var name=document.getElementById("name").value
    if (name==null || name==""){  
         alert("სახელი შეყვანილია არასწორად");
    }
    }
function mail(){
    var x=document.getElementById("mail").value
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
      alert("არასწორად შეყვანილია E-mail \n @ არ არის:"+atposition+"\n . არ არის:"+dotposition);

      }  
    }  


function par(){
    var firstpassword=document.getElementById("pass1").value;
    var secondpassword=document.getElementById("pass2").value;
    if(firstpassword==secondpassword){
    return true;
    }
    else{
    alert("პაროლები არ ემთხვევა");
    
    }
}
var pass = document.getElementById("pass1")
pass.addEventListener('keyup', function(){
    checkPassword(pass.value)
})

function checkPassword(pass1) {
  var strengthBar = document.getElementById("strength")
  var strength = 0;
  if (pass1.match(/[a-z]+/)){
      strength += 1
  }
  if (pass1.match(/[0-9]+/)){
      strength += 1
  }
  if (pass1.match(/[A-Z]+/)){
      strength += 1
  }
  if (pass1.length >5){
      strength += 1
  }
  switch(strength){
    case 0:
      strengthBar.value = 0;
      break
    case 1:
      strengthBar.value = 25;
      break
    case 2: 
      strengthBar.value = 50;
      break
    case 3:
      strengthBar.value = 75;
      break  
    case 4:
      strengthBar.value = 100;
      break
  }
}

checkPassword()