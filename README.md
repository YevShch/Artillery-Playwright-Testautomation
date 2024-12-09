# Workshop: Artillery, Realistic Load Testing of Mataffären 🛒 🍞🍗🍎

## Workshop Overview

This workshop focuses on performing realistic load testing of the Mataffären web application using Artillery combined with Playwright. Initially, Artillery was used to run basic tests on the application, but these tests only measured the loading of the `index.html` file without taking into account JavaScript, CSS, or other important interactions like API calls. The goal of this workshop is to enhance the tests by integrating Playwright with Artillery to simulate real user interactions, providing more accurate and realistic results.

## Workshop Objectives

During the workshop, the main tasks were to:

- Extend and improve Artillery tests to simulate real user behavior, including waiting for JavaScript execution and page load.
- Integrate Playwright with Artillery to measure more realistic user interactions such as clicking, page rendering, and API requests.
- Measure and compare session times and response times for different URLs between Artillery (basic tests) and Artillery with Playwright.
- Experiment with different `duration` times and user behavior patterns in Artillery to reflect realistic usage scenarios.

## What I Did

1. **Initial Testing Setup**:
   - I used a basic Artillery test setup that only loaded the `index.html` file, without considering the full page load, JavaScript, or CSS. This setup was basic and not very representative of real-world usage.

2. **Enhancing the Test**:
   - I integrated Playwright with Artillery to simulate complete user interactions, including JavaScript execution and page rendering. This made the test more realistic by reflecting how a user would interact with the page.
   - I added "think" pauses between actions (1-3 seconds) to simulate real user behavior, rather than sending requests in quick succession.
   
3. **Measuring Response Times**:
   - In the Playwright scenario, I measured the response times for each URL individually by adding functions for each interaction, allowing a detailed comparison of response times between different URLs.
   - I compared the session duration and response times between the basic Artillery test (which was only measuring `index.html` loading) and the more realistic Playwright integration.
   
4. **Adjusting Duration and User Patterns**:
   - I experimented with different `duration` settings in Artillery’s YAML configuration to simulate more realistic load scenarios. I used durations of 180 seconds and adjusted the `arrivalRate` to gradually ramp up from 2 to 5 users.
   - I focused on finding more realistic user behavior patterns (e.g., not visiting the same page multiple times in quick succession) to reflect how actual users would interact with the application.

## How to Install the Project and Run Tests

1. **Clone the Repository**:
```bash
git clone <your-repository-url> cd <your-repository-name>
```

2. **Install Dependencies**:
Ensure that you have Node.js installed, then install the required packages:

```bash
npm install
```

3. **Build the Project**:
Build the Vite/React project to create the `dist` folder:

```bash
npm run build
```

4. **Start the Backend**:
Run the backend to serve the application:
```bash
npm run backend
```

5. **Run the Load Test with Artillery**:
Open another terminal window and run the load test:

```bash
npm run load-test
```

6. **Run the Load Test with Artillery and Playwright**:

```bash
npm run shopper-test
```
