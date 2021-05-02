import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "./NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    info: "Will reply with overall latest news",
    text: "Give me the latest news",
  },
  {
    color: "#1565c0",
    title: "Ask by Categories",
    info: "Business, Entertainment, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "Ask by Terms",
    info: "PlayStation, Smartphones...",
    text: "What's up with PlayStation",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ color: "orange", fontSize: 20 }}
                >
                  {infoCard.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ color: "whitesmoke", fontSize: 18 }}
                >
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
                {infoCard.info ? (
                  <Typography
                    variant="h6"
                    component="h6"
                    style={{ color: "whitesmoke", fontSize: 15 }}
                  >
                    <strong>{infoCard.title.split(" ")[2]}</strong>:
                    {infoCard.info}
                  </Typography>
                ) : null}
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
