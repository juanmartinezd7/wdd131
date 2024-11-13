

// Get references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Create a new list item and delete button when the user clicks the 'Add' button
button.addEventListener('click', function() {
    // Check if the input value is not empty or just whitespace
    if (input.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = input.value; // Set the text of the list item to the input value

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton); // Append the delete button to the list item

        // Add the list item to the list
        list.append(li);

        // Add event listener to delete the list item when the delete button is clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove the list item from the list
        });

        // Clear the input field after adding the list item
        input.value = '';

        // Optionally focus the input again for the next item
        input.focus();
    }
});

// Focus on the input when the page loads
input.focus();










