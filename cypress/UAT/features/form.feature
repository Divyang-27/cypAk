Feature: Simple form
Scenario: to validate simple form
Given user opens the Simple form url
When user enters firstname ,lastname, email, message
And clicks on submit
Then An alert saying successful message has to be displayed.

