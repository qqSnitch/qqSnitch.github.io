/*global $*/
const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
button.addEventListener("click",function(e){
  form.classList.add("open");
  popup.classList.add("open");
  window.history.pushState(null, null, "1.html");
  window.history.forward();
});

let popupOpen = false;

$(".popup-link").click(function() {
    showPopup();
});

function showPopup() {
    if (popupOpen) {
        window.history.back();
    }
    popupOpen = true;
    window.history.pushState("forward", null, "1.html");
    $("#myForm").addClass("open");
    $(".popup").addClass("open");
}

function hidePopup() {
    popupOpen = false;
    $("#myForm").removeClass("open");
    $(".popup").removeClass("open");
}

$(window).on("popstate", function() {
    hidePopup();
});
$(function(){
  $(".formcarryForm").submit(function(e){
    e.preventDefault();
    let href = $(this).attr("action");
    $.ajax({
        type: "POST",
        url: href,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        success: function(response){
          if(response.status == "success"){
              alert("We received your submission, thank you!");
          }
          else if(response.code === 422){
            alert("Field validation failed");
            $.each(response.errors, function(key) {
              $('[name="' + key + '"]').addClass('formcarry-field-error');
            });
          }
          else{
            alert("An error occured: " + response.message);
          }
        },
        error: function(jqXHR, textStatus){
          const errorObject = jqXHR.responseJSON

          alert("Request failed, " + errorObject.title + ": " + errorObject.message);
        },
        complete: function(){ 
          document.getElementById("form").reset(); 
        }
    });
  });
});
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Отправка!');
}

const applicantForm = document.getElementById('myForm');
applicantForm.addEventListener('submit', handleFormSubmit);
