function book() {
    var checkboxes = document.getElementsByName("level");
    var price = 0;
    var name = document.getElementsByName("n")[0].value; 
    var phone = document.getElementsByName("phone")[0].value; 
    var servicesSelected = false;
    var age = document.getElementsByName("age")[0].value;

    if (name.trim() === "") {
        document.getElementById("message").innerHTML = "Enter a valid name please!";
        return; 
    } else {
        document.getElementById("message").innerHTML = ""; 
    }
    if(phone.length !== 10) {
        document.getElementById("ph").innerHTML = "Enter a valid phone number please!";
        return;
    } else {
        document.getElementById("ph").innerHTML = "";

    if (age.trim() === "" || isNaN(age) || age < 16) {
            document.getElementById("ag").innerHTML = "Enter a valid age please!";
            return; 
    } else {
            document.getElementById("ag").innerHTML = "";
    }

    for (var i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            servicesSelected = true;
            if (checkboxes[i].value === 'Hair dressing') {
                price += 85;
            } else if (checkboxes[i].value === 'Skin care') {
                price += 120;
            } else if (checkboxes[i].value === 'Nails polish') {
                price += 150;
            }
        }
    }


    if (!servicesSelected) {
        document.getElementById("a").innerHTML = "No services selected!";
    } else {
        document.getElementById("a").innerHTML = "";
    }
    if(servicesSelected){

    document.getElementById("data").innerHTML = "Total price is: " + price+"\n"
    + "Name: "+name+"\n"+"phone number: "+phone+"\n"+"Age: "+age;
    }
}
}
