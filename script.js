function handleFileSelect(event) {
    const file = event.target.files[0];
    const fileNameSpan = document.getElementById('fileName');
    if (file) {
        fileNameSpan.textContent = file.name;
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = URL.createObjectURL(file);
        document.getElementById('pdfContainer').style.display = 'block';
    }
}

function closePDF() {
    const pdfContainer = document.getElementById('pdfContainer');
    pdfContainer.style.display = 'none';
    document.getElementById('files').value = ''; // Reset file input
    document.getElementById('fileName').textContent = ''; // Clear file name display
}

function downloadPDF() {
    const pdfViewer = document.getElementById('pdfViewer');
    const link = document.createElement('a');
    link.href = pdfViewer.src;
    link.download = document.getElementById('fileName').textContent || 'download.pdf';
    link.click();
}
