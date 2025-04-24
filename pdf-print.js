function downloadCertificate() {
  const element = document.querySelector('.cert-wrapper');
  const opt = {
    margin: 0,
    filename: 'supercharge-design-certificate.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'px', format: [800, 600], orientation: 'landscape' }
  };
  html2pdf().set(opt).from(element).save();
}
