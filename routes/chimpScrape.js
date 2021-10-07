const router = require("express").Router()
const chimpScrapeController = require("../controllers/chimpScrape")

router.post("/", chimpScrapeController.post)
router.post("/chimpPullContent", chimpScrapeController.campaign)

module.exports = router;