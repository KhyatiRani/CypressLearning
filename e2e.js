const cypress = require('cypress')

cypress.run({
  browser: 'chrome',
  spec: './cypress/integration/testcases/testcase_01.spec.js',
})
.then((results) => {
  console.log(results)
  console.log('passed %d tests, failed %d tests',
  results.totalPassed, results.totalFailed)
})
.catch((err) => {
  console.error(err)
})

