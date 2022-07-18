import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ImConnection } from 'react-icons/im';
import BlogImage from '../../assets/blogImg.jpg';

function LifeSide() {
  const commentArr = [
    {
      id: 1,
      name: 'Sarah Sereno',
      comment: `Tesla’s Cybertruck fiasco cost Elon Musk $768
    million in a single day`,
    },
    {
      id: 2,
      name: 'Sarah Sereno',
      comment:
        'What’s the point of ‘Charlie’s Angels’ without Sam Rockwell dancing?',
    },
    {
      id: 3,
      name: 'Sarah Sereno',
      comment:
        '8 things millennials wish you would just stop getting them for the holidays',
    },
    {
      id: 4,
      name: 'Sarah Sereno',
      comment:
        ' ‘Heathers’ is still the best dark comedy about high school hell',
    },
  ];

  const comments = commentArr.map(({ id, name, comment }) => (
    <div className="comment flex" key={id}>
      <p>
        <span className="opacity">
          {name}
          &nbsp; on
        </span>
        {comment}
      </p>
    </div>
  ));
  return (
    <Container className="flex column">
      <ul className="socials flex column">
        <li className="facebook">
          <div>
            <FaFacebookF className="social-icon" />
            <span>22,000 &nbsp; &nbsp; &nbsp; Fans</span>
          </div>
          <p>LIKE</p>
        </li>

        <li className="instagram">
          <div>
            <FaInstagram className="social-icon" />
            <span>46,000 &nbsp; &nbsp; &nbsp; Follwers</span>
          </div>
          <p>FOLLOW</p>
        </li>

        <li className="feed">
          <div>
            <ImConnection className="social-icon feed" />
            <span>46,000 &nbsp; &nbsp; &nbsp; Follwers</span>
          </div>
          <p>FOLLOW</p>
        </li>

        <li className="twitter">
          <div>
            <FaTwitter className="social-icon" />
            <span>50,000 &nbsp; &nbsp; &nbsp; Followers</span>
          </div>
          <p>FOLLOW</p>
        </li>
      </ul>

      <div className="recent-comments">
        <h2 className="opacity">Recent comments</h2>
        <div className="comments-container flex column">{comments}</div>
      </div>

      <div className="image-container">
        <img src={BlogImage} alt="comments" />
        <h3>
          Slow Down
          <span>The Noise</span>
        </h3>
      </div>
    </Container>
  );
}

export default LifeSide;

const Container = styled.div`
  position: relative;
  gap: 2.2rem;
  width: 100%;

  .socials {
    gap: 1rem;
    li {
      display: flex;
      justify-content: space-between;
      transition: all 0.3s ease-in-out;
      align-items: center;
      list-style: none;
      font-size: 1rem;
      cursor: pointer;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 5px;

      span {
        margin-left: 1rem;
      }

      div {
        display: flex;
        align-items: center;
      }

      .feed {
        transform: rotate(45deg);
      }

      svg {
        font-size: 1.6rem;
      }
    }

    .facebook:hover {
      background-color: #516eab;
    }

    .instagram:hover {
      background-color: #417096;
    }

    .feed:hover {
      background-color: #ff6600;
    }

    .twitter:hover {
      background-color: #29c5f6;
    }
  }

  .recent-comments {
    h2 {
      font-size: 1.7rem;
    }

    .comments-container {
      .comment {
        p {
          width: 100%;
          font-size: 1.2rem;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .image-container {
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

  @media screen and (max-width: 473px) {
    .socials {
      li {
        font-size: 0.8rem;
        svg {
          font-size: 1.2rem;
        }
      }
    }
    .recent-comments {
      h2 {
        font-size: 1.5rem;
      }
      .comments-container {
        .comment {
          p {
            font-size: 0.8rem;
          }
        }
      }
    }

    .image-container {
      img {
        width: 100%;
        height: 100%;
      }
      h3 {
        font-size: 1.4rem;
        top: 3rem;
        left: 20px;
        span {
          margin-top: -10px;
        }
      }
    }
  }

  @media screen and (max-width: 765px) {
    .image-container {
      width: 60%;
      margin: 0 auto;
    }
  }
`;
