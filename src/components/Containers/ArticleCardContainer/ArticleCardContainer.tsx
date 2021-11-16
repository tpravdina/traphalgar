import React, { useState, useEffect } from 'react';
import { ArticleCard } from '../../Cards/ArticleCard';
import './ArticleCardContainer.scss';

interface ArticeProps {
  id: string;
  img: string;
  title: string;
  text: string;
}
interface ArticleCardContainerProps {
  className: string;
}
export const ArticleCardContainer: React.FC<ArticleCardContainerProps> = ({ className }) => {
  const [articles, setArticles] = useState<ArticeProps[]>([]);
  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);
  return (
    <div className={`ArticleCardContainer ${className}`}>
      {articles.map((elem, index) => (
        <ArticleCard key={String(index)} title={elem.title} text={elem.text} img={elem.img} />
      ))}
    </div>
  );
};
