var check = document.getElementById('source1');
var label = document.getElementById('source');
var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var phone = document.getElementById("phoneNumber");
var email = document.getElementById("emailId");
var address1 = document.getElementById('streetAddress1');
var address2 = document.getElementById('streetAddress2');
var zip = document.getElementById("zipcode");
var comments = document.getElementById("comments");
var menu = document.getElementById("menu");
var city = document.getElementById('city');
var state = document.getElementById('state');
var comments1 = document.getElementById('comments1');
var comments11 = document.getElementById('comments11');
var radioButtons = document.getElementsByName('title');
var checkbox = document.getElementsByName('source');
var checkbox1 = document.getElementsByName('source100');
const form = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton');
const inputs = form.querySelectorAll('input, textarea, select');

function showText() {
    var element = document.getElementById("menu").value;
    var choice = "";
    switch (element) {
        case "appetizer":
            choice = "Crispy Chicken";
            break;
        case "roti":
            choice = "Butter Naan";
            break;
        case "Biriyani":
            choice = "Hyderabadi Chicken Biriyani";
            break;
        case "softdrink":
            choice = "Thums Up";
            break;
    }

    if (element == 'default') {
        check.hidden = true;
        label.hidden = true;
        comments1.hidden = true;
        comments11.hidden = true;
    } else {
        label.hidden = false;
        check.hidden = false;
        label.innerHTML = choice;
        var divId = document.getElementById("selectionbody");
        divId.replaceChild(label, divId.firstChild);
        divId.replaceChild(check, divId.firstChild.nextSibling);
    }
}

function validinput(object, type, nameType) {
    var regExName = /^[a-zA-Z]+$/;
    var regExEmail = /^\w+[\w-\.]@northeastern\b\.edu\b$/;
    var regExPhone = /\d{3}-\d{3}-\d{4}$/;
    var regExZip = /^\d{5}$/;
    var name = 'errorMsg' + nameType;
    switch (type) {
        case 1:
            if (!object.value.trim().match(regExName)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 3:
            if (!object.value.trim().match(regExEmail)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 4:
            if (!object.value.trim().match(regExPhone)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 5:
            if (!object.value.trim().match(regExZip)) {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 6:
        case 7:
        case 8:
            if (object.value.trim() == "") {
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 9: // Checkbox validation
            var checkedBoxes = document.querySelectorAll('input[name="source"]:checked');
            if (checkedBoxes.length === 0) {
                document.getElementById(name).style.display = "block";
            } else {
                document.getElementById(name).style.display = "none";
            }
            break;
    }
    return object.style.border === "";
}

var j = 1;

function showData() {
    var vel = "";
    var vel1 = [];
    var vel11 = "";
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            vel = radioButtons[i].value;
            break;
        }
    }

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            vel1.push(checkbox[i].value);
        }
    }

    vel11 = checkbox1[0].checked ? checkbox1[0].value : '';

    if (fname.value == "" || lname.value == "" || phone.value == "" || email.value == "" || zip.value == "" || vel == "" || vel1.length == 0 || comments.value == "" || menu.value == "default" || vel11 == "" || comments1.value == "") {
        alert("All fields are mandatory");
    } else {
        var userTable = document.getElementById("userTable");
        for (var i = j; i <= j; i++) {
            var row = userTable.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
            var cell10 = row.insertCell(9);
            var cell11 = row.insertCell(10);
            var cell12 = row.insertCell(11);
            cell1.innerHTML = vel + ' ' + fname.value + ' ' + lname.value;
            cell2.innerHTML = phone.value;
            cell3.innerHTML = email.value;
            cell4.innerHTML = address1.value;
            cell5.innerHTML = address2.value;
            cell6.innerHTML = city.value;
            cell7.innerHTML = state.value;
            cell8.innerHTML = zip.value;
            cell9.innerHTML = comments.value;
            cell10.innerHTML = vel1.toString();
            cell11.innerHTML = vel11;
            cell12.innerHTML = comments1.value;
        }
        j = j + 1;
        reset();
    }
}

function showUP(object, type) {
    var stat = false;
    var nameType = type;
    stat != stat;
    var stat = document.getElementById(nameType).checked;
    stat != stat;
    if (stat) {
        document.getElementById("comments1").style.display = "block";
        document.getElementById("comments11").style.display = "block";
        document.getElementById("comments11").attributes["required"] = true;
    } else {
        document.getElementById("comments1").style.display = "none";
        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments11").attributes["required"] = false;
    }
}

function reset() {
    fname.value = "";
    lname.value = "";
    phone.value = "";
    email.value = "";
    zip.value = "";
    comments.value = "";
    menu.selectedIndex = 0;
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
    }
    checkbox1[0].checked = false;
    comments1.value = "";
    city.value = "";
    state.value = "";
    address1.value = "";
    address2.value = "";
    label.hidden = true;
    check.hidden = true;
    comments1.style.display = "none";
    comments11.style.display = "none";
}

function checkInputs() {
    let allFilled = true;
    let allValid = true;

    inputs.forEach(input => {
        if (input.type !== 'submit') {
            if ((input.type === 'checkbox' && input.required && !input.checked) ||
                (input.type === 'radio' && input.required && !input.checked) ||
                (input.type !== 'checkbox' && input.type !== 'radio' && input.value.trim() === '' && input.required)) {
                allFilled = true;
                // console.log(`Field "${input.id}" is not filled.`);
            }
            if (input.type !== 'checkbox' && input.type !== 'radio') {
                const nameType = input.getAttribute('nameType');
                const isValid = validinput(input, parseInt(input.getAttribute('validationType')), nameType);
                const errorDiv = document.getElementById('errorMsg' + nameType);
                if (!isValid) {
                    allValid = false;
                    // console.log(`Field "${input.id}" is not valid.`);
                }
            }
        }
    });

    if (allFilled && allValid) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
}


inputs.forEach(input => {
    input.addEventListener('input', function () {
        checkInputs();
    });
});
