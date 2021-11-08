var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
var mobile = document.getElementById("mobile");
var mobileerror = document.getElementById("mobileerror");
var nameerror = document.getElementById("nameerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
let mobileRegex = /^[0-9]{10,10}$/;
let mobileRegex1 = /^([0-9]{3,3})\.([0-9]{3,3})\.([0-9]{4,4})$/;
let mobileRegex2 = /^([0-9]{3,3})\s([0-9]{3,3})\s([0-9]{4,4})$/;
let mobileRegex3 = /^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
let nameRegex = /^([A-Za-z]{1,30})(\s[A-Za-z]{1,30}){0,2}$/;
let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var pwd = document.getElementById("pwd");
var pwderror = document.getElementById("pwderror");
var formsubmitsignup = document.getElementById("formsubmitsignup");
var formerror = document.getElementById("formerror");

var emailvalid = 0;
var mobilevalid = 0;
var pwdvalid = 0;
var p1, p2, p3, p4;

let p1r = /(?=.*[A-Z])/;
let p2r = /(?=.*[a-z])/;
let p3r = /\d/;


formsubmitsignup.onsubmit = function() {
    if (emailRegex.test(email.value) && (mobileRegex.test(mobile.value) || mobileRegex1.test(mobile.value) || mobileRegex2.test(mobile.value) || mobileRegex3.test(mobile.value)) && pwd.value.length >= 8 && p3r.test(pwd.value) && p2r.test(pwd.value) && p1r.test(pwd.value)) {
        return true;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'> Error.</div>";
        return false;
    }

}

function emailvalidate() {
    if (emailRegex.test(email.value)) {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>Email Is Vaid</span></div>";
        emailvalid = 1;
    } else {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>Invalid Email.</span></div>";
        emailvalid = 0;
    }
}

function mobilevalidate() {
    if (mobileRegex.test(mobile.value) || mobileRegex1.test(mobile.value) || mobileRegex2.test(mobile.value) || mobileRegex3.test(mobile.value)) {
        mobileerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'> Valid Mobile No.</span></div>";
        mobilevalid = 1;
    } else {
        mobileerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>Invalid Mobile No.</span></div>";
        mobilevalid = 0;
    }
}

function pwdvalidate() {
    p1 = p2 = p3 = p4 = 0;
    var pstrength = 0;
    p4w = "<span class='text-danger small'>Minimum 8 Characters Is Required</span>";
    p3w = "<span class='text-danger small'>Atleast One Number Is Required</span>";
    p2w = "<span class='text-danger small'>Atleast One Lower Case Is Required</span>";
    p1w = "<span class='text-danger small'>Atleast One Upper Case Is Required</span>";
    if (pwd.value.length >= 8) {
        p4 = 1; 
        pstrength = pstrength + 1;
        p4w = "<span class='text-success small'>Minimum 8 Characters Is Found</span>";
    }
    if (p3r.test(pwd.value)) {
        p3 = 1; 
        pstrength = pstrength + 1;
        p3w = "<span class='text-success small'>Atleast One number Is found</span>";
    }
    if (p2r.test(pwd.value)) {
        p2 = 1; 
        pstrength = pstrength + 1;
        p2w = "<span class='text-success small'>Atleast One Lower Case Is Found</span>";
    }
    if (p1r.test(pwd.value)) {
        p1 = 1; 
        pstrength = pstrength + 1;
        p1w = "<span class='text-success small'>Atleast One Upper Case Is found</span>";
    }
    if (spChars.test(pwd.value)) {
        pstrength = pstrength + 1;
    }

    if (pstrength <= 0) {
        pstrengthbg = 'bg-danger';
        pl = 5;
    }
    if (pstrength == 1) {
        pstrengthbg = 'bg-danger';
        pl = 20;
    }
    if (pstrength == 2) {
        pstrengthbg = 'bg-warning';
        pl = 40;
    }
    if (pstrength == 3) {
        pstrengthbg = 'bg-warning';
        pl = 60;
    }
    if (pstrength == 4) {
        pstrengthbg = 'bg-success';
        pl = 80;
    }
    if (pstrength >= 5) {
        pstrengthbg = 'bg-success';
        pl = 100;
    }

    if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1) {
        pwderror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'> Password Is Good.</br></br><div class='progress'><div class='progress-bar " + pstrengthbg + "' role='progressbar' style='width: " + pl + "%' aria-valuenow=" + pstrength + " aria-valuemin='0' aria-valuemax='5'></div></div></div></div>";
        pwdvalid = 1;
    } else {
        pwderror.innerHTML = "<div class='mt-4 alert alert-warning rounded-0'>" + p4w + "</br>" + p3w + "</br>" + p2w + "</br>" + p1w + "</br></br>Strength Of Password<div class='progress'><div class='progress-bar " + pstrengthbg + "' role='progressbar' style='width: " + pl + "%' aria-valuenow=" + pstrength + " aria-valuemin='0' aria-valuemax='5'></div></div></div></div>";
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
mobile.onfocus = function() {
    mobilevalidate();
    formerror.innerHTML = "";
    mobile.onkeyup = function() {
        mobilevalidate();
    }
}

mobile.onblur = function() {
    formerror.innerHTML = "";
    if (mobilevalid == 1) {
        mobileerror.innerHTML = "";
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
