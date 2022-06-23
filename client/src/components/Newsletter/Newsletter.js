import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Assistant",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/assistant/v1/2iDwv6DBtyixlK5YHngp1w.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/assistant/v1/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf",
      fontWeight: 200,
    },
    {
      src: "https://fonts.gstatic.com/s/assistant/v1/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf",
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: "Cardo",
  fonts: [
    { src: "https://fonts.gstatic.com/s/cardo/v8/jbkF2_R0FKUEZTq5dwSknQ.ttf" },
    // { src: "http://fonts.gstatic.com/s/assistant/v1/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf", fontWeight: 200 },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: "20 20 55 20",
  },
  title: {
    fontFamily: "Assistant",
    fontSize: 20,
    // marginBottom: 7
  },
  text: {
    fontSize: 12,
    fontFamily: "Cardo",
    margin: "0 0 9 0",
    lineHeight: "1.5",
  },
  textLast: {
    fontSize: 12,
    fontFamily: "Cardo",
    margin: "0",
    lineHeight: "1.5",
  },
  image: {
    maxWidth: "50%",
    height: "auto",
    marginBottom: 7,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    fontSize: 12,
    bottom: 20,
    left: 0,
    right: 0,
    color: "grey",
    fontFamily: "Assistant",
    justifyContent: "space-between",
    padding: "10 0",
    margin: "0 20",
    // backgroundColor: "#e8e8e8",
  },
  pageNumber: {
    // position: "absolute",
    // fontSize: 12,
    // bottom: 30,
    // left: 0,
    // right: 0,
    // textAlign: "center",
    // color: "grey",
    // fontFamily: "Assistant",
  },
  article: {
    // borderBottom: "1 solid grey",
    // marginBottom: 10
    // backgroundColor: "red"
  },
  shortArticle: {
    flexDirection: "row",
    // borderBottom: "1 solid grey",
    // marginBottom: 10,
  },
  shortArticleText: {
    marginRight: 185,
    marginLeft: 10,
    fontSize: 12,
    fontFamily: "Cardo",
    lineHeight: "1.5",
  },
  shortArticleImage: {
    width: "33%",
    height: "auto",
    // flexGrow: "0",
    // flexShrink : "0"
    objectFit: "contain",
    objectPosition: "0% 0%",
    paddingBottom: 10,
  },
  spacer: {
    borderBottom: "1 solid grey",
    marginBottom: 10,
    paddingBottom: 10,
  },
});

const Newsletter = ({ orgName, articles }) => {
  Font.register({
    family: "Roboto",
    src: "https://fonts.googleapis.com/css2?family=Assistant&display=swap",
  });

  console.log("ARTICLES [Newsletter]: ", articles);

  const longArticles = articles.filter((article) => article.text.length >= 400);
  const shortArticles = articles.filter((article) => article.text.length > 400);

  const formatListItem = (item) => <Text>&bull; {item.substring(1)}</Text>;

  const formatTitleAndText = (article) => (
    <View>
      <Text minPresenceAhead={24} style={styles.title}>
        {article.headline[0].length >= 100 ? null : `${article.headline}`}
      </Text>
      {article.text.split("\n").map((text, index, array) =>
        index > 0 && text.length > 1 ? (
          text.charAt(0) === "\t" ? (
            formatListItem(text)
          ) : index === array.length - 1 ? (
            <Text style={styles.textLast}>{text}</Text>
          ) : (
            <Text style={styles.text}>{text}</Text>
          )
        ) : // DON'T MAKE A BIG HEADING IF THE ARTICLE STARTS WITH A LONG SENTENCE
        text.length >= 100 ? (
          <Text style={styles.text}>{text}</Text>
        ) : null
      )}
    </View>
  );

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View
          fixed
          style={{
            borderBottom: "2 solid black",
            flexGrow: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexBasis: "100%",
            marginBottom: "10",
            padding: "8",
            fontSize: 11,
            backgroundColor: "#e8e8e8",
            textTransform: "uppercase",
            fontFamily: "Assistant",
            fontWeight: "900",
          }}
        >
          <Text style={{ textTransform: "uppercase" }}>{orgName}</Text>
          <Text>
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        </View>
        <View>
          <Text
            fontWeight="thin"
            style={{
              fontSize: 50,
              marginTop: -10,
              textAlign: "center",
              letterSpacing: 3,
              fontFamily: "Assistant",
              fontWeight: 200,
              borderBottom: "1 solid grey",
              marginBottom: 10,
            }}
          >
            Newsletter
          </Text>

          {articles.map((article, index) => {
            if (article.image.src) {
              if (article.text.length <= 400) {
                return (
                  <View key={index} style={styles.spacer}>
                    <View style={styles.shortArticle}>
                      <Image
                        style={styles.shortArticleImage}
                        minPresenceAhead={80}
                        src={`https://cors.grahamwebworks.com/${article.image.src}`}
                      />
                      <View style={styles.shortArticleText}>
                        {formatTitleAndText(article)}
                      </View>
                    </View>
                  </View>
                );
              } else {
                // RENDER LONG TEXT ARTICLE
                return (
                  <View key={index} style={styles.spacer}>
                    <View style={styles.article}>
                      <Image
                        style={styles.image}
                        minPresenceAhead={1}
                        src={`https://cors.grahamwebworks.com/${article.image.src}`}
                      />
                      {/* <Image
                        style={styles.image}
                        minPresenceAhead={1}
                        src={`https://cors-anywhere.herokuapp.com/${article.image.src}`}
                      /> */}
                      {/* If headline is less than 100 words show it with heading */}
                      {formatTitleAndText(article)}
                    </View>
                  </View>
                );
              }
            } else {
              // console.log("NO IMAGE!");
              return (
                <View key={index} style={styles.spacer}>
                  <View style={styles.article}>
                    {formatTitleAndText(article)}
                  </View>
                </View>
              );
            }
          })}
        </View>
        <View fixed style={styles.footer}>
          <Text>rbcommunity.org</Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          ></Text>
        </View>
      </Page>
    </Document>
  );
};

export default Newsletter;
