import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Scrape = ({ onFormSubmit }) => {
  let [archiveURL, setArchiveUrl] = useState("");

  const scrapeArchive = (e) => {
    e.preventDefault();
    console.log("Scrape initiated! ", archiveURL);

    onFormSubmit(archiveURL);
  };

  const scrapeForm = (
    <>
      <div>Enter a MailChimp Campaign Archive URL to source from</div>
      <TextField
        variant="standard"
        onChange={(e) => setArchiveUrl(e.target.value)}
        value={archiveURL}
        sx={{ width: 400 }}
        label="MailChimp Campaign Archive URL"
      />
      <Button
        variant="contained"
        onClick={(e, archiveURL) => scrapeArchive(e, archiveURL)}
      >
        Scrape
      </Button>
    </>
  );

  return <>{scrapeForm}</>;
};

export default Scrape;
