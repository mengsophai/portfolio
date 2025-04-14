import React from "react";
import "./DownloadButton.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/_byMeng sophai  CV.pdf"; // Make sure cv.pdf is in your public folder
    link.download = "My_CV.pdf";
    link.click();
    
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
