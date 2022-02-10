
//const compareSnapshotCommand = require('cypress-visual-regression/dist/command');
 
//compareSnapshotCommand();


require('@cypress/snapshot').register()


//Downloadfile
//https://www.npmjs.com/package/cypress-downloadfile
require('cypress-downloadfile/lib/downloadFileCommand')
//verify downloadfile
//https://elaichenkov.medium.com/cypress-how-to-verify-that-file-is-downloaded-with-cy-verify-downloads-c520b7760a69#:~:text=To%20verify%20that%20the%20file,that%20the%20file%20is%20downloaded.
require('cy-verify-downloads').addCustomCommand();



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
