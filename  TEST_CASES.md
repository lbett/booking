# Test Cases for Booking.com

## User Story 1: Hotel Search & Filtering

### Test Case 1.1: Search for hotels in 'New York'
- **Input**: City = 'New York'
- **Action**: Enter the city in the search field.
- **Expected**: The page should display hotels located in New York.

### Test Case 1.2: Select check-in and check-out dates
- **Input**: Valid check-in and check-out dates.
- **Action**: Select the dates in the calendar.
- **Expected**: The results should update based on the selected dates, showing only rooms available for those dates.

### Test Case 1.3: Apply "Guest Rating: 8+" filter
- **Input**: Filter = 'Guest Rating: 8+'
- **Action**: Apply the guest rating filter.
- **Expected**: The results should update to show only hotels with a rating of 8 or higher.

### Test Case 1.4: Sort by "Lowest Price"
- **Input**: Sort by "Lowest Price".
- **Action**: Apply the lowest price sorting.
- **Expected**: The results should be displayed in ascending price order.

### Test Case 1.5: No "Guest Rating" filter applied
- **Input**: Do not apply any filter.
- **Action**: Perform the search without applying the "Guest Rating" filter.
- **Expected**: The results should show a variety of guest ratings, without any restriction.


AI in Test Case Generation
By using AI to enhance the test cases, we can identify additional or edge scenarios that may not be immediately obvious, such as searching for non-existent cities or selecting past dates, which are cases users may not consider, but are quite common.

In summary:

We used AI (in this case, ChatGPT) to generate additional test cases, such as searching with no results and verifying past dates.

The test cases cover common aspects like validating filters and sorting, but also include unusual scenarios that could arise in real-world use.