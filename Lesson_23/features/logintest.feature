Feature: practicesoftwaretesting.com login testing

  Scenario Outline: As a website user, I can log in using valid credentials
    Given I navigate to "main" page
    When I click "Sign In" button
    When I login as "<account>" with email "<email>" and password "<password>"
    Then I should see text "<page_title>" as page title
    When I logout
    Then I should see button "Sign In" at navigation bar

    Examples:
      | account | email                                | password  | page_title           |
      | admin   | admin@practicesoftwaretesting.com    | welcome01 | Sales over the years |
      | user    | customer@practicesoftwaretesting.com | welcome01 | My account           |
