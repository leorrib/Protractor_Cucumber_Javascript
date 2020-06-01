Feature: Performing a user registration in a website

@form
Scenario Outline: Filling the form

Given User enters a website
When Fills a form with "<name>", "<email>", "<password>", "<gender>" and "<occupation>" 
Then Submits the form, checking if the confirmation message has "53" chars

Examples:
| name | email          | password    | gender   | occupation | 
| Leo  | leo@email.com  | leosenha    | male     | student    |
| Lucas| lucas@email.com| lucassenha  |          | employed   |
| Ana  | ana@email.com  | anasenha    | female   | employed   |


