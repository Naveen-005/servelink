function previewMedia(event) {
  const fileInput = event.target;
  const previewContainer = document.getElementById('mediaPreview');
  
  // Clear previous previews
  previewContainer.innerHTML = '';

  // Check if any files are selected
  if (fileInput.files && fileInput.files.length > 0) {
    // Loop through each selected file
    for (let i = 0; i < fileInput.files.length; i++) {
      const file = fileInput.files[i];
      const reader = new FileReader();

      // Read the file and create a preview
      reader.onload = function(e) {
        const fileType = file.type.split('/')[0];
        const preview = document.createElement('div');

        if (fileType === 'image') {
          // For image files
          const image = document.createElement('img');
          image.src = e.target.result;
          image.classList.add('preview-image');
          preview.appendChild(image);
        } else if (fileType === 'video') {
          // For video files
          const video = document.createElement('video');
          video.src = e.target.result;
          video.controls = true;
          video.classList.add('preview-video');
          preview.appendChild(video);
        } else if (fileType === 'audio') {
          // For audio files
          const audio = document.createElement('audio');
          audio.src = e.target.result;
          audio.controls = true;
          audio.classList.add('preview-audio');
          preview.appendChild(audio);
        }

        // Append the preview to the container
        previewContainer.appendChild(preview);
      };

      // Display error if file type is not supported
      reader.onerror = function(e) {
        console.error('Error occurred while reading the file:', e);
      };

      // Read the file as data URL
      reader.readAsDataURL(file);
    }
  }
}
