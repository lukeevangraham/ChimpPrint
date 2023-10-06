import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Intro from "../../components/Intro/Intro";
import { Typography, List, ListItemText } from "@mui/material";

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
      <Typography style={{ marginBottom: "0rem" }}>
        Enter a MailChimp Campaign Archive URL to source from:
      </Typography>
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
          marginTop: "3rem",
          backgroundColor: "#d3d3d3",
          borderRadius: "7px",
          padding: "1rem",
        }}
      >
        <Typography>
          To find your Campaign Archive URL follow these steps:
        </Typography>
        <List sx={{ listStyle: "decimal", pl: 4, fontFamily: "sans-serif" }}>
          <ListItemText sx={{ display: "list-item" }}>
            Log into{" "}
            <a rel="noreferrer" href="http://mailchimp.com" target="_blank">
              Mailchimp
            </a>
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            Click <i>Campaigns</i>
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            Next to (or under) your Campaign you'll see a button called{" "}
            <i>Sent Campaign</i> or <i>View Report</i> or <i>Edit</i> (the
            wording depends on the type of Campaign). Click the down arrow to
            the right of the words.{" "}
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            Click <i>View email</i>.
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            You'll now see an email that was sent as part of your Campaign.
            Click <i>Past Issues</i> which is near the top of the screen.
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            You are now seeing a list (archive) of sent Campaigns. The link to
            the archive will be in your Internet Browser (e.g. Google Chrome,
            Safari, Firefox, etc.) address bar.
          </ListItemText>
        </List>
      </div>
      <Typography
        onClick={() =>
          setArchiveUrl(
            "https://us11.campaign-archive.com/home/?u=16a7d00c97055ae7a7fe916ec&id=952a98efb9"
          )
        }
        style={{ marginTop: "2rem", cursor: "pointer", color: "blue", textDecoration: "underline", marginBottom: "2rem" }}
      >
        Want a sample url? Click here
      </Typography>
    </>
  );

  return (
    <>
      <Intro />
      {getArchiveListForm}
    </>
  );
};

export default Scrape;
