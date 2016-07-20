"use strict";
var regex = {
    validName: /^([^0-9]*)$/,
    validState: /\b[a-zA-Z]{2}\b/,
    validZip: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    validPhnum: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    validEmail: /\S+@\S+\.\S+/,
    validCard: /(?:\d[ -]?){12,18}\d/,
    validCVC: /^[0-9]{3,4}$/
};

var validFields = {
    custName: document.getElementById('custName'),
    state: document.getElementById('state'),
    zip: document.getElementById('zip'),
    phnum: document.getElementById('phnum'),
    email: document.getElementById('email'),
    card: document.getElementById('cCard'),
    cvc: document.getElementById('cvc')
};


//validate name field
document.getElementById('custName').addEventListener('blur', function () {
    if (regex.validName.test(validFields.custName.value)) {
        document.getElementById('nameCheck').innerHTML = '<p>&#10004; valid</p>';
        document.getElementById('nameCheck').classList.add('checkMarkValid');
        document.getElementById('nameCheck').classList.remove('checkMarkInvalid');
    } else {
        document.getElementById('nameCheck').innerHTML = '<p>&#10071; invalid</p>';
        document.getElementById('nameCheck').classList.add('checkMarkInvalid');
        document.getElementById('nameCheck').classList.remove('checkMarkValid');
    }
});

//validate state field
document.getElementById('state').addEventListener('blur', function () {
    if (regex.validState.test(validFields.state.value)) {
        document.getElementById('stateCheck').innerHTML = '<p>&#10004; valid</p>';
        document.getElementById('stateCheck').classList.add('checkMarkValid');
        document.getElementById('stateCheck').classList.remove('checkMarkInvalid');
    } else {
        document.getElementById('stateCheck').innerHTML = '<p>&#10071; invalid</p>';
        document.getElementById('stateCheck').classList.add('checkMarkInvalid');
        document.getElementById('stateCheck').classList.remove('checkMarkValid');
    }
});

//validate zip code
document.getElementById('zip').addEventListener('blur', function () {
    if (regex.validZip.test(validFields.zip.value)) {
        document.getElementById('zipCheck').innerHTML = '<p>&#10004; valid</p>';
        document.getElementById('zipCheck').classList.add('checkMarkValid');
        document.getElementById('zipCheck').classList.remove('checkMarkInvalid');
    } else {
        document.getElementById('zipCheck').innerHTML = '<p>&#10071; invalid</p>';
        document.getElementById('zipCheck').classList.add('checkMarkInvalid');
        document.getElementById('zipCheck').classList.remove('checkMarkValid');
    }
});

//validate phone number
document.getElementById('phnum').addEventListener('blur', function () {
    if (regex.validPhnum.test(validFields.phnum.value)) {
        document.getElementById('phCheck').innerHTML = '<p>&#10004; valid</p>';
        document.getElementById('phCheck').classList.add('checkMarkValid');
        document.getElementById('phCheck').classList.remove('checkMarkInvalid');
    } else {
        document.getElementById('phCheck').innerHTML = '<p>&#10071; invalid</p>';
        document.getElementById('phCheck').classList.add('checkMarkInvalid');
        document.getElementById('phCheck').classList.remove('checkMarkValid');
    }
});

//validate email address
document.getElementById('email').addEventListener('blur', function () {
    if (regex.validEmail.test(validFields.email.value)) {
        document.getElementById('emailCheck').innerHTML = '<p>&#10004; valid</p>';
        document.getElementById('emailCheck').classList.add('checkMarkValid');
        document.getElementById('emailCheck').classList.remove('checkMarkInvalid');
    } else {
        document.getElementById('emailCheck').innerHTML = '<p>&#10071; invalid</p>';
        document.getElementById('emailCheck').classList.add('checkMarkInvalid');
        document.getElementById('emailCheck').classList.remove('checkMarkValid');
    }
});

//validate credit card
document.getElementById('cCard').addEventListener('blur', function () {
    if (regex.validCard.test(validFields.card.value)) {
        document.getElementById('cCheck').innerHTML = '<p>&#10004; valid</p>';
        document.getElementById('cCheck').classList.add('checkMarkValid');
        document.getElementById('cCheck').classList.remove('checkMarkInvalid');
    } else {
        document.getElementById('cCheck').innerHTML = '<p>&#10071; invalid</p>';
        document.getElementById('cCheck').classList.add('checkMarkInvalid');
        document.getElementById('cCheck').classList.remove('checkMarkValid');
    }
});

document.getElementById('cvc').addEventListener('blur', function () {
    if (regex.validCVC.test(validFields.cvc.value)) {
        document.getElementById('cvcCheck').innerHTML = '<p>&#10004; valid</p>';
        document.getElementById('cvcCheck').classList.add('checkMarkValid');
        document.getElementById('cvcCheck').classList.remove('checkMarkInvalid');
    } else {
        document.getElementById('cvcCheck').innerHTML = '<p>&#10071; invalid</p>';
        document.getElementById('cvcCheck').classList.add('checkMarkInvalid');
        document.getElementById('cvcCheck').classList.remove('checkMarkValid');
    }
});

//making fields required on submit
document.getElementById('submitCheck').addEventListener('click', function (event) {
    if (regex.validName.test(validFields.custName.value) && regex.validState.test(validFields.state.value) && regex.validZip.test(validFields.zip.value) && regex.validPhnum.test(validFields.phnum.value) && regex.validEmail.test(validFields.email.value)) {
        return true;
    } else {
        event.preventDefault();
    }
});

                        
//displaying textarea on mouseup for "other" in unit type field
var optionFour = document.getElementById('otherSelect');
optionFour.addEventListener('mouseout', function () {
    if (document.getElementById('other').selected) {
        document.getElementById('reveal').classList.remove('hideBox');
    } else {
        document.getElementById('reveal').classList.add('hideBox');
    }
});

//local storage for preserving input fields
document.getElementById('submitCheck').addEventListener('click', function () {
    var name = document.getElementById('custName').value;
    var address1 = document.getElementById('address1').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var phnum = document.getElementById('phnum').value;
    var email = document.getElementById('email').value;
 
    localStorage.setItem('name', name);
    localStorage.setItem('address1', address1);
    localStorage.setItem('state', state);
    localStorage.setItem('zip', zip);
    localStorage.setItem('phnum', phnum);
    localStorage.setItem('email', email);
});

document.querySelector('input[name=storageCheck]').addEventListener('change', function () {
    document.getElementById('custName').value = localStorage.getItem('name');
    document.getElementById('address1').value = localStorage.getItem('address1');
    document.getElementById('state').value = localStorage.getItem('state');
    document.getElementById('zip').value = localStorage.getItem('zip');
    document.getElementById('phnum').value = localStorage.getItem('phnum');
    document.getElementById('email').value = localStorage.getItem('email');
});