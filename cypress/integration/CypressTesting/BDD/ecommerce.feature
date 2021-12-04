Feature: End to End E-Commerce app validation


    Regression testing
    @Regression
    Scenario: Ecommerce product delivery
    Given I open ecommerce page
    When I add items to cart
    And Validate the total pricess
    Then Select the country submit and verify success message

    @Smoke
    Scenario: Filling the form data to shop
    Given I open ecommerce page
    When I fill the form details
        |name1  |gender1|
        |Bobm   |Female |
    Then Validate the form behaviour   
    And Select the shop page      