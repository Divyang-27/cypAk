Feature: login
#Scenario: to validate login
#Given open the browser and enter url
#When enter username as Admin
#And enter password as admin123 
#And click on submit
#Then Login should be successful

Scenario Outline: validate login for multiple users
Given open the browser and enter url
When enter username as <username>
And enter password as <password> 
And click on submit
Then Login should be successful

Examples:
    | username| password |
    | ADmin  | Admin123  |
    | admin  | passs     |
    




