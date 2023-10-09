document.addEventListener("DOMContentLoaded", function () { 
    let button1 = document.getElementById("button1"); 
    button1.addEventListener("click", index); 
});
function check()
{
    let a = document.getElementById("field").value;
    if(a>0)return true;
}
function index(e) 
{ 
    e.preventDefault();
    let select = document.getElementById("select");
    let field = document.getElementById("field");
    let result = document.getElementById("result");
    let sum = 0;
    if(check())
    {
        sum = parseInt(select.options[select.selectedIndex].value);
        sum = parseInt(field.value) *sum;
        result.innerHTML =sum;
        return false;
    }else{
        alert ("Не правильный ввод")
    }
  }
