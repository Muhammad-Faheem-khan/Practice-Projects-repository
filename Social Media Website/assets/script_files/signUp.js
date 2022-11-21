'use strict'
import * as userDataHandling from "./userDataHandling.js"
// getting form elements from DOM
const form = document.forms.signupForm
const firstNameElement = form.elements.fname
const lastNameElement = form.elements.lname
const emailElement = form.elements.email
const passwordElement = form.elements.password
const confirmPasswordElement = form.elements.confirmPassword
const agreedToTerms = form.elements.agreedCheckbox
const signupButton = document.getElementById('createAccountBtn')

// new account sign up
signupButton.addEventListener("click", newAccountHandler)
function newAccountHandler(e) {
    const userData = {
        firstName: firstNameElement.value,
        lastName: lastNameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    }
    const validName = nameValidation(userData.firstName, userData.lastName)
    const validEmail = emailValidation(userData.email)
    const validPassword = passwordValidation(userData.password, confirmPasswordElement.value)
    const validAgreement = termsValidation(agreedToTerms)
    console.log(validName, validEmail, validPassword, validAgreement)
    if (validName && validEmail && validPassword && validAgreement) {
        userDataHandling.insertUserData(userData)
    } else {
        e.preventDefault()
    }
}

// function to check first and last name validation
function nameValidation(firstName, lastName) {
    const regName = /^[a-zA-Z]+$/;
    let validFirstName = false
    let validLastName = false
    if (firstName == '' || !regName.test(firstName)) {
        firstNameElement.classList.add('is-invalid')
        validFirstName = false
    } else {
        firstNameElement.classList.remove('is-invalid')
        firstNameElement.classList.add('is-valid')
        validFirstName = true
    }
    if (lastName == '' || !regName.test(lastName)) {
        lastNameElement.classList.add('is-invalid')
        validLastName = false
    }
    else {
        lastNameElement.classList.remove('is-invalid')
        lastNameElement.classList.add('is-valid')
        validLastName = true
    }
    return validFirstName && validLastName
}

// function to check email validation
function emailValidation(email) {
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == '' || !regEmail.test(email)) {
        emailElement.classList.add('is-invalid')
        return false
    } else {
        emailElement.classList.remove('is-invalid')
        emailElement.classList.add('is-valid')
        return true
    }
}
// function to validate password and confirm Password 
function passwordValidation(password, confirmPassword) {
    const passwordLength = password.length
    let validpassword = false
    let validpasswordConfirmation = false
    if (passwordLength < 8 || passwordLength > 20) {
        passwordElement.classList.add('is-invalid')
        validpassword = false
    } else {
        passwordElement.classList.remove('is-invalid')
        passwordElement.classList.add('is-valid')
        validpassword = true
    }
    if (password != confirmPassword || passwordLength == 0) {
        confirmPasswordElement.classList.add('is-invalid')
        validpasswordConfirmation = false
    } else {
        confirmPasswordElement.classList.remove('is-invalid')
        confirmPasswordElement.classList.add('is-valid')
        validpasswordConfirmation = true
    }
    return validpassword && validpasswordConfirmation
}

// function to check terms validation
function termsValidation(agreedTerms) {
    if (agreedTerms.checked != true) {
        agreedToTerms.classList.add('is-invalid')
        agreedToTerms.classList.remove('is-valid')
        return false
    } else {
        agreedToTerms.classList.remove('is-invalid')
        agreedToTerms.classList.add('is-valid')
        return true
    }
}
