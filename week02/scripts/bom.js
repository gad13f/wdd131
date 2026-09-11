const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    // 1. Check to make sure the input is not blank
    if (input.value.trim() !== '') {
        // 2. Create elements for a new chapter inside the event
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Assign input text to the li and icon to the delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove chapter');

        // Append the delete button to the li, and the li to the list
        li.append(deleteButton);
        list.append(li);

        // 3. Add the click event listener to this specific chapter's delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // 4. Clear the input field and return focus
        input.value = '';
        input.focus();
    } else {
        // If it is blank, simply return focus to the input
        input.focus();
    }
});