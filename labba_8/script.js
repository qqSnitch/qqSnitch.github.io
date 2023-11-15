const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
button.addEventListener("click",()=>{
    form.classList.add("open");
    popup.classList.add("open");
    history.pushState(null, null, '1.html');
    history.forward();
});

let popupOpen = false;

$(".popup-link").click(function() {
    showPopup();
});

$(".popup-close").click(function() {
    window.history.back();
});

function showPopup() {
    if (popupOpen) {
        window.history.back();
    }
    popupOpen = true;
    window.history.pushState("forward", null, "");
    $(".popup").addClass("open");
}

function hidePopup() {
    popupOpen = false;
    $(".popup").removeClass("open");
}

$(window).on("popstate", function() {
    hidePopup();
});
$(function(){
  $(".formcarryForm").submit(function(e){
    e.preventDefault();
    var href = $(this).attr("action");
    
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
          // This will be fired after request is complete whether it's successful or not.
          // Use this block to run some code after request is complete.
          var frm = document.getElementsByName('myForm')[0];
          frm.submit(); // Submit the form
          frm.reset();  // Reset all form data
          return false; // Prevent page refresh
        }
    });
  });
});
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Отправка!');
}
function submitForm() {
  // Get the first form with the name
  // Usually the form name is not repeated
  // but duplicate names are possible in HTML
  // Therefore to work around the issue, enforce the correct index
  var frm = document.getElementsByName('contact-form')[0];
  frm.submit(); // Submit the form
  frm.reset();  // Reset all form data
  return false; // Prevent page refresh
}
const applicantForm = document.getElementById('myForm');
applicantForm.addEventListener('submit', handleFormSubmit);