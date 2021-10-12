import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Newsletter from "../Newsletter";

const NewsletterViewer = () => (
  <PDFViewer>
    <Newsletter />
  </PDFViewer>
);

export default NewsletterViewer;
