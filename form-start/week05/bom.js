// 1. References to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Get the list from localStorage or start an empty array
let chaptersArray = getChapterList() || [];

// 3. Display the saved chapters when the page loads
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// 4. Button click event to add a new chapter
button.addEventListener('click', () => {
  if (input.value.trim() !== '') { // Check if it's not empty
    displayList(input.value);      // Display the chapter on screen
    chaptersArray.push(input.value); // Add it to the array
    setChapterList();              // Save the updated array to localStorage
    input.value = '';              // Clear the input
    input.focus();                 // Return focus to the input
  }
});

// 5. Function to build and display a list item
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // Class for delete button styling
  
  li.append(deletebutton);
  list.append(li);
  
  // Event to delete the chapter when clicking the "❌"
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // Remove from array and localStorage
    input.focus();
  });
}

// 6. Function to save to localStorage using JSON.stringify
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// 7. Function to retrieve and parse data from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// 8. Function to remove a specific chapter from the array
function deleteChapter(chapter) {
  // Remove the 'x' at the end of the text using slice
  chapter = chapter.slice(0, chapter.length - 1);
  // Filter the array to keep everything except the deleted chapter
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  // Update localStorage
  setChapterList();
}