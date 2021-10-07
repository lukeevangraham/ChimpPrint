let axios = require("axios");
let cheerio = require("cheerio");

let scrape = async (url) => {
  const response = await axios.get(url);

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

      let defaultSelection = false;

      i < 2 ? (defaultSelection = true) : null;

      // Initialize an object we will push to the articles array
      var dataToAdd = {
        headline: headNeat,
        date: date,
        url: url,
        selected: defaultSelection,
      };

      // Push new article into articles array
      results.push(dataToAdd);
    }
  });
  return results;
};

module.exports = scrape;
