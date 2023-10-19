document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.getElementById("button1");
    button1.addEventListener("click", index);
});
window.addEventListener("DOMContentLoaded", function (event) {
    var r = document.getElementById("radios");
    var check = document.querySelectorAll(".check input[type=checkbox]");
    r.addEventListener("change", function (event) {
        var radios = event.target;
        var select = document.getElementById("select1");
        var check = document.getElementById("check");
        if (radios.value == "1") {
            select.style.display = "block";
            check.style.display = "none";
        }
        if (radios.value == "2") {
            select.style.display = "none";
            check.style.display = "block";
        }
        if (radios.value == "3") {
            select.style.display = "none";
            check.style.display = "none";
        }
    });
    check.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            check = event.target;
        });
    });
});
function schet()
{
    let radios=document.getElementsByName("radio-group-1");
    let r=0;
    radios.forEach(function (e) {
        if (e.checked) {
            r=e.value;
        }
    });
    let kol=document.getElementById("kol");
    let select=document.getElementById("plitka");
    let checkbox=document.getElementsByName("vid");
    let res=document.getElementById("result1");
    let chbox=1;
    let sum=0;
    if(mod())
    {
        if(parseInt(r) === 1)
        {
            sum=parseInt(kol.value)*200*parseInt(select.options[select.selectedIndex].value);
            console.log(parseInt(select.options[select.selectedIndex].value));
            res.innerHTML = sum;
        }
        if(parseInt(r)=== 2)
        {
            checkbox.forEach(function(e){
                if(e.checked){
                    chbox+=parseInt(e.value);
                }
            })
            if(chbox>1)
            {
                chbox-=1;
            }
            sum=parseInt(kol.value)*100*parseInt(chbox);
            console.log(chbox);
            res.innerHTML = sum;
        }
        if(parseInt(r) === 3)
        {
            sum=parseInt(kol.value)*500;
            console.log(sum);
            res.innerHTML = sum;
        }
    }
    else{
        window.alert("Не правильный ввод");
    }
}
function mod() {
    let a = document.getElementById("kol").value;
    if (a >= 0) {
        return true;
    }
}
function check() {
    let a = document.getElementById("field").value;
    if (a >= 0) {
        return true;
    }
}
function index(e) {
    e.preventDefault();
    let select = document.getElementById("select");
    let field = document.getElementById("field");
    let result = document.getElementById("result");
    let sum = 0;
    if (check()) {
        sum = parseInt(select.options[select.selectedIndex].value);
        sum = parseInt(field.value) * sum;
        result.innerHTML = sum;
        return false;
    }
    window.alert("Не правильный ввод");
}

