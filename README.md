# Retirement Planning Application (React + TypeScript + Redux + Vite)

This sophisticated application empowers users in meticulously planning their retirement through an intuitive interface, enabling the input of diverse parameters and visualization of anticipated retirement outcomes. Notably, the application supports currency-based differentiation, factoring in the interest rates of the selected country for a location-specific perspective. The entire user interface is configured through a data-driven approach.


https://github.com/sidjha57/Retirement-Calculator/assets/62923020/b7b062ef-f2c6-4ca5-9c45-b0b4d5948db3


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Pages](#pages)
  - [Home](#home) 
  - [Not Found](#not-found)
  - [Retirement Planner](#retirement-planner)
- [Components](#components)
  - [Side Bar](#side-bar)
  - [Retirement Summary](#retirement-summary)
  - [Retirement Calculator](#retirement-calculator)
  - [Retirement Calculator Form](#retirement-calculator-form)
  - [BarChart](#barchart)
  - [Age Range Slider](#age-range-slider)
- [Redux State Management](#redux-state-management)
- [Utilities](#utilities)

## Installation

```bash
# Clone the repository
[git clone https://github.com/your-username/retirement-planner.git](https://github.com/sidjha57/Retirement-Calculator.git)

# Navigate to the project directory
cd Retirement-Calculator

# Install dependencies
npm install
```

## Usage

```bash
# Start the development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to explore the application.

## Features

1. **Currency-Driven Forecasting:** Calculates Retirement Forecast based on the selected currency, incorporating host country interest rates.
2. **Configurable UI:** Utilizes a configuration-driven user interface for enhanced flexibility.
3. **JsDoc Documentation:** Well-documented codebase for improved code understanding and maintenance.
4. **Eslint Integration:** Implements Eslint for enforcing code quality standards.
5. **Conventional Commits:** Follows Conventional Commits for a standardized and informative commit history.
6. **Type Aliases:** Utilizes Type Aliases for cleaner and more expressive imports.
7. **Structured File Organization:** Adheres to an industry-standard file structure for enhanced project maintainability.

## Components

### Side Bar
The `SideBar` component facilitates seamless navigation between different products.

### Retirement Summary

The `RetirementSummary` component delivers a comprehensive summary of the retirement forecast, encompassing current and desired retirement income, estimated pension pot, and monthly contributions.

### Retirement Calculator

The `RetirementCalculator` component is the hub for managing the retirement planning form, enabling users to input personal details and desired retirement income.

### Retirement Calculator Form

The `RetirementCalculatorForm` component leverages the useReducer hook to facilitate dynamic updates to the form details.

### BarChart

The `BarChart` component provides a visual representation of retirement income through a sophisticated two-bar chart, incorporating data on current and desired income heights.

### Age Range Slider

The `AgeRangeSlider` component offers an intuitive interface for selecting current and retirement ages, featuring sliders and input fields for user convenience.

## Redux State Management

The application employs Redux for robust state management, encompassing slices dedicated to managing currency codes and retirement form data.

## Utilities

### Redux Reducers

The `currencyCode/reducer` is responsible for dynamically updating the currency symbol and interest rates, thereby influencing the entire computation process.

### Calculations

Utility functions such as `GetUpdatedCalculatedSummary` and `CalculateDaysFromYears` contribute to the dynamic update and calculation of retirement summary information, complemented by other essential utility functions.

---
