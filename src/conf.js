exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  getPageTimeout: 50000,
  allScriptsTimeout: 30000,
  specs: ['../src/tests/features/shop.feature'],

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    format: "json:./src/tests/reports/report.json",
    require: [
      '../src/tests/stepDefinitions/*.js'    ]
  },
  
  onPrepare : function(){
    //browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
  }, 

  onComplete : () => {
    var reporter = require('cucumber-html-reporter');
    var options = {
        theme: 'bootstrap',
        jsonFile: './src/tests/reports/report.json',
        output: './src/tests/reports/report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);
  },

  suites: {
  },
  
  capabilities: {
    browserName: 'chrome',
    //acceptInsecureCerts: true,
    'goog:chromeOptions': { w3c: false },
  },

  jasmineNodeOpts: {
    showColors: true, 
  }

};