require('dotenv').config()
const { config } = require('./wdio.shared.conf');

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// Specs
// ============
config.specs = [
  '../e2e/src/integration/sauce_login/sauce.login.smoke.spec.ts'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  //  {
  //    platformName: "Android",
  //    "appium:platformVersion": "12.0",
  //    "appium:deviceName": "Samsung Galaxy S22 Ultra",
  //    "appium:automationName": "UIAutomator2",
  //   "appium:app": "bs://dfd9d8063dbc96978951a6d776d92f08e53848ec",
  //   "appium:autoGrantPermissions": true
  //  }

 {
     platformName: "iOS",
     "appium:platformVersion": "14.0",
     "appium:deviceName": "iPhone 12 ",
     "appium:automationName": "XCUITest",
     "appium:app": "bs://135a42164a53cf833ef36207188840958091a739",
   }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack', 'appium'];

exports.config = config;