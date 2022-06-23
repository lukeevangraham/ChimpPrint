import React, { useState } from "react";
import Scrape from "./containers/Scrape/Scrape";
import SelectCampaigns from "./components/SelectCampaigns/SelectCampaigns";
import SelectArticles from "./components/SelectArticles/SelectArticles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import axios from "axios";
// import cheerio from "cheerio";
// import useChimpArchive from "./hooks/useChimpArchive";

const App = () => {
  // let [archive, setArchive] = useState([]);
  // let [archive, scrape] = useChimpArchive([]);
  let [archive, setArchive] = useState([]);
  let [articles, setArticles] = useState([]);

  const clearState = () => {
    setArchive([])
    setArticles([])
  }

  return (
    <>
      <AppBar sx={{ mb: 2 }} position="static">
        <Toolbar>
          <Typography onClick={clearState} variant="h6" sx={{ cursor: "pointer" }}>
            ChimpPrint
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ margin: "0 2.5rem" }}>
        {archive.length ? (
          articles.length ? (
            <SelectArticles articles={articles} />
          ) : (
            <SelectCampaigns
              campaigns={archive}
              changeCampaigns={setArchive}
              setArticles={setArticles}
            />
          )
        ) : (
          <Scrape onFormSubmit={setArchive} />
        )}
      </div>
    </>
  );
};

export default App;
