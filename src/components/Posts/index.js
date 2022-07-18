import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ImShare2 } from 'react-icons/im';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLike } from 'react-icons/ai';
import { entertainmentPosts } from '../Home/UtilsComponents/CommonTrend';
import Sidebar from './Common/Sidebar';
import generalPosts from './Common/commonData';
import HeaderNav from '../Header/HeaderNav';
import TrendX from '../Home/UtilsComponents/TrendX';
import Comment from '../Comment';
import BlogImage from '../../assets/blogImg.jpg';

function GeneralPosts() {
  const { genre, id } = useParams();

  function postHandler(el) {
    let postValue = '';
    if (el.id === parseFloat(id)) {
      postValue = (
        <div key={el.id} className="post-contianer">
          <h1>{el.title}</h1>
          <ul className="genre flex">
            <li className="list">Featured </li>
            <li className="list">{genre}</li>
            <li className="opacity">Auguest 29, 2019</li>
          </ul>

          <div className="image-post">
            <img src={el.image} alt="post gallary" />
          </div>

          <div className="post-socials flex">
            <button type="button" className="share">
              <ImShare2 />
              <p>Share</p>
            </button>
            <button type="button" className="socials facebook">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>Facebook</p>
              </div>
            </button>
            <button type="button" className="socials twitter">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>Twitter</p>
              </div>
            </button>
            <button type="button" className="socials pintress">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>Pintress</p>
              </div>
            </button>
            <button type="button" className="socials whatsapp">
              <div className="flex">
                <div className="icon-container">
                  <ImShare2 />
                </div>
                <p>WhatsApp</p>
              </div>
            </button>
          </div>

          <div className="post-content">
            <p>{el.content}</p>
          </div>

          <div className="user-post flex">
            <div className="user-image-container">
              <img src={el.image} alt="post gallary" />
            </div>

            <div className="user-info">
              <h3>Sarah Sereno</h3>
              <p className="opacity">
                In metus urna, porta sed ex at, tincidunt rhoncus ipsum. Proin
                quis libero sagittis, ornare leo id, commodo leo. In quis ligula
                purus. Mauris condimentum laoreet laoreet. Phasellus ut feugiat
                sapien.
              </p>
              <ul className="flex">
                <li>
                  {' '}
                  <FaFacebookF className="social-icon" />
                </li>
                <li>
                  <AiOutlineMail />
                </li>
                <li>
                  <FaInstagram className="social-icon" />
                </li>
                <li>
                  <FaTwitter className="social-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return postValue;
  }

  const post = generalPosts.map((el) => postHandler(el));

  return (
    <>
      <HeaderNav />

      <Container className="flex column">
        <div className="flex main-post">
          <div>{post}</div>
          <Sidebar />
        </div>

        <div className="related-post">
          <TrendX
            trend={entertainmentPosts}
            icon={<AiOutlineLike />}
            genre="Related article"
          />
        </div>
        <div className="section-comment">
          <Comment />
          <div className="image-containaer">
            <img src={BlogImage} alt="comments" />
            <h3>
              Slow Down
              <span>The Noise</span>
            </h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default GeneralPosts;

const Container = styled.div`
  margin-top: -200px;
  width: 95%;
  margin: 0 auto;
  gap: 7rem;

  .main-post {
    display: grid;
    grid-template-columns: 2fr 1fr;

    margin-top: 15rem;
    gap: 6.5rem;

    .post-contianer {
      h1 {
        font-size: 2rem;
      }

      .genre {
        align-items: center;
        li {
          list-style: none;
        }

        .list {
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
      .image-post {
        margin-top: 50px;
        width: 100%;
        height: 355px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .post-socials {
      gap: 25px;
      margin-top: 20px;
      button {
        background-color: transparent;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 20px;
        align-items: center;
        list-style: none;
        cursor: pointer;

        &:hover,
        &:focus {
          filter: brightness(115%);
        }

        p {
          font-size: 0.8rem;
          font-weight: bold;
        }
      }

      .facebook {
        color: #41598a;
      }

      .twitter {
        color: #187491;
      }

      .pintress {
        color: #a11b23;
      }

      .whatsapp {
        color: #5d9150;
      }

      .share,
      .socials {
        height: 40px;
        padding-left: 10px;
        padding-right: 20px;
      }

      .share {
        border: 1px solid #666;
      }

      .socials {
        border: 1px solid rgba(255, 163, 1, 0.8);

        div {
          gap: 15px;
          align-items: center;
          width: 100%;

          .icon-container {
            background-color: rgba(255, 163, 1, 0.8);
            height: 40px;
            width: 40px;
            margin-left: -10px;
            padding-left: 10px;
            display: flex;
            align-items: center;
            justify-centent: center;

            svg {
              color: #000;
            }
          }
        }
      }
    }

    .post-content {
      margin-top: 30px;

      p {
        line-height: 2em;
        text-align: justify;
        word-wrap: no-wrap;
      }
    }

    .user-post {
      gap: 20px;
      margin-top: 40px;
      align-items: center;
      .user-image-container {
        width: 150px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user-info {
        width: 100%;
        align-items: center;

        p {
          margin-top: -10px;
          font-size: 0.7rem;
        }
        ul {
          gap: 10px;
          align-items: center;
          font-size: 0.9rem;
          li {
            list-style: none;
            svg {
              color: #ffa301;
              cursor: pointer;

              &:hover {
                filter: brightness(115%);
              }
            }
          }
        }
      }
    }
  }

  .section-comment {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 6.5rem;

    .image-containaer {
      position: relative;
      width: 100%;
      cursor: pointer;

      img {
        width: 100%;
        height: 350px;
        object-fit: cover;
      }

      h3 {
        font-size: 2.5rem;
        position: absolute;
        top: 12rem;
        left: 40px;

        span {
          display: block;
          margin-top: -20px;
        }
      }
    }
  }
`;
