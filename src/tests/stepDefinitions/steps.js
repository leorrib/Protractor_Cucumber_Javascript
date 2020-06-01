const { Given, When, Then } = require('cucumber')
const FormPage = require("../../main/PageObjects/Form")
const form = new FormPage();

Given('User enters a website', async () => {
  await form.OpenWebsite();
});

When('Fills a form with {string}, {string}, {string}, {string} and {string}', 
async function (name, email, pass, gender, occupation) {
  await form.fillName(name);
  await form.fillEmail(email);
  await form.fillPassword(pass);
  await form.ClickCheckBox();  
  await form.SelectGender(gender);
  await form.SelectOccupation(occupation)
});

Then('Submits the form, checking if the confirmation message has {string} chars', async (char) => {
  await form.ClickSubmit();
  await form.CompareChars(char);
});