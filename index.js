"use strict";
window.addEventListener(
  "load",
  function () {
    let forms = document.getElementsByClassName("needs-validation");
    
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else if ($("#validationCustom03").val()) {
            alert("Submitted Successfully!");
          } else if ($("#validationCustom01").val()) {
            event.preventDefault();
            $(".form1").addClass("hidden");
            $(".form2").addClass("show");
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  false
);
