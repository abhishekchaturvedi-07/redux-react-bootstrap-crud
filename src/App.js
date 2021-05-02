import React, { useEffect, useState } from "react";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/coreComponents/navbar/Navbar";
import { Provider } from "react-redux";
import "./styles/App.scss";
import store from "./redux/store";
// import persistor from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/addContact/AddContact";
import EditContact from "./components/editContact/EditContact";
// import { PersistGate } from "redux-persist/integration/react";

//reading capability artificial intelligence
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import { Typography } from "@material-ui/core";

import { NewsCards, Modal } from "./components";
import useStyles from "./styles";

const alanKey =
  "72b7b6cf4f5dde13a00780067ae2054f2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number, NEWS_API_URL }) => {
        console.log("articles - ", articles);
        console.log("command - ", command);
        console.log("NEWS_API_URL - ", NEWS_API_URL);
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
            </Switch>
            <div className={classes.logoContainer}>
              <img
                src="./logoNews.gif"
                className={classes.alanLogo}
                alt="logo"
              />
            </div>
            {/* for AI */}
            <div className={classes.logoContainer}>
              {newsArticles.length ? (
                <div className={classes.infoContainer}>
                  <div className={classes.card}>
                    <Typography variant="h5" component="h2">
                      Try saying: <br />
                      <br />
                      Open article number [4]
                    </Typography>
                  </div>
                  <div className={classes.card}>
                    <Typography variant="h5" component="h2">
                      Try saying: <br />
                      <br />
                      Go back
                    </Typography>
                  </div>
                </div>
              ) : null}
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            {!newsArticles.length ? (
              <div className={classes.footer}>
                <Typography variant="body1" component="h2">
                  Created by Abhishek Chaturvedi
                </Typography>
              </div>
            ) : null}
          </div>
        </div>
      </Router>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
