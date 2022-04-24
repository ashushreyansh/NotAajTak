import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import Modal from './components/Modals/Modal';
import wordsToNumbers from 'words-to-numbers';
import Topbar from './topbar/topbar';
import Home from './pages/homepage/Home';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const alanKey =
    'eba5f681a738efa7253f12eedb98f7ca2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [activeArticle, setActiveArticle] = useState(-1);
    const [newsArticles, setNewsArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    console.log(articles);
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'instructions') {
                    setIsOpen(true);
                } else if (command === 'highlight') {
                    setActiveArticle(
                        (prevActiveArticle) => prevActiveArticle + 1
                    );
                } else if (command === 'open') {
                    const parsedNumber =
                        number.length > 2
                            ? wordsToNumbers(number, { fuzzy: true })
                            : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }
                }
            },
        });
    }, []);

    return (
        <div>
            <Topbar></Topbar>
            <Home/>
            <div className={classes.logoContainer}>
                {newsArticles.length ? (
                <div className={classes.infoContainer}>
                    <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
                    <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
                </div>
                ) : null}
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            {!newsArticles.length ? (
                <div className={classes.footer}>
                <Typography variant="body1" component="h2">
                    Created by
                    <a className={classes.link} href="https://www.linkedin.com/in/shreyansh-chaurasia-5910781a9/"> Shreyansh Chaurasia</a> -
                    <a className={classes.link} href="https://www.linkedin.com/in/ritik-agarwal-a55317161/"> Ritik Agarwal</a>
                </Typography>
                </div>
            ) : null}
            <div class='alan-btn'></div>
        </div>
    );
};

export default App;
