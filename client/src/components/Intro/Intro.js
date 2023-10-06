import { Typography } from "@mui/material";

import classes from "./Intro.module.scss";

const Intro = () => (
  <div className={classes.Header}>
    <div className={classes.Header__text}>
      <Typography variant="h4" style={{ marginBottom: "1rem" }}>
        Turn your MailChimp campaigns into printable newsletters
      </Typography>
      <Typography>
        Have a group of people who could benefit from a printed version of your
        MailChimp emails? This site cooks up printouts that look way better than
        just hitting "print" in a email.
      </Typography>
    </div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/C6vcWL1eXMI?si=5h-iQ3p6HZGmc3zf"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowFullScreen
    ></iframe>
  </div>
);

export default Intro;
