const { Given, When, Then, Before } = require("@cucumber/cucumber");
const pactum = require("pactum");

let spec = pactum.spec();
var request;

Before(function () {
  spec = pactum.spec();
});

Given("A Single Product {}", function (requestInLine) {
    request = JSON.parse(requestInLine)
});

When("I make a product GET request to {string}", async function (url) {
  await spec.post(url).withJson(request)
});

Then("I get single product, response code {int}", function (code) {
  spec.response().should.have.status(code);
});
