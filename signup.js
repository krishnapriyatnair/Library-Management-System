
let user=document.getElementById("exampleInputEmail1");
let pass=document.getElementById("exampleInputPassword1");
let add=document.getElementById("inputAddress");
let city=document.getElementById("inputCity");
let zip=document.getElementById("inputZip");
function validate()
{
     let username=document.getElementById("validationServer01");
     let label=document.getElementById("check");
     let  regexp=/^[A-z]$/;
     if(user.value==""|| pass.value=="" || add.value==""||city.value==""||zip.value==""||regexp.test(username))
     {
          alert("Please fill Empty fields.")
         label.style.visibility="visible";
     //     label.innerHTML="invalid";
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




    
