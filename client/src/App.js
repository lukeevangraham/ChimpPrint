import React, { useState } from "react";
import Scrape from "./containers/Scrape/Scrape";
// import axios from "axios";
// import cheerio from "cheerio";
import useChimpArchive from "./hooks/useChimpArchive";

const App = () => {
  // let [archive, setArchive] = useState([]);
  let [archive, scrape] = useChimpArchive([])

  console.log("Archive: ", archive);

  return (
    <>
      <div>App</div>
      {archive.length ? <div>SOMETHING</div> : <Scrape onFormSubmit={scrape} />}
      
    </>
  );
};

export default App;
