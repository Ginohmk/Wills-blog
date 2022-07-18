/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function PopularArticles({ article, name }) {
  const footArticle = article.map(({ id, title, date }) => (
    <div key={id}>
      <p className="title">{title}</p>
      <p className="date opacity">{date}</p>
    </div>
  ));
  return (
    <Container>
      <h2 className="opacity">{name}</h2>
      <div className="popular">{footArticle}</div>
    </Container>
  );
}

export default PopularArticles;

const Container = styled.div`
  .popular {
    .title {
      cursor: pointer;
      font-size: 0.8rem;
    }

    .title:hover {
      color: #ffa301;
    }

    .date {
      margin-top: -10px;
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 473px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;
