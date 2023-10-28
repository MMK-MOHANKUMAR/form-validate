
let form = document.querySelector("#form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let lastname = document.getElementById("lastname")
let number = document.getElementById("number")
let address = document.getElementById("address")
// let submit=document.getElementById("submit")

form.addEventListener('submit',(e)=>{
    
   if( !formvalidation()){
    e.preventDefault();
   } 
      form.addEventListener("input",() =>{
     formvalidation()
    })
})
function formvalidation(){
    let usernameValue=username.value.trim();
    let lastnameValue=lastname.value.trim();
    let emailValue=email.value.trim();
    let numbervalue=number.value.trim();
    let addressvalue=address.value.trim();
    let success=true


    if(usernameValue===""){
        success=false
       
        setError(username,"Please Enter First Name")
    }
    else{

        setSuccess(username)
    }
    if(lastnameValue===""){
    success=false
        setError(lastname,"Please Enter Last  Name")
    }
    else{

        setSuccess(lastname)
    }if(numbervalue===""){
        success=false
        setError(number," Enter Mobile Number  Name")
    }
    else{

        setSuccess(number)
    }
    if(addressvalue===""){
         success=false
        setError(address,"Please Enter Address")
    }
    else{

        setSuccess(address)
    }

    if(emailValue===""){
         success=false
        setError(email,"Enter your email Id")
    }
    else if (!validateEmail(emailValue)){
         success=false
        setError(email,"please enter valid email")
    }
    else{
        setSuccess(email)
    }

    return success;
}

function setError(element,message){ 
    let inputgro=element.parentElement;
    let errorElement=inputgro.querySelector("small")

    errorElement.innerText=message;
    inputgro.classList=("error input")
    inputgro.classList.remove(".success")
}
function setSuccess(element){
    let inputgro=element.parentElement;
    let errorElement=inputgro.querySelector("small")

    errorElement.innerText="";
    inputgro.classList=("success input")
    inputgro.classList.add(".error")
   
} 
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  let person1=document.getElementById("person")
  let temp=document.getElementById("temp")
  let temps=document.getElementById("temps")
  temp.style.display="none"
  temps.style.display="none"
       
  person1.addEventListener("click",()=>{
    if(person1.value =="stu"){
        let temp=document.getElementById("temp")
        temp.style.display="block"
        temps.style.display="none"
    }
    else if(person1.value =="emp"){
        let temps=document.getElementById("temps")
        temps.style.display="block"
        temp.style.display="none"
    }
  })




