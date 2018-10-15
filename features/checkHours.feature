@checkhours
Feature: Check Hours Matching

    As a client should be able to search a movie and see that functions hours match as expected

    Scenario: A client search Movie functions
        Given a client is in home page
        When a city is selected to search Movies
        Then app will show all Movies' functions
        And functions must match as in the main search page

