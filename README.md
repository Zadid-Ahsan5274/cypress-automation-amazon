# cypress-automation-amazon

## Tools and technologies used
- Text editor(preferably Visual Studio Code or Atom)
- Cypress(Automation tool)
- Cypress mochawesome reporter(Reporting tool)

## Scenario of this project
- User will visit https://www.amazon.in/
- User will click on the hamberger menu and celect the category "TV, Appliances, Electronics" -> After that user will select "Television"
- Next page user will filter the result from Brands selecting "Samsung"
- Next page user will sort the results based on price High to Low
- User will click on the 2nd product
- After that, user will verify whether the word "Samsung" is present in the URL or not

## Prerequisites
- Text editor installed on your machine(preferably vs code or atom)

## How to run this project
- Clone this project
- Open the cloned folder in any text editor
- Open terminal/command prompt in folder location
- Install cypress by the command: ```npm install cypress```
- Install mochawesome reporter by the command: ```npm i --save-dev cypress-mochawesome-reporter```
- For running the tests in different modes:
  headed mode:  ```npx cypress open```
  headless mode:  ```npx cypress run```
  
## Test Reports
![Screenshot 2022-11-30 142451](https://user-images.githubusercontent.com/82231014/204755361-0dd1b6f6-525b-454b-a204-e6e5b8529b90.png)
![Screenshot 2022-11-30 142916](https://user-images.githubusercontent.com/82231014/204755397-5c97346b-fa5e-4c06-81c9-6ffa799eb24e.png)
![Screenshot 2022-11-30 142937](https://user-images.githubusercontent.com/82231014/204755430-04fd4b7e-3820-4113-a27f-98488091176d.png)
![Mochawesome Report](https://user-images.githubusercontent.com/82231014/204755476-cf64f529-b41b-45a6-849c-4ec3c67fb97e.png)

## Automation Recording
https://user-images.githubusercontent.com/82231014/204756105-c8b79d8a-ec4b-4f44-b94f-3884eb5eedb5.mp4


