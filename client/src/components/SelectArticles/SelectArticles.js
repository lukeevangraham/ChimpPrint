import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Newsletter from "../Newsletter/Newsletter";
import { PDFViewer } from "@react-pdf/renderer";

const SelectArticles = ({ articles }) => {
  let [orgName, setOrgName] = useState("");
  let [selectedArticles, setSelectedArticles] = useState(articles[0])

  const displayArticles = campaign => (
    campaign.map((article, index) => (
      <div key={index}>
        {article.headline}{console.log("ART: ", article)}
      </div>
    ))
  )

  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: "70% 1fr", height: "100vh" }}>
        <div style={{ gridColumn: "1 / 2", padding: "2rem" }}>
          <PDFViewer width="100%" height="100%">
            <Newsletter orgName={orgName} articles={selectedArticles} />
          </PDFViewer>
          {/* News
          <Box sx={{ display: "grid", gridTemplateRows: "12px 35px 17px 1fr" }}>
            <div style={{ gridRow: "1/2" }}>{orgName}</div>
            <div style={{ gridRow: "2/3" }}>Newsletter</div>
          </Box> */}
        </div>
        <div style={{ gridColumn: "2 / 3" }}>
          <div>
            <div>Heading</div>
            <TextField
              label="Organization Name"
              variant="outlined"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
          </div>
          <div>
            Articles:
            {console.log("ARTICLES: ", articles)}
            {articles.map((campaign) => (
              <ul>
                {campaign.map(article => (
                  <li>{article.headline}</li>
                ))}
              </ul>
            ))}
            {/* {articles[0].map((article, index) => (
              <div key={index}>
                {article.headline}
              </div>
            ))} */}
          </div>
        </div>
        {/* {articles[0].map((article) => (
        //   <div>{article.headline}</div>
        <div dangerouslySetInnerHTML={{ __html: article.html }}></div>
    ))} */}
      </Box>
    </>
  );
};

export default SelectArticles;
