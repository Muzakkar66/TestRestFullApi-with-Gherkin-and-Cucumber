const { Given, When, Then, Before } = require("@cucumber/cucumber");
const pactum = require("pactum");
const axios = require('axios')
const assert = require('assert').strict

let spec = pactum.spec();
var request;
var response;

Before(function () {
  spec = pactum.spec();
});

Given("A Product for delete {}", function (requestInLine) {
    request = requestInLine
});

When("I send DELETE request to {string}", async function (url) {
// response = await axios.delete(url, request)
  await spec.delete(url).withJson(JSON.parse(request)).expectStatus(200)
});

Then("I get product after deleted, response code {int}", function (code) {
    // assert.deepEqual(code, response.status)
    spec.response().should.have.status(code)
});
