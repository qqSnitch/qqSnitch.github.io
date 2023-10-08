function click() 
{ 
    let select = document.getElementsByName("select");
    let field = document.getElementsByName("field");
    let result = document.getElementById("result");
    let sum;
    if(field == ""){
        alert("Вы не указали количество");
    } 
    if(select == 0){
        alert("Вы не выбрали предмет");
    }
    sum += parseInt(select.options[select.selectedIndex].value);
    sum = parseInt(field.value) *sum;
    result.innerHTML =sum;
  }