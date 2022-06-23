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
      <div
        style={{
          maxWidth: "600px",
          marginTop: "2.5rem",
          backgroundColor: "#d3d3d3",
          borderRadius: "7px",
          padding: "1rem",
        }}
      >
        <div>To find your Campaign Archive URL follow these steps:</div>
        <ol>
          <li>
            Log into{" "}
            <a href="http://mailchimp.com" target="_blank">
              Mailchimp
            </a>
          </li>
          <li>
            Click <i>Campaigns</i>
          </li>
          <li>
            Next to (or under) your Campaign you'll see a button called{" "}
            <i>Sent Campaign</i> or <i>View Report</i> or <i>Edit</i> (the
            wording depends on the type of Campaign). Click the down arrow to
            the right of the words.{" "}
          </li>
          <li>
            Click <i>View email</i>.
          </li>
          <li>
            You'll now see an email that was sent as part of your Campaign.
            Click <i>Past Issues</i> which is near the top of the screen.
          </li>
          <li>
            You are now seeing a list (archive) of sent Campaigns. The link to
            the archive will be in your Internet Browser (e.g. Google Chrome,
            Safari, Firefox, etc.) address bar.
          </li>
        </ol>
      </div>
    </>
  );

  return <>{getArchiveListForm}</>;
};

export default Scrape;
