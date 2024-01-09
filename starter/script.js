// Wait until the HTML document is fully loaded
$(document).ready(function() {
    // Display the current day in the HTML element with the id 'currentDay'
    // The format is 'day of the week, month day'
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));

    // Generate time blocks for each hour from 9 AM to 6 PM (18 in 24-hour format)
    for (let hour = 9; hour <= 18; hour++) {
        // Create a new div element for the time block and add the classes 'row' and 'time-block'
        const timeBlock = $('<div>').addClass('row time-block');

        // Create a new div element for the hour, add the class 'col-md-1 hour', and set the text to the formatted hour
        const hourCol = $('<div>').addClass('col-md-1 hour').text(dayjs().hour(hour).format('hA'));

        // Create a new textarea element for the event description, add the class 'col-md-10 description', and set the id to 'event-hour'
        const eventCol = $('<textarea>').addClass('col-md-10 description').attr('id', `event-${hour}`);

        // If there is a saved event for this hour in the local storage, load the event into the textarea
        // If there is no saved event, set the value to an empty string
        eventCol.val(localStorage.getItem(`event-${hour}`) || '');

        // Create a new button element for saving the event, add the class 'col-md-1 saveBtn', and set the HTML to a save icon
        const saveBtn = $('<button>').addClass('col-md-1 saveBtn');
        saveBtn.html('<i class="fas fa-save"></i>');

        // When the save button is clicked, save the event description to the local storage
        saveBtn.click(function() {
            localStorage.setItem(`event-${hour}`, eventCol.val());
        });

        // Add a class to the textarea for color coding based on whether the hour is in the past, present, or future
        const currentHour = dayjs().hour();
        if (hour < currentHour) {
            eventCol.addClass('past');
        } else if (hour === currentHour) {
            eventCol.addClass('present');
        } else {
            eventCol.addClass('future');
        }

        // Append the hour column, textarea, and save button to the time block
        timeBlock.append(hourCol, eventCol, saveBtn);

        // Append the time block to the HTML element with the class 'container'
        $('.container').append(timeBlock);
    }
});