


function validate()
{
let user=document.getElementById("exampleInputEmail1");
let pass=document.getElementById("exampleInputPassword1");
let label=document.getElementById("check");
let  regexp=/^([a-zA-Z0-9\.-_])$/;
     if(user.value==""|| pass.value==""|| regexp.test(pass))
     {
         alert("Please fill Empty fields.")
         label.style.visibility="visible";
         label.innerHTML="invalid";
         label.style.color="red";
         return false;
     }
     else{
        label.style.visibility="visible";
        label.innerHTML="valid";
        label.style.color="green";
        return true;
     }
}






