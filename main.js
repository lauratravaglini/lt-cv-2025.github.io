function downloadPDF() {
  // First, track the event
  gtag('event', 'download_cv', {
    event_category: 'engagement',
    event_label: 'Download CV'
  });

  // Then, create a fake link to trigger the download
  const link = document.createElement('a');
  link.href = 'files/Travaglini_CV2025.pdf'; // adjust if needed
  link.download = 'Travaglini_CV2025.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
