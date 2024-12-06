document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('audio-file');
    if (fileInput.files.length === 0) {
        alert('Please select a file!');
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:5000/transcribe', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        document.getElementById('output').textContent = data.transcription || 'Error during transcription.';
    } catch (error) {
        console.error(error);
        document.getElementById('output').textContent = 'Failed to transcribe the file.';
    }
});
