// Updated JavaScript with modifications for improved accessibility

// Functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', function() {
  if (commentWrapper.style.display === 'none') {
    commentWrapper.style.display = 'block';
    showHideBtn.textContent = 'Hide comments';
  } else {
    commentWrapper.style.display = 'none';
    showHideBtn.textContent = 'Show comments';
  }
});

// Functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-wrapper'); // Changed to target comments wrapper

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const listItem = document.createElement('div'); // Changed to create a div for each comment
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue + ':';
  commentPara.textContent = commentValue;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}
