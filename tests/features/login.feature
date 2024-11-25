Feature: Login

    Scenario: Valid Login

        Given I m on the login page
        When I type my email and password
        Then I have a successful login