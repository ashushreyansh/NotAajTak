import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';

const alanKey =
    'eba5f681a738efa7253f12eedb98f7ca2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [activeArticle, setActiveArticle] = useState(-1);
    const [newsArticles, setNewsArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        alanBtn({
            key: 'eba5f681a738efa7253f12eedb98f7ca2e956eca572e1d8b807a3e2338fdd0dc/stage',
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
            <h1>Alan AI News App</h1>
            <NewsCards articles={newsArticles} />
            <div class='alan-btn'></div>
        </div>
    );
};

export default App;
