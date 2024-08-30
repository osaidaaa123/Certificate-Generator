document.getElementById('certForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load a certificate template image
    const img = new Image();
    img.src = 'certificate_template.png';  // Add your certificate template image
    img.onload = function() {
        // Draw the template image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set text properties
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';

        // Draw name
        ctx.fillText(name, canvas.width / 2, 300);  // Adjust the y-coordinate as needed

        // Draw course name
        ctx.fillText(course, canvas.width / 2, 400);  // Adjust the y-coordinate as needed

        // Enable download link
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = canvas.toDataURL();
        downloadLink.style.display = 'block';
    };
});
