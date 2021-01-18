import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({items}) => {
  return (
    <div className='news-list'>
      {items.map((item, index) => (
        <NewsItem
          title={item.title}
          description={item.description}
          url={item.url}
          image={item.urlToImage}
          publishedAt={item.publishedAt}
          content={item.content}
          key={index}
        />
      ))}
    </div>
  );
};

export default NewsList;
