import React from 'react';
import styled from 'styled-components';
import BlogImage from '../../assets/blogImg.jpg';
import ImageGrid from './Components/ImageGrid';
import Instagram from './Components/Instagram';

function LatestPostSide() {
  return (
    <Container className="flex column ">
      <div className="img-container">
        <img src={BlogImage} alt="post" />
        <h3>
          Good days
          <span>Have</span>
          <span>arrived</span>
        </h3>
      </div>
      <Instagram />
      <ImageGrid />
      <div className="popular-posts">
        <h2 className="opacity">Popular categories</h2>

        <ul className="popular-posts-list">
          <li>
            <p>Tech</p>
            <p>6</p>
          </li>
          <li>
            <p>Entertainment</p>
            <p>6</p>
          </li>
          <li>
            <p>Finiace</p>
            <p>6</p>
          </li>
          <li>
            <p>Life</p>
            <p>6</p>
          </li>
          <li>
            <p>Music</p>
            <p>6</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default LatestPostSide;

const Container = styled.div`
  gap: 2rem;
  padding-top: 2rem;
  position: relative;
  .img-container {
    position: relative;
    width: 100%;
    cursor: pointer;

    img {
      width: 100%;
      object-fit: cover;
    }

    &:hover {
      transform: scale(1.05);
      transition: transform 0.5s ease-in-out;
    }

    h3 {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 2.2rem;
      span {
        display: block;
        margin-top: -23px;
      }
    }
  }

  .popular-posts {
    h2 {
      font-size: 1.5rem;
    }

    .popular-posts-list {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 473px) {
    .img-container {
      img {
        height: 100%;
      }

      h3 {
        font-size: 1.4rem;
        top: 2rem;
        left: 20px;
        span {
          margin-top: -10px;
        }
      }
    }
  }

  @media screen and (max-width: 765px) {
    .img-container {
      width: 60%;
      margin: 0 auto;
    }
  }
`;
