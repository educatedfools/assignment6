"use strict";
var pizzaSizes = {
    smallHand: "Small: $" + 9.99,
    mediumHand: "Medium: $" + 12.99,
    largeHand: "Large: $" + 14.99,
    mediumThin: "Medium: $" + 11.99,
    largeThin: "Large: $" + 13.99,
    largeYork: "Large: $" + 16.99,
    xLargeYork: "Extra Large: $" + 19.99,
    smallGluten: "Small: $" + 10.99
};

var sizeOptions = document.getElementById("sizeOptions");

//function for adding an option
function addOption(selectbox, text) {
    var optn = document.createElement('option');
    optn.text = text;
    selectbox.options.add(optn);
}

//function for removing size options
function removeOption() {
    var i;
    for (i = sizeOptions.options.length - 1; i >= 1; i--) {
        sizeOptions.remove(i);
    }
}

//if else to populate select box by dynamically generating object properties based on radio choice
var populateSelect = function () {
    if (document.getElementById('handTossed').checked) {
        removeOption();
        addOption(sizeOptions, pizzaSizes.smallHand);
        addOption(sizeOptions, pizzaSizes.mediumHand);
        addOption(sizeOptions, pizzaSizes.largeHand);
    } else if (document.getElementById('thinCrust').checked) {
        removeOption();
        addOption(sizeOptions, pizzaSizes.mediumThin);
        addOption(sizeOptions, pizzaSizes.largeThin);
    } else if (document.getElementById('newYorkStyle').checked) {
        removeOption();
        addOption(sizeOptions, pizzaSizes.largeYork);
        addOption(sizeOptions, pizzaSizes.xLargeYork);
    } else if (document.getElementById('glutenFree').checked) {
        removeOption();
        addOption(sizeOptions, pizzaSizes.smallGluten);
    }
};

//loops through radio buttons and adds event listener for a click
var i;
var nameSelect = document.getElementsByName('dough');
for (i = 0; i < nameSelect.length; i++) {
    nameSelect[i].addEventListener('click', populateSelect, false);
}

//hide elements until dough and size are selected by removing class containing display: none
sizeOptions.addEventListener('change', function () {
    document.getElementById('cheeseDiv').classList.remove('hideBox');
    document.getElementById('sauceDiv').classList.remove('hideBox');
});