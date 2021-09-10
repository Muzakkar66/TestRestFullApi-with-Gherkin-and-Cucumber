@testApi-service
Feature: testApi service

    Scenario Outline: getProductList
        Given A Product List <request>
        When I make a GET request to "http://localhost:5000/product/getProductList"
        Then I get response code 200

        Examples:
            | request                                                         |
            | {"id": "61388d0353b69e13fce83952", "VendorId": "4","PizzaName": "Special Pizza", "PizzaDescrpation": "This is the Description", "PizzaPrice": "500"} |
            | {"id": "60efef4a85b8412388319202", "VendorId": "4","PizzaName": "Sada Pizza", "PizzaDescrpation": "This is the description of Simple agg Pizza", "PizzaPrice": "700"} |
    
    Scenario Outline: GetSingleProduct
        Given A Single Product <request>
        When I make a product GET request to "http://localhost:5000/product/getProduct"
        Then I get single product, response code 200

        Examples:
            | request                                                         |
            | {"id": "60f63757a1e1cc2c9865aadd"} |

    Scenario Outline: SaveProduct
        Given A Product Request <request>
        When I send POST request to "http://localhost:5000/product/saveProduct"
        Then I get product response code 200

        Examples:
            | request                                                         |
            | {"VendorId": 5,"PizzaName": "new posted", "PizzaDescrpation": "new posted testingApi1 is the Description", "PizzaPrice": 444} |
            | {"VendorId": "3","PizzaName": "new posted 2", "PizzaDescrpation": "new posted testingApi2 33dg 2This is the description of Simple agg Pizza", "PizzaPrice": "111"} |
    
    Scenario Outline: updateProduct
        Given A Product for update <request>
        When I send PUT request to "http://localhost:5000/product/updateProduct"
        Then I get updated product response code 200

        Examples:
            | request                                                         |
            | {"_id":"60f63757a1e1cc2c9865aadd", "VendorId": 2,"PizzaName": "Special Pizza newupdated11", "PizzaDescrpation": "This is the Description updated", "PizzaPrice": 500} |

    Scenario Outline: deleteProduct
        Given A Product for delete <request>
        When I send DELETE request to "http://localhost:5000/product/deleteProduct"
        Then I get product after deleted, response code 200

        Examples:
            | request                           |
            | {"id":"61388d0453b69e13fce83954"} |
          
