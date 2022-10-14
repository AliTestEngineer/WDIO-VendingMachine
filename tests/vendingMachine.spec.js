
const { assert } = require('chai');
const vendingMachinePage = require('../pages/vendingMachine.page');
const vendingPage1 = require('../pages/vendingMachine.page');

describe('Vending Machine Suite', () => {
  before(() => {
    // Add code here
  });

  beforeEach(() => {
       browser.url('');
  });

  after(() => {
    // Add code here
  });

  afterEach(() => {
    // Add code here
    browser.pause(5000);
  });



  it ('Assert',  () => {
    //assert.equal(vendingPage1.headingText.getText(),'Vending')

    let expectedText = "Vending Machine!"

    let elementObject = browser.findElement('css selector', 'body > h1');
// Considering 'page.pageElements.arMessage' is a valid selector for targeted element
let foundText = browser.getElementText(elementObject.ELEMENT);

  console.log(`Found the following text: ${foundText}`);
  assert.equal(foundText, expectedText,'This is actually the ERROR message');

  });

 it ('Sonuc', async () => {
    // Add code here
    let elem1 = await $(vendingMachinePage.headingText.getText());
    console.log(await elem1.getText());

  });


});
