let axios = require("axios");
let cheerio = require("cheerio");

let getCampaign = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  let $ = cheerio.load(response.data);

  let articles = [];

  // Try standard modern container first, then fall back to Mark's classic #templateBody
  let $containers = $("td.bodyContainer");
  if ($containers.length === 0 || $containers.children().length === 0) {
    $containers = $("td#templateBody");
  }

  $containers.children().each((i, element) => {
    switch ($(element).attr("class")) {
      case "mcnDividerBlock":
      case "mcnShareBlock":
      case "mcnButtonBlock":
        break;
      default:
        const text = $(element).text().trim();
        if (!text && !$(element).find("img").attr("src")) {
          break; // Skip empty blocks
        }

        articles.push({
          headline: text.split("\n", 1),
          text: text,
          image: {
            src: $(element).find("img").attr("src") || "",
            alt: $(element).find("img").attr("alt") || "",
          },
          html: $(element).html(),
          selected: true,
        });
        break;
    }
  });

  return articles;
};

module.exports = getCampaign;
