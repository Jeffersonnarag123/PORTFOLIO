function downloadCV() {
  const cvUrl = 'c:\Users\Win10\OneDrive\Desktop\ELSA\cv.docx'; 
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Your_CV.docx'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const btn = document.getElementById('button');

// Initialize EmailJS with your public key
// Initialize EmailJS with your public key
emailjs.init('VMaH-vNYiY3LImjRd');

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Send email using EmailJS
    emailjs.send('service_o5r8uy7', 'template_lmvsu1g', {
        from_name: name,
        from_email: email,
        message: feedback,
    })
    .then(() => {
        // Show thank you message
        document.getElementById('thankYouMessage').classList.remove('hidden');
        
        // Clear form fields
        document.getElementById('feedbackForm').reset();
    })
    .catch((error) => {
        alert("Failed to send feedback. Please try again later.");
        
    });
});
