const { Given, When, Then, Before } = require("@cucumber/cucumber");
const pactum = require("pactum");

let spec = pactum.spec();
var request;

Before(function () {
  spec = pactum.spec();
});

Given("A Product List {}", function (requestInLine) {
    request = JSON.parse(requestInLine)
});

When("I make a GET request to {string}", async function (url) {
  await spec.get(url ).withJson(request)
});

Then("I get response code {int}", function (code) {
  spec.response().should.have.status(code);
});
