import { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";
// import cheerioMailchimp from "../apis/cheerioMailchimp";

const useChimpArchive = () => {
  const [archive, setArchive] = useState([]);


  const scrape = async (url) => {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/${url}`
    )

      let $ = cheerio.load(response.data);

      let results = [];
  
      $("li.campaign").each((i, element) => {
        // Grab the date, headline and URL of each campaign
  
        let date = $(element).text().split(" - ")[0];
  
        let url = $(element).children().attr("href");
  
        let headline = $(element).children().attr("title");
  
        // So long as our headline and url aren't empty or undefined, do the following
        if (headline && date && url) {
          // This section uses regular expressions and the trim function to tidy our headlines and summaries
          // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
          var headNeat = headline.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
  
          // Initialize an object we will push to the articles array
          var dataToAdd = {
            headline: headNeat,
            date: date,
            url: url,
          };
  
          // Push new article into articles array
          results.push(dataToAdd)
        }
        // console.log("RESULTS: ", results)
        setArchive(results);
        // console.log("ARCHIVE: ", archive)
      });
    
  };

  return [archive, scrape];
};

export default useChimpArchive;
