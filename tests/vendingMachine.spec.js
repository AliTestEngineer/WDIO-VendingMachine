
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

  it('should have correct heading text',  () => {
    // Write test code here
  assert.equal(vendingPage1.headingText.getText(),'Vending Machine!'); 
   // const foundText = vendingPage1.headingText.getText();
   // assert.equal(foundText,'Vending Machine!');
   
   
  })


});
