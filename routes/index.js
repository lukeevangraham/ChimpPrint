const router = require("express").Router();
const chimpScrapeRoutes = require("./chimpScrape");

router.use("/chimpScrape", chimpScrapeRoutes);

module.exports = router;
