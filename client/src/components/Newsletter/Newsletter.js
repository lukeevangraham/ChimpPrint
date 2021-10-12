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
    flexDirection: "row",
    backgroundColor: "#fff",
    flexWrap: "wrap",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Newsletter = ({ orgName, articles }) => {
  Font.register({
    family: "Roboto",
    src: "https://fonts.googleapis.com/css2?family=Assistant&display=swap",
  });
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
            margin: 10,
            padding: 10,
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
            width: "97%",
            margin: 10,
            padding: 10,
            borderBottom: "1 solid grey",
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
            }}
          >
            Newsletter
          </Text>
        </View>
        <View style={styles.section}>
          {articles[0].map((article) => (
            <>
              {console.log("ART: ", article)}
              <Image
                style={{ width: "100mm", marginBottom: "3mm" }}
                src={`https://cors.bridged.cc/${article.image.src}`}
              />
              <Text
                style={{
                  fontWeight: "200",
                  fontSize: "6mm",
                  fontFamily: "Assistant",
                }}
              >
                {article.headline}
              </Text>
              {article.text.split("\n").map((text, index) =>
                index > 0 ? (
                  <Text
                    style={{ fontFamily: "Cardo", fontSize: "4.5mm", marginBottom: "3mm" }}
                    key={index}
                  >
                    {text}
                  </Text>
                ) : null
              )}
            </>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Newsletter;
