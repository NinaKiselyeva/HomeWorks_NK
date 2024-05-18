Feature: practicesoftwaretesting.com login fields and errors testing

  Scenario Outline: As a website user, I can set invalid credentials and receive error message
    Given I navigate to "main" page
    When I click "Sign In" button
    When I login as "user" with email "<email>" and password "<password>"
    Then I should see error "<error_message>" under "<error_input>"

    Examples:
      | email                                  | password  | error_message              | error_input |
      | customer@practicesoftwaretesting.com   |           | Password is required.      | password    |
      | admin@practicesoftwaretesting.com      | welcome99 | Invalid email or password  | login       |
      | customer@practicesoftwaretesting.com   |         1 | Password length is invalid | password    |
      |                                        |           | Password is required.      | password    |
      |                                        |           | E-mail is required.        | email       |
      |                                        | welcome01 | E-mail is required.        | email       |
      | customer99@practicesoftwaretesting.com | welcome01 | Invalid email or password  | login       |
      | customer99@practicesoftwaretesting.com | welcome05 | Invalid email or password  | login       |
      | uuu                                    | welcome01 | E-mail format is invalid.  | email       |
