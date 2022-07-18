/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';
// import blogImage from '../../../assets/blogImg.jpg';

function SidePostPreview({ trendArr, title, icon }) {
  const financePost = trendArr.map(({ id, title, date, image }) => (
    <div key={id}>
      <div className="finance-post flex j-between">
        <div className="finance-post-left">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>

        <div className="finance-post-right">
          <img src={image} alt="post" />
        </div>
      </div>
    </div>
  ));
  return (
    <Container className="flex column">
      <div className="finance flex opacity">
        {icon}

        <h3>{title}</h3>
      </div>

      {financePost}
    </Container>
  );
}

export default SidePostPreview;
const Container = styled.div`
  gap: 1.5rem;
  .finance {
    align-items: center;
    gap: 30px;

    h3 {
      font-size: 1.8rem;
    }

    svg {
      font-size: 2.5rem;
    }
  }

  .finance-post {
    gap: 10px;
    .finance-post-left {
      width: 100%;
      h3 {
        font-size: 0.8rem;

        &:hover {
          color: #ffa301;
          cursor: pointer;
        }
      }
      p {
        opacity: 0.5;
        margin-top: -5px;
        font-size: 0.8rem;
      }
    }
    .finance-post-right {
      width: 80%;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
          transition: transform 0.5s ease-in-out;
        }
      }
    }
  }

  @media screen and (max-width: 778px) {
    .finance {
      h3 {
        font-size: 1.4rem;
      }

      svg {
        font-size: 2rem;
      }
    }
    .finance-post {
      .finance-post-right {
        width: 40%;
      }
    }
  }
`;
