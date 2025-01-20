// start: switching tabs functionality
  // Switching tabs functionality
  document.getElementById('length-tab-button').addEventListener('click', function () {
    switchTab('length');
});
document.getElementById('temperature-tab-button').addEventListener('click', function () {
    switchTab('temperature');
});
document.getElementById('area-tab-button').addEventListener('click', function () {
    switchTab('area');
});
document.getElementById('volume-tab-button').addEventListener('click', function () {
    switchTab('volume');
});
document.getElementById('weight-tab-button').addEventListener('click', function () {
    switchTab('weight');
});
document.getElementById('time-tab-button').addEventListener('click', function () {
    switchTab('time');
});

//  Custom JavaScript for Tab Switching and Sidebar Toggle 

// Function to switch between tabs
function switchTab(tab) {
    // Hide all tab content
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function (content) {
        content.style.display = 'none';
    });

    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.tabs-button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Show the clicked tab's content
    document.getElementById(tab + '-content').style.display = 'block';
    document.getElementById(tab + '-tab-button').classList.add('active');
}

// Initialize the first tab to be active
switchTab('length');

// Sidebar toggle for small screens
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}







// start : script for length converter

function convertLength() {
    const value = parseFloat(document.getElementById('lengthInputValue').value);
    const unitFrom = document.getElementById('lengthUnitFrom').value;
    const unitTo = document.getElementById('lengthUnitTo').value;

    let convertedValue;

    // Ensure valid input
    if (isNaN(value)) {
        document.getElementById('lengthOutputValue').textContent = "Please enter a valid number";
        return;
    }

    // Conversion logic
    if (unitFrom === 'meter') {
        if (unitTo === 'centimeter') {
            convertedValue = value * 100;
        } else if (unitTo === 'kilometer') {
            convertedValue = value / 1000;
        } else {
            convertedValue = value; // Meter to Meter
        }
    } else if (unitFrom === 'centimeter') {
        if (unitTo === 'meter') {
            convertedValue = value / 100;
        } else if (unitTo === 'kilometer') {
            convertedValue = value / 100000;
        } else {
            convertedValue = value; // Centimeter to Centimeter
        }
    } else if (unitFrom === 'kilometer') {
        if (unitTo === 'meter') {
            convertedValue = value * 1000;
        } else if (unitTo === 'centimeter') {
            convertedValue = value * 100000;
        } else {
            convertedValue = value; // Kilometer to Kilometer
        }
    }

    // Display the converted value
    document.getElementById('lengthOutputValue').textContent = convertedValue.toFixed(2);
}

// end: script for length converter


// start: script for temperature converter

function convertTemperature() {
    const value = parseFloat(document.getElementById('tempInputValue').value);
    const unitFrom = document.getElementById('tempUnitFrom').value;
    const unitTo = document.getElementById('tempUnitTo').value;

    let convertedValue;

    // Ensure valid input
    if (isNaN(value)) {
        document.getElementById('tempOutputValue').textContent = "Please enter a valid number";
        return;
    }

    // Conversion logic
    if (unitFrom === 'celsius') {
        if (unitTo === 'fahrenheit') {
            convertedValue = (value * 9 / 5) + 32;
        } else {
            convertedValue = value; // Celsius to Celsius
        }
    } else if (unitFrom === 'fahrenheit') {
        if (unitTo === 'celsius') {
            convertedValue = (value - 32) * 5 / 9;
        } else {
            convertedValue = value; // Fahrenheit to Fahrenheit
        }
    }

    // Display the converted value
    document.getElementById('tempOutputValue').textContent = convertedValue.toFixed(2);
}

// end: script for temperature converter




// start: script for area converter

function convertArea() {
    const value = parseFloat(document.getElementById('areaInputValue').value);
    const unitFrom = document.getElementById('areaUnitFrom').value;
    const unitTo = document.getElementById('areaUnitTo').value;

    let convertedValue;

    // Ensure valid input
    if (isNaN(value)) {
        document.getElementById('areaOutputValue').textContent = "Please enter a valid number";
        return;
    }

    // Conversion logic
    if (unitFrom === 'squareMeter') {
        if (unitTo === 'squareCentimeter') {
            convertedValue = value * 10000;
        } else if (unitTo === 'squareKilometer') {
            convertedValue = value / 1000000;
        } else {
            convertedValue = value; // Square Meter to Square Meter
        }
    } else if (unitFrom === 'squareCentimeter') {
        if (unitTo === 'squareMeter') {
            convertedValue = value / 10000;
        } else if (unitTo === 'squareKilometer') {
            convertedValue = value / 10000000000;
        } else {
            convertedValue = value; // Square Centimeter to Square Centimeter
        }
    } else if (unitFrom === 'squareKilometer') {
        if (unitTo === 'squareMeter') {
            convertedValue = value * 1000000;
        } else if (unitTo === 'squareCentimeter') {
            convertedValue = value * 10000000000;
        } else {
            convertedValue = value; // Square Kilometer to Square Kilometer
        }
    }

    // Display the converted value
    document.getElementById('areaOutputValue').textContent = convertedValue.toFixed(2);
}

// end: script for area converter


// start: script for volume converter
function convertVolume() {
    const value = parseFloat(document.getElementById('volumeInputValue').value);
    const unitFrom = document.getElementById('volumeUnitFrom').value;
    const unitTo = document.getElementById('volumeUnitTo').value;

    let convertedValue;

    // Ensure valid input
    if (isNaN(value)) {
        document.getElementById('volumeOutputValue').textContent = "Please enter a valid number";
        return;
    }

    // Conversion logic
    if (unitFrom === 'cubicMeter') {
        if (unitTo === 'liter') {
            convertedValue = value * 1000;
        } else if (unitTo === 'milliliter') {
            convertedValue = value * 1000000;
        } else {
            convertedValue = value; // Cubic Meter to Cubic Meter
        }
    } else if (unitFrom === 'liter') {
        if (unitTo === 'cubicMeter') {
            convertedValue = value / 1000;
        } else if (unitTo === 'milliliter') {
            convertedValue = value * 1000;
        } else {
            convertedValue = value; // Liter to Liter
        }
    } else if (unitFrom === 'milliliter') {
        if (unitTo === 'cubicMeter') {
            convertedValue = value / 1000000;
        } else if (unitTo === 'liter') {
            convertedValue = value / 1000;
        } else {
            convertedValue = value; // Milliliter to Milliliter
        }
    }

    // Display the converted value
    document.getElementById('volumeOutputValue').textContent = convertedValue.toFixed(2);
}

// end: script for volume converter


// start: script for weight converter
function convertUnit() {
    const value = parseFloat(document.getElementById('inputValue').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    let convertedValue;

    // Ensure valid input
    if (isNaN(value)) {
        document.getElementById('outputValue').textContent = "Please enter a valid number";
        return;
    }

    // Conversion logic
    if (unitFrom === 'pounds') {
        if (unitTo === 'kilograms') {
            convertedValue = value * 0.453592;
        } else if (unitTo === 'grams') {
            convertedValue = value * 453.592;
        } else {
            convertedValue = value; // Pounds to Pounds
        }
    } else if (unitFrom === 'kilograms') {
        if (unitTo === 'pounds') {
            convertedValue = value * 2.20462;
        } else if (unitTo === 'grams') {
            convertedValue = value * 1000;
        } else {
            convertedValue = value; // Kilograms to Kilograms
        }
    } else if (unitFrom === 'grams') {
        if (unitTo === 'pounds') {
            convertedValue = value * 0.00220462;
        } else if (unitTo === 'kilograms') {
            convertedValue = value / 1000;
        } else {
            convertedValue = value; // Grams to Grams
        }
    }

    // Display the converted value
    document.getElementById('outputValue').textContent = convertedValue.toFixed(2);
}

// end: script for weight converter



// start: script for time converter
function convertTime() {
    const value = parseFloat(document.getElementById('timeInputValue').value);
    const unitFrom = document.getElementById('timeUnitFrom').value;
    const unitTo = document.getElementById('timeUnitTo').value;

    let convertedValue;

    // Ensure valid input
    if (isNaN(value)) {
        document.getElementById('timeOutputValue').textContent = "Please enter a valid number";
        return;
    }

    // Conversion logic
    if (unitFrom === 'seconds') {
        if (unitTo === 'minutes') {
            convertedValue = value / 60;
        } else if (unitTo === 'hours') {
            convertedValue = value / 3600;
        } else {
            convertedValue = value; // Seconds to Seconds
        }
    } else if (unitFrom === 'minutes') {
        if (unitTo === 'seconds') {
            convertedValue = value * 60;
        } else if (unitTo === 'hours') {
            convertedValue = value / 60;
        } else {
            convertedValue = value; // Minutes to Minutes
        }
    } else if (unitFrom === 'hours') {
        if (unitTo === 'seconds') {
            convertedValue = value * 3600;
        } else if (unitTo === 'minutes') {
            convertedValue = value * 60;
        } else {
            convertedValue = value; // Hours to Hours
        }
    }

    // Display the converted value
    document.getElementById('timeOutputValue').textContent = convertedValue.toFixed(2);
}

// end: script for time converter