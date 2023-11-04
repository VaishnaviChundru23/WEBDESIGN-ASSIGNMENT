$(document).ready(function() {
    
    jQuery.validator.addMethod("emailCheck", function(value, element) {
        return this.optional(element) || /@northeastern\.edu$/.test(value);
    }, "Only @northeastern.edu email addresses are allowed.");
    
    jQuery.validator.addMethod("nameCheck", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Name must contain only letters.");

    jQuery.validator.addMethod("passwordCheck", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(value);
    }, "Password contains invalid characters.");

    $("#loginform").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                nameCheck: true
            },
            email: {
                required: true,
                emailCheck: true
            },
            password: {
                required: true,
                minlength:8
            },
            confirmpassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must contain at least 2 letters"
            },
            email: {
                required: "Please enter a valid @northeastern.edu email address",
                emailCheck: "Only @northeastern.edu email addresses are allowed."
            },
            password: {
                required: "Please enter a password",
                minlength:"password must contain 8 characters"
            },
            confirmpassword: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            }
        },
        submitHandler: function (form) {
            var name = $("#name").val();
            sessionStorage.setItem("user_name", name);
            window.location.href = "calculator.html";
        }
    });


});
