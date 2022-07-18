import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { MdMenuBook } from 'react-icons/md';
import HeaderNav from '../Header/HeaderNav';
import BlogImage from '../../assets/blogImg.jpg';
import Sidebar from './Common/Sidebar';
import Trend from '../Home/UtilsComponents/Trend';
import { lifePosts } from '../Home/UtilsComponents/CommonTrend';

function CategoryPost() {
  const { genre } = useParams();
  const allGenre = ['Music', 'Finace', ' Life', 'Politics'];
  const setGenre = allGenre.map((el) => (
    <>
      <span className="content-genre ">{el}</span>
    </>
  ));
  return (
    <>
      <HeaderNav />
      <Container>
        <div className="main">
          <div className="left-side">
            <h1>{genre}</h1>
            <div className="all-genre flex">{setGenre}</div>
            <div>
              <div className="image-container">
                <img src={BlogImage} alt="post" />
                <h2>
                  Drew Banga wants to spark the bay Area&apos;s rep resurgence
                </h2>
                <p className="opacity">November 29, 2019</p>
              </div>
            </div>
            <div className="trend">
              <Trend trend={lifePosts} icon={<MdMenuBook />} genre={genre} />
            </div>
          </div>

          <Sidebar />
        </div>
      </Container>
    </>
  );
}

export default CategoryPost;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  gap: 7rem;

  .main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 6.5rem;
    .left-side {
      h1 {
        text-transform: capitalize;
      }

      .all-genre {
        font-size: 1rem;
        align-items: center;
        .content-genre {
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

      .image-container {
        margin-top: 40px;
        width: 100%;
        height: 355px;

        h2:hover {
          cursor: pointer;
          color: #ffae00;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .trend {
        margin-top: 150px;
      }
    }
  }
`;
