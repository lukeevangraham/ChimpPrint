import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Newsletter from "../Newsletter/Newsletter";
import { PDFViewer } from "@react-pdf/renderer";

const SelectArticles = ({ articles }) => {
  let [churchName, setChurchName] = useState("RB Community Church");
  let [publicationTitle, setPublicationTitle] = useState("Life of the Church");
  let [footerText, setFooterText] = useState("rbcommunity.org");
  let [subheading, setSubheading] = useState("If you've complained about not knowing what's going on...here you go");
  let [selectedArticles, setSelectedArticles] = useState([
  ]);

  const toggleArticleSelection = (e) => {
    if (e.target.checked) {
      // RETURNING AN ARTICLE'S INDEX TO 'SELECTED ARTICLES'

      setSelectedArticles(
        [...selectedArticles, e.target.id].sort((a, b) => a - b)
      );
    } else if (!e.target.checked) {
      // REMOVING AN ARTICLE'S INDEX FROM 'SELECTED ARTICLES'

      setSelectedArticles(
        selectedArticles.filter((article) => article != e.target.id)
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "70% 1fr",
          height: "100vh",
        }}
      >
        <div style={{ gridColumn: "1 / 2", padding: "2rem" }}>
          <PDFViewer width="100%" height="100%">
            <Newsletter
              orgName={churchName}
              newsletterName={publicationTitle}
              footerText={footerText}
              subheading={subheading}
              articles={selectedArticles.map((article) => articles[article])}
            />
          </PDFViewer>
          {/* News
          <Box sx={{ display: "grid", gridTemplateRows: "12px 35px 17px 1fr" }}>
            <div style={{ gridRow: "1/2" }}>{orgName}</div>
            <div style={{ gridRow: "2/3" }}>Newsletter</div>
          </Box> */}
        </div>
        <div style={{ gridColumn: "2 / 3" }}>
          <div>
            <TextField
              label="Church Name"
              variant="outlined"
              value={churchName}
              sx={{ width: "100%", marginTop: "2rem" }}
              onChange={(e) => setChurchName(e.target.value)}
            />
            <TextField
              label="Publication Title"
              variant="outlined"
              value={publicationTitle}
              sx={{ width: "100%", marginTop: "1rem" }}
              onChange={(e) => setPublicationTitle(e.target.value)}
            />
            <TextField
              label="Subheading"
              variant="outlined"
              value={subheading}
              sx={{ width: "100%", marginTop: "1rem" }}
              onChange={(e) => setSubheading(e.target.value)}
            />
            <TextField
              label="Footer Text"
              variant="outlined"
              value={footerText}
              sx={{ width: "100%", marginTop: "1rem" }}
              onChange={(e) => setFooterText(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            Articles:
            <ul style={{ listStyle: "none" }}>
              {articles.map((article, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      name={index}
                      id={index}
                      onChange={(e) => toggleArticleSelection(e)}
                    />
                    {article.headline}
                  </label>
                </li>
              ))}
            </ul>
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
