// var text="I attend Digital School";
// var result=text.search(/Digital School/);
// var result2= text.replace(/Digital School/,"Xhevdet");
// console.log(result);
// console.log(result2);


// var testi= "abcdef"
// var regexp = new RegExp('abc');
// console.log(regexp.test(testi));

// var text2="Hello World, this is my World!";
// var regex = /World/g;
// console.log(text2.match(regex));

function validate() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;

    // Corrected regex definitions
    var valid_name = /^[A-Za-z]+$/;
    var valid_age = /^[0-9]+$/;

    // Reset visibility of error messages
    // document.getElementById('name_error').style.visibility = "hidden";
    // document.getElementById('age_error').style.visibility = "hidden";
    // document.getElementById('city_error').style.visibility = "hidden";

    var valid = true;

    // Validate name
    if (!valid_name.test(name)) {
        document.getElementById('name_error').style.visibility = "visible";
        valid = false;
    }

    // Validate age
    if (!valid_age.test(age)) {
        document.getElementById('age_error').style.visibility = "visible";
        valid = false;
    }

    // Validate city selection
    if (city === '') {
        document.getElementById('city_error').style.visibility = "visible";
        valid = false;
    }

    return valid; // Return true only if all fields are valid
}