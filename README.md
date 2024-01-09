# Day Planner

This project is a simple day planner application built with jQuery, Day.js, and Bootstrap.

## Features

- Displays the current day at the top of the planner.
- Generates time blocks for each hour from 9 AM to 6 PM.
- Allows users to write and save events for each hour.
- Color codes the time blocks based on whether the hour is in the past, present, or future.
- Saves events to the local storage, so they persist even after the page is refreshed.

## Installation

1. Clone the repository to your local machine using `git clone https://github.com/dudi62
2. Navigate to the project directory.
3. Open the `index.html` file in your web browser.

## Screenshots


## How It Works

The JavaScript code waits until the HTML document is fully loaded, then it does the following:

1. Uses the Day.js library to get the current day and displays it in the HTML element with the id 'currentDay'.
2. Generates time blocks for each hour from 9 AM to 6 PM. For each hour, it:
   - Creates a new row for the time block.
   - Creates a column for the hour and sets its text to the formatted hour.
   - Creates a textarea for the event description and sets its id to 'event-hour'.
   - If there is a saved event for this hour in the local storage, it loads the event into the textarea.
   - Creates a save button. When this button is clicked, it saves the event description to the local storage.
   - Depending on whether the hour is in the past, present, or future, it adds the corresponding class to the textarea for color coding.
   - Appends the hour column, textarea, and save button to the time block row, and then appends the row to the container.

## Dependencies

- jQuery: Used for HTML document traversal and manipulation, event handling, and AJAX.
- Day.js: Used for parsing, validating, manipulating, and displaying dates and times.
- Bootstrap: Used for designing and customizing the user interface.

## Usage

To use this day planner, simply open the `index.html` file in your web browser. You can write events in the textareas and click the save button to save them. The events will be saved even if you refresh the page.