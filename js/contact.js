

function formSubmit(){
    var validForm = false;

    var name = document.getElementById('inputName').value;
    var company = document.getElementById('inputCompany').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var address = document.getElementById('inputAddress').value;
    var city = document.getElementById('inputCity').value;
    var state = document.getElementById('inputState').value;
    var zip = document.getElementById('inputZip').value;
    var info = document.getElementById('inputInformation').value;
    var other = document.getElementById('inputOther').value;
    
    // console.log(input + " " + company + " " + email + " " + phone + " " + address + " " + city + " " + state + " " + zip + " " + info + " " + other);
    validForm = validateForm(name, email, phone, info);

    if(validForm){
        sendEmail(name, company, email, phone, address, city, state, zip, info, other);
    }
}

function validateForm(name, email, phone, info){

    var valName;
    var valEmail;
    var valPhone;
    var valInfo;
    var formValid;

    // nane validation
    if(name == ""){
        valName = false;
    }else{
        valName = true;
    }
    
    // email validation
    if(email == ""){
        valEmail = false;
    }else{
        const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        const isValid = emailPattern.test(email); 
        if(isValid){
            valEmail = true;
        }else{
            valEmail = false;
        }
    }

    // phone validation
    if(phone == ""){
        valPhone = false;
    }else{
        const phonePattern =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        const isValid = phonePattern.test(phone); 
        if(isValid){
            valPhone = true;
        }else{
            valPhone = false;
        }
    }

    // info validation
    if(info == ""){
        valInfo = false;
    }else{
        valInfo = true;
    }

    formValid = postValidation(valName, valEmail, valPhone, valInfo);

    if(formValid){
        return true;
    }
}

function postValidation(name, email, phone, info){
    error = false;

    if(!name){
        validationError('inputName');
        error = true;
    }
    if(!email){
        validationError('inputEmail');
        error = true;
    }
    if(!phone){
        validationError('inputPhone');
        error = true;
    }
    if(!info){
        validationError('inputInformation');
        error = true;
    }

    if(error){
        scrollTop();
    }else{
        return true;
    }
}

function resetBorder(id){
    document.getElementById(id).style.border = "1px solid lightgrey";
    document.getElementById(id).placeholder = '';
}

function validationError(id){
    document.getElementById(id).style.border = "1px solid red";

    if(id == "inputName"){
        document.getElementById(id).value = '';
        document.getElementById(id).placeholder = 'Enter your name';
    }

    if(id == "inputEmail"){
        document.getElementById(id).value = '';
        document.getElementById(id).placeholder = 'Enter a valid email';
    }

    if(id == "inputPhone"){
        document.getElementById(id).value = '';
        document.getElementById(id).placeholder = 'Enter a valid number';
    }
    
}

var data_js = {
    "access_token": "uwttnrufw7g3an5fmg273orp"
};

function sendEmail(name, company, email, phone, address, city, state, zip, info, other){
    var newPhone = phone[0] + phone[1] + phone[2] + "-" + phone[3] + phone[4] + phone[5] + "-" + phone[6] + phone[7] + phone[8] + phone[9];
    var subject = "Englund Roofing - Contact Form";
    var message = "Name: " + name + "\nCompany: " + company + "\nEmail: " + email + "\nPhone: " + newPhone + "\nAddress: " + address + ", " + city + ", " + state + " " + zip + "\nArea of Interest: " + info + "\nAdditional Info: " + other;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log('Message Success');
        } else
        if(request.readyState == 4) {
            console.log('Message Failed');
        }
    };

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    alert("Form Submitted, we will be in contact with you soon!");
    scrollTop();
    location.reload();
}

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

function scrollTop(){
    document.getElementById('section2').scrollIntoView();
}