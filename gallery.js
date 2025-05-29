const gallerySection = document.getElementById("gallery");
const addPhoto = document.getElementById("add-photo");
const fileInput = document.getElementById("file-input");

addPhoto.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = "User submitted photo";
        gallerySection.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
});
