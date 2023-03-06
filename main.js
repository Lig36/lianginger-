const readMoreButton = document.getElementById('read-more-button');
const secondParagraph = document.getElementById('second-paragraph');

// Hide the second paragraph by default
secondParagraph.style.display = 'none';

// Add a click event listener to the "Read More" button
readMoreButton.addEventListener('click', function() {
  // Toggle the visibility of the second paragraph
  if (secondParagraph.style.display === 'none') {
    secondParagraph.style.display = 'block';
    readMoreButton.textContent = 'Read Less';
  } else {
    secondParagraph.style.display = 'none';
    readMoreButton.textContent = 'Read More';
  }
});
// select the <p> element
const pElement = document.querySelector('p');

// define an array of colors
const colors = ['#ff2', '#2aff', '#f2f2f2', '#333'];

// set an interval to update the color every 30 seconds
let i = 0;
setInterval(() => {
  pElement.style.color = colors[i];
  i = (i + 1) % colors.length;
}, 3000);

