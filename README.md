# Fuse QA Take-Home Challenge

## Overview
The goal of this challenge is to design, document, and automate test cases for Booking.com using AI-driven strategies. You will validate real-world workflows on the platform using an automation framework of your choice (Playwright, Cypress, Selenium, WebdriverIO).

## User Stories & Test Scenarios

### User Story 1: Hotel Search & Filtering
#### Test Case 1.1: Search for hotels in 'New York'
#### Test Case 1.2: Select check-in and check-out dates
#### Test Case 1.3: Apply "Guest Rating: 8+" filter
#### Test Case 1.4: Sort by "Lowest Price"
#### Test Case 1.5: No "Guest Rating" filter applied

## AI in Test Case Generation
By using AI to enhance the test cases, additional or edge scenarios were identified that may not be immediately obvious, such as:
- Searching for non-existent cities.
- Selecting past dates.

These are common scenarios that users may not always consider but can happen frequently in real-world use. For example, users might search for hotels in a city that doesn't exist or select dates in the past, which should trigger validation errors.

**AI Contributions:**
- AI (ChatGPT) was used to generate additional test cases, such as searching with no results and verifying the handling of invalid dates or non-existent cities.
- AI also helped refine edge cases for more comprehensive coverage.

## Test Automation Framework
- **Framework Used:** [Playwright](https://playwright.dev) (or whichever framework you used).
- **Assertions:** All critical user actions were validated using meaningful assertions.

## Setup & Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/lbett/booking.git
    cd booking-qa-automation
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the tests:
    ```bash
    npm run test
    ```

4. Generate the Allure Report:
    ```bash
    allure generate allure-results --clean
    allure serve allure-results
    ```

## CI/CD Pipeline
This repository is integrated with GitHub Actions for continuous integration and delivery. The pipeline is triggered on push or pull request to the `main` branch.

### Steps Executed in CI:
1. Checkout the code.
2. Set up Node.js.
3. Install dependencies.
4. Run Playwright tests.
5. Install Allure Command Line and generate the report.
6. Upload Allure Report as an artifact.

## Loom Video Demonstration
A Loom video has been recorded demonstrating the automation process, including:
- Running the automated tests.
- [Link to Loom Video](your-loom-video-link)

## Test Case Documentation
Detailed test cases are documented in the `TEST_CASES.md` file.

## Future Improvements
- **Cloud Execution:** Running tests on platforms like Sauce Labs or BrowserStack for cross-browser testing.
- **CI/CD Integration with Jenkins/CircleCI:** Expanding CI/CD pipeline capabilities for enhanced automation.
