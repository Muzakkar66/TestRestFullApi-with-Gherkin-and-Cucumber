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

Given("A Product Request {}", function(requestInLine){
    request = JSON.parse(requestInLine)
})

When("I send POST request to {string}", async function(url){
    response = await axios.post(url, request)
})

Then("I get product response code {int}", function(code){
 assert.deepEqual(code, response.status);
})