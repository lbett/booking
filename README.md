Fuse QA Take-Home Challenge
Overview
The goal of this challenge is to design, document, and automate test cases for Booking.com using AI-driven strategies. You will validate real-world workflows on the platform using an automation framework of your choice (Playwright, Cypress, Selenium, WebdriverIO).

User Stories & Test Scenarios
User Story 1: Hotel Search & Filtering
Test Case 1.1: Search for hotels in 'New York'
Input: City = 'New York'

Action: Enter the city in the search field.

Expected: The page should display hotels located in New York.

Test Case 1.2: Select check-in and check-out dates
Input: Valid check-in and check-out dates.

Action: Select the dates in the calendar.

Expected: The results should update based on the selected dates, showing only rooms available for those dates.

Test Case 1.3: Apply "Guest Rating: 8+" filter
Input: Filter = 'Guest Rating: 8+'

Action: Apply the guest rating filter.

Expected: The results should update to show only hotels with a rating of 8 or higher.

Test Case 1.4: Sort by "Lowest Price"
Input: Sort by "Lowest Price".

Action: Apply the lowest price sorting.

Expected: The results should be displayed in ascending price order.

Test Case 1.5: No "Guest Rating" filter applied
Input: Do not apply any filter.

Action: Perform the search without applying the "Guest Rating" filter.

Expected: The results should show a variety of guest ratings, without any restriction.

AI in Test Case Generation
By using AI to enhance the test cases, additional or edge scenarios were identified that may not be immediately obvious, such as:

Searching for non-existent cities.

Selecting past dates.

These are common scenarios that users may not always consider but can happen frequently in real-world use. For example, users might search for hotels in a city that doesn't exist or select dates in the past, which should trigger validation errors.

AI Contributions:

AI (ChatGPT) was used to generate additional test cases, such as searching with no results and verifying the handling of invalid dates or non-existent cities.

AI also helped refine edge cases for more comprehensive coverage.

Test Automation Framework
Framework Used: Playwright (or whichever framework you used).

Assertions: All critical user actions were validated using meaningful assertions.

Setup & Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/booking-qa-automation.git
cd booking-qa-automation
Install the dependencies:

bash
Copy
Edit
npm install
Run the tests:

bash
Copy
Edit
npm run test
Generate the Allure Report:

bash
Copy
Edit
allure generate allure-results --clean
allure serve allure-results
CI/CD Pipeline
This repository is integrated with GitHub Actions for continuous integration and delivery. The pipeline is triggered on push or pull request to the main branch.

Steps Executed in CI:
Checkout the code.

Set up Node.js.

Install dependencies.

Run Playwright tests.

Install Allure Command Line and generate the report.

Upload Allure Report as an artifact.

Loom Video Demonstration
A Loom video has been recorded demonstrating the automation process, including:

Running the automated tests.

Explanation of AI integration in the workflow.

Link to Loom Video

Test Case Documentation
Detailed test cases are documented in the TEST_CASES.md file.

Bonus Features
Parallel Execution: Tests run in parallel to speed up execution.

AI-Driven Test Maintenance: AI tools are used to optimize flaky tests.

Future Improvements
Cloud Execution: Running tests on platforms like Sauce Labs or BrowserStack for cross-browser testing.

CI/CD Integration with Jenkins/CircleCI: Expanding CI/CD pipeline capabilities for enhanced automation.
