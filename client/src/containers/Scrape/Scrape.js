import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Scrape = ({ onFormSubmit }) => {
  let [archiveURL, setArchiveUrl] = useState("");

  const scrapeArchive = async (e) => {
    e.preventDefault();

    const response = await axios.post(`/chimpScrape`, {
      url: archiveURL,
    });

    onFormSubmit(response.data.campaigns);
  };

  const getArchiveListForm = (
    <>
      <div>Enter a MailChimp Campaign Archive URL to source from</div>
      <TextField
        variant="standard"
        onChange={(e) => setArchiveUrl(e.target.value)}
        value={archiveURL}
        sx={{ width: "60%" }}
        label="MailChimp Campaign Archive URL"
      />
      <Button
        variant="contained"
        onClick={(e, archiveURL) => scrapeArchive(e, archiveURL)}
      >
        Select Issues
      </Button>
    </>
  );

  return <>{getArchiveListForm}</>;
};

export default Scrape;
