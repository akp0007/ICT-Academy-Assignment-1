var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
var pwd = document.getElementById("pwd");
var pwderror = document.getElementById("pwderror");
var formsubmitlogin = document.getElementById("formsubmitlogin");
var formerror = document.getElementById("formerror");

var emailvalid = 0;
var pwdvalid = 0;
var p1, p2, p3, p4;

let p1r = /(?=.*[A-Z])/;
let p2r = /(?=.*[a-z])/;
let p3r = /\d/;

formsubmitlogin.onsubmit = function() {
    if (emailRegex.test(email.value) && pwd.value.length >= 8 && p3r.test(pwd.value) && p2r.test(pwd.value) && p1r.test(pwd.value)) {
        return true;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>Error</div>";
        return false;
    }

}

function emailvalidate() {
    if (emailRegex.test(email.value)) {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>✔Email is Valid.</span></div>";
        emailvalid = 1;
    } else {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>✖ Email is invalid.</span></div>";
        emailvalid = 0;
    }
}

function pwdvalidate() {
    p1 = p2 = p3 = p4 = 0;
    p4w = "<span class='text-danger small'>Minimum 8 Characters Required</span>";
    p3w = "<span class='text-dange small'>Atleast One Number Required</span>";
    p2w = "<span class='text-danger small'>Atleast One Lower Case Required</span>";
    p1w = "<span class='text-danger small'>Atleast One Upper Case Required</span>";
    if (pwd.value.length >= 8) {
        p4 = 1;
        p4w = "<span class='text-success small'>Minimum 8 Characters Found</span>";
    }
    if (p3r.test(pwd.value)) {
        p3 = 1; 
        p3w = "<span class='text-success small'>Atleast One Number Found</span>";
    }
    if (p2r.test(pwd.value)) {
        p2 = 1; 
        p2w = "<span class='text-success small'>Atleast One Lower Case Found</span>";
    }
    if (p1r.test(pwd.value)) {
        p1 = 1; 
        p1w = "<span class='text-success small'>Atleast One Upper Case Found</span>";
    }

    if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1) {
        pwderror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'>✔ Password Is Fine.</div>";
        pwdvalid = 1;
    } else {
        pwderror.innerHTML = "<div class='mt-4 alert alert-warning rounded-0'>" + p4w + "</br>" + p3w + "</br>" + p2w + "</br>" + p1w + "</div>";
        pwdvalid = 0;
    }
}

email.onfocus = function() {
    emailvalidate();
    formerror.innerHTML = "";
    email.onkeyup = function() {
        emailvalidate();
    }
}

email.onblur = function() {
    formerror.innerHTML = "";
    if (emailvalid == 1) {
        emailerror.innerHTML = "";
    }
}

pwd.onfocus = function() {
    pwdvalidate();
    formerror.innerHTML = "";
    pwd.onkeyup = function() {
        pwdvalidate();
    }
}

pwd.onblur = function() {
    formerror.innerHTML = "";
    if (pwdvalid == 1) {
        pwderror.innerHTML = "";
    }
}