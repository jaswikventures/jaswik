function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        document.getElementById("name-error").innerHTML = "Name is required!";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        document.getElementById("name-error").innerHTML = "Write full name!";
        return false;
    }
    document.getElementById("name-error").innerHTML = '<i class="fas fa-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        document.getElementById("phone-error").innerHTML = "Phone no. is required!";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        document.getElementById("phone-error").innerHTML = "Invalid phone number!";
        return false;
    }
    document.getElementById("phone-error").innerHTML = '<i class="fas fa-check"></i>';
    return true
}


function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        document.getElementById("email-error").innerHTML = "Email is required!";
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        document.getElementById("email-error").innerHTML = "Email is invalid!";
        return false;
    }
    document.getElementById("email-error").innerHTML = '<i class="fas fa-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        document.getElementById("message-error ").innerHTML = 'required characters ' + left;
        return false;
    }

    document.getElementById("message-error").innerHTML = '<i class="fas fa-check"></i>';
    return true;
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        document.getElementById("submit-error").style.display = 'block';
        document.getElementById("submit-error").innerHTML = "Please fix the errors";
        setTimeout(function() { document.getElementById("submit-error").style.display = 'none'; }, 3000);
        return false;
    }
}