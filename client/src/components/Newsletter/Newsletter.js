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
      src: "http://fonts.gstatic.com/s/assistant/v1/2iDwv6DBtyixlK5YHngp1w.ttf",
    },
    {
      src: "http://fonts.gstatic.com/s/assistant/v1/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf",
      fontWeight: 200,
    },
  ],
});

Font.register({
  family: "Cardo",
  fonts: [
    { src: "http://fonts.gstatic.com/s/cardo/v8/jbkF2_R0FKUEZTq5dwSknQ.ttf" },
    // { src: "http://fonts.gstatic.com/s/assistant/v1/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf", fontWeight: 200 },
  ],
});


const styles = StyleSheet.create({
  page: {
    padding: "20 20 60 20"
  },
  title: {
    fontFamily: "Assistant",
    fontSize: 20,
    // marginBottom: 7
  },
  text: {
    fontSize: 12,
    fontFamily: "Cardo",
    margin: "0 0 12 0",
    lineHeight: "1.5"
  },
  image: {
    maxWidth: "50%",
    marginBottom: 7
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
    fontFamily: "Assistant"
  },
  article: {
    borderBottom: "1 solid grey",
    marginBottom: 10
    // backgroundColor: "red"
  },
  shortArticle: {
    flexDirection: "row",
    borderBottom: "1 solid grey",
    marginBottom: 10,
    paddingBottom: "12px"
  },
  shortArticleText: {
    marginRight: 185,
    marginLeft: 10,
    fontSize: 12,
    // flexGrow: "0",
    fontFamily: "Cardo",
    lineHeight: "1.5"
  },
  shortArticleImage: {
    width: "33%",
    height: "auto",
    // flexGrow: "0",
    // flexShrink : "0"
  }
});

const Newsletter = ({ orgName, articles }) => {
  Font.register({
    family: "Roboto",
    src: "https://fonts.googleapis.com/css2?family=Assistant&display=swap",
  });

  const longArticles = articles[0].filter(article => article.text.length >= 400)
  const shortArticles = articles[0].filter(article => article.text.length > 400)


  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View
          style={{
            borderBottom: "2 solid black",
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexBasis: "97%",
            margin: "0 10",
            padding: "10",
            fontSize: 11,
          }}
        >
          <Text>{orgName}</Text>
          <Text>
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        </View>
        <View
          style={{
            // width: "100%",
            margin: "10 0",
            padding: 10,
          }}
        >
          <Text
            fontWeight="thin"
            style={{
              fontSize: 50,
              marginTop: -20,
              textAlign: "center",
              letterSpacing: 3,
              fontFamily: "Assistant",
              fontWeight: 200,
              borderBottom: "1 solid grey",
              marginBottom: 10
            }}
          >
            Newsletter
          </Text>

          {articles[0].map((article) => {
            console.log("article", article)
            if (article.image.src) {
              if (article.text.length <= 400) {
                return (
                  <View style={styles.shortArticle}>
                    <Image style={styles.shortArticleImage} src={`https://cors-anywhere.herokuapp.com/${article.image.src}`} />
                    <View style={styles.shortArticleText}>
                      <Text style={styles.title}>{article.headline[0].length >= 100 ? null : (article.headline)}</Text>
                      <Text>{article.headline[0].length >= 100 ? article.text.split("\n") : article.text.split("\n").slice(1)}</Text>
                    </View>
                  </View>
                )
              } else {
                return (
                  <View style={styles.article}>
                    <Image style={styles.image} src={`https://cors-anywhere.herokuapp.com/${article.image.src}`} />
                    {/* If headline is less than 100 words show it with heading */}
                    <Text style={styles.title}>{article.headline[0].length >= 100 ? null : (article.headline)}</Text>
                    {article.text.split("\n").map((text, index) =>
                      index > 0 && text.length > 1 ? (
                        <Text style={styles.text}>{text}</Text>
                      ) :
                        text.length >= 100 ? (
                          <Text style={styles.text}>{text}</Text>
                        ) : null
                    )}
                  </View>
                )
              }
            } else {
              console.log("NO IMAGE!")
              return (

                <View style={styles.article}>
                  <Text style={styles.text}>
                    {article.text.split("\n")}
                  </Text>
                </View>
              )



            }
          })}
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed></Text>
      </Page>
    </Document >
  );
};

export default Newsletter;
