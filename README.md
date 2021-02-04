# Automation Test

This project uses React, Cypress, cypress-cucumber-preprocessor and @testing-library/cypress

## Steps

1. Clone the project by runnig `git clone git@github.com:Iliaspit/automation-test.git` 

2. Go into the app directory and run `npm install` to install all dependencies

3. `npm run start` -> this will start your app at localhost:3000

4. `npm run cypress:open` -> this will open cypress at port 3000

5. Pick the file you want to run and click on it. This should run the feature file for this test

## Setup

We have setup the test suite for you including the feature files, step definitions (each feature file has a corresponding step definitions file that share its name) as well as Page Objects. The `common_step_definitions` are for definitions that are shared by all feature files. Page objects can be imported in a step definition file to interact with a page element eg `HomePage.click('something')`.

Your job will be to fill in the step definitions and add Page object methods that will interact with the elements on the page. There are two scenarios to automate.

## Debugging

You can stop the execution of the app at any point by opening the chrome developers' tools (`option + ⌘ + I`), find the file (`⌘ + P`), search for the file name and add a breakpoint on the line you want to inspect.
