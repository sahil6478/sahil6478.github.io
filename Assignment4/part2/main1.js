const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg',"pic4.jpg","pic5.jpg"]; // Add other image filenames here

imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename); // Assuming images are in the 'images' directory
  newImage.setAttribute('alt', 'Image'); // Set your alt text as needed
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
  });
});

btn.addEventListener('click', function() {
  if (btn.classList.contains('dark')) {
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
