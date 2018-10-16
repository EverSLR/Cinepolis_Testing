import homePage from '../page_objects/home.page';

module.exports = function() {

    this.Given(/^a client is in home page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        homePage.open(true);
        homePage.removeAd();
        browser.waitUntil(function() {
            return browser.getAttribute("#takeover","style") === "display: none;";
          },10000);
        // homePage.city.waitForVisible();
      });

    this.When(/^a city is selected to search Movies$/, function () {
        // Write code here that turns the phrase above into concrete actions
        homePage.city.selectByVisibleText('San Pedro');
        homePage.submit();
      });

    this.Then(/^app will show all Movies' functions$/, function () {
        // Write code here that turns the phrase above into concrete actions
        homePage.pushToObjc();
        console.log(homePage.moviesObj);
        browser.pause(1000);
      });

    this.Then(/^functions must match as in the main search page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        homePage.testMatchShowtime();
        console.log(homePage.matchArray);
        expect(homePage.matchArray).not.toContain(false);
      });
}
