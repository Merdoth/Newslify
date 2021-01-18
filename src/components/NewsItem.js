import React from "react";

const NewsItem = ({ title, description, url, image, publishedAt }) => {
  return (
    <a href={url} className="news-item">
      <img src={image} />
      <h3 className='news-item__title'>{title}</h3>
      <p className='news-item__desc'>{description}</p>
      <p className='news-item__published'>{new Date(publishedAt).toDateString()}</p>
    </a>
  );
};

export default NewsItem;
