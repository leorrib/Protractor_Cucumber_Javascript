const assert = require('chai').assert;

class FormPage {

    constructor () {

        this.name = $("form [name='name']");
        this.email = element(by.name("email"));
        this.password = element(by.id("exampleInputPassword1"));
        this.checkbox = element(by.id("exampleCheck1"));
        this.female = element(by.cssContainingText("[id*='Select'] option", "Female"));
        this.occupation = element.all(by.name("inlineRadioOptions"));
        this.submit = element(by.buttonText("Submit"));
        this.confirmation = $("[class*='alert-success']");
        this.shop = element(by.linkText("Shop"));
    }
    
    OpenWebsite () {
        return browser.get("https://rahulshettyacademy.com/angularpractice")
    }

    fillName (name) {
        return this.name.sendKeys(name)
    };

    fillEmail (email) {
        return this.email.sendKeys(email)
    };

    fillPassword (pass) {
        return this.password.sendKeys(pass)
    };

    ClickCheckBox () {
        return this.checkbox.click()
    }

    SelectGender (gender) {
        if (gender == "female") {
            return this.female.click()
        }
    }
    
    SelectOccupation (occupation) {
        if (occupation == "student") {
            return this.occupation.get(0).click()
        } else if (occupation = "employed") {
            return this.occupation.get(1).click()
        }
    }

    ClickSubmit () {
        return this.submit.click()
    }

    GetConfirmText () {
        return this.confirmation.getText()
    }

    ClickShop () {
        return this.shop.click()
    }

    CompareChars (arg) {
        return this.confirmation.getText().then(function(text){
            assert.equal(text.length, arg);
        });
    }
}

module.exports = FormPage