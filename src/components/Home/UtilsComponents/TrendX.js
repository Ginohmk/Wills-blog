/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';

function TrendX({ trend, icon, genre }) {
  const previewPost = trend.map(({ id, title, image, date }) => (
    <div className="post-card" key={id}>
      <div className="img-container">
        <img src={image} alt="post" />
      </div>

      <div className="post-details">
        <h3>{title}</h3>
        <div className="post-genre-date flex">
          <span className="post-genre">{genre}</span>
          <p className="opacity">{date}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <Container className="flex column ">
      <div className="heading flex opacity">
        {icon}
        <h2>{genre}</h2>
      </div>
      <div className="posts">{previewPost}</div>
    </Container>
  );
}

export default TrendX;

const Container = styled.div`
  gap: 1.5rem;
  .heading {
    align-items: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 11px;
    }

    svg {
      font-size: 2.7rem;
      margin-right: 30px;
    }
  }

  .posts {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    .post-card {
      width: 100%;
      .img-container {
        width: 100%;

        &:hover{
          transform: scale(1.05);
          transition: transform 0.5s ease-in-out;
          cursor: pointer;
        }

        img {
          width: 100%;
          height: 250px;
          object-fit:cover;
        }
      }

      .post-details {
        h3 {
          font-size: 1.3rem;
          word-wrap: wrap;

          &:hover{
            color: #ffa301;
            cursor: pointer;
          }
        }
        .post-genre-date {
          margin-top: -10px;
          font-size: 1rem;
          align-items: center;
          .post-genre {
            color: #000;
            background-color: #ffa000;
            padding: 0.2rem;
            padding-left: 0.7rem;
            padding-right: 1rem;
            margin-right: 20px;
            cursor: pointer;
  
            &:hover {
              background-color: #ffae00;
            }
          }
        }
        p {
          font-size: 1.1rem;
        }
        }
      }
    }
  }

  @media screen and (max-width: 473px) {
    .heading {
      h2 {
        font-size: 1.5rem;
      }

      svg {
        font-size: 2.5rem;
        margin-right: 30px;
      }
    }

    .posts {
      .post-card{
        .post-details {
          h3 {
            font-size: 1rem;
          }

          p {
            font-size: 0.8rem;
          }

          .post-genre-date  {
            font-size: 0.7rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 920px) {
    .posts{
      grid-template-columns: 1fr ;
      .post-card{

         .img-container {
  
          img{
            height: 100%;
          }
        }
      }
    }
  }


`;
