import axios from "axios";
import cheerio from "cheerio";

let scrape = () => {
  return axios
    .get(
      `https://us11.campaign-archive.com/home/?u=16a7d00c97055ae7a7fe916ec&id=952a98efb9`
    )
    .then((res) => {
      let $ = cheerio.load(res.data);

      console.log("scraping", $);

      // let entries = [];
    });
};

export default scrape;
