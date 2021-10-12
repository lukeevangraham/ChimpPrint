let axios = require("axios");
let cheerio = require("cheerio");

let getCampaign = async (url) => {
  const response = await axios.get(url);

  let $ = cheerio.load(response.data);

  let articles = [];

  $("td.bodyContainer")
    .children()
    .each((i, element) => {
      switch ($(element).attr("class")) {
        case "mcnDividerBlock":
        case "mcnShareBlock":
        case "mcnButtonBlock":
          break;
        default:
          //   console.log("ELEMENT", $(element).text().trim());
          // let images = []

          articles.push({
            headline: $(element).text().trim().split("\n", 1),
            text: $(element).text().trim(),
            image: {
              src: $(element).find("img").attr("src"),
              alt: $(element).find("img").attr("alt"),
            },
            html: $(element).html(),
            selected: true,
          });
          break;
      }
      //   $(element).attr("class") == "mcnDividerBlock" ||
      //   "mcnShareBlock" ||
      //   "mcnButtonBlock"
      //     ? console.log("divider")
      //     : console.log("ELEMENT", $(element).text().trim());
    });

  return articles;

  //   console.log(
  //     "HERE: ",
  //     $("td.bodyContainer")
  //       .children()
  //       .each((i, element) => {
  //         console.log("ELEMENT: ", $(element).text());
  //       })
  //   );
};

module.exports = getCampaign;
