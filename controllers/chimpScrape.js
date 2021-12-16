const { default: axios } = require("axios");
let scrape = require("../scripts/scrape");
let getCampaign = require("../scripts/getCampaign");

module.exports = {
  post: async (req, res) => {
    try {
      let response = await scrape(req.body.url);

      res.json({
        campaigns: response,
      });
    } catch (e) {
      console.log(e);
    }
  },
  campaign: async (req, res) => {
    try {
      console.log("BODY: ", req.body.issues);

      // let response = await getCampaign(req.body.issues[0].url)

      let result = await Promise.all(
        req.body.issues.map((i) => getCampaign(i.url))
        // req.body.issues.map((i) => axios.get(i.url))
      );

      res.json({
        articles: result,
      });

      // console.log("ISS: ", result);
    } catch (e) {
      console.log(e);
    }
  },
};
