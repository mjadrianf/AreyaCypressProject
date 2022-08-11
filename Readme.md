
# In a nutshell
Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

We make it possible to:

    1. Set up tests
    2. Write tests
    3. Run tests
    4. Debug Tests
Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to write faster, easier and more reliable tests.

## Who uses Cypress?
Users are typically developers or QA engineers building web applications using modern JavaScript frameworks.

Cypress enables you to write all types of tests:

    1. End-to-end tests
    2. Integration tests
    3. Unit tests

Cypress can test anything that runs in a browser.

## Features
Cypress comes fully baked, batteries included. Here is a list of things it can do that no other testing framework can:

* Time Travel: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
* Debuggability: Stop guessing why your tests are failing. Debug directly from familiar tools like Developer Tools. Our readable errors and stack traces make debugging lightning fast.
* Automatic Waiting: Never add waits or sleeps to your tests. Cypress automatically waits for commands and assertions before moving on. No more async hell.
* Spies, Stubs, and Clocks: Verify and control the behavior of functions, server responses, or timers. The same functionality you love from unit testing is right at your fingertips.
* Network Traffic Control: Easily control, stub, and test edge cases without involving your server. You can stub network traffic however you like.
* Consistent Results: Our architecture doesn’t use Selenium or WebDriver. Say hello to fast, consistent and reliable tests that are flake-free.
* Screenshots and Videos: View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.
* Cross browser Testing: Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally and optimally in a Continuous Integration pipeline.

# Getting Stared
## Installing Cypress
In you favorite IDE (Visual Studio Code is great) from the Main Project Folder, open the Terminal and  start with the follow Comands:

### npm install
Install Cypress via npm:

`cd /your/project/path`
`npm install cypress --save-dev`

This will install Cypress locally as a dev dependency for your project.

###  yarn add
Installing Cypress via yarn:

`cd /your/project/path`
`yarn add cypress --dev`

System proxy properties http_proxy, https_proxy and no_proxy are respected for the download of the Cypress binary.

## cypress open
Now you can open Cypress from your project root one of the following ways:

### Using npx

Note: npx is included with npm > v5.2 or can be installed separately.

`npx cypress open`

### Or by using yarn

`yarn run cypress open`

### The long way with the full path

`./node_modules/.bin/cypress open`

### Or with the shortcut using npm bin

`$(npm bin)/cypress open`

After a moment, the Cypress App will launch.

