import React from "react";
import { saveAs } from "file-saver";

import "./DownloadButton.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1U1XRvFyAWNV0End6Q_CnV01cNXf9Haw9/view?usp=share_link";
    //   const fileUrl = "../../Mahroos_Anwar_Resume_3.pdf";
    saveAs(fileUrl, "MahroosAnwarCV.pdf");
  };

  return (
    <button className="button s-button" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
