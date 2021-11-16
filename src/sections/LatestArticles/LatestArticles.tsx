import React from 'react';
import { Button } from '../../components/Button';
import { ArticleCardContainer } from '../../components/Containers/ArticleCardContainer';
import './LatestArticles.scss';

export const LatestArticles: React.FC = () => (
  <div className="LatestArticles" id="LatestArticles">
    <h2 className="title">Check out our latest articles</h2>
    <hr className="line" />
    <ArticleCardContainer className="LatestArticles__articleCardContainer" />
    <Button
      modifier="outlined"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick={() => {}}
    >
      View all
    </Button>
    <img
      className="LatestArticles__bgElement"
      src="img/bg-elements/bg-element.svg"
      alt="bg-element"
    />
    <img className="LatestArticles__bottomDots" src="img/bg-elements/dots.svg" alt="dots" />
    <img className="LatestArticles__topDots" src="img/bg-elements/dots.svg" alt="dots" />
  </div>
);
