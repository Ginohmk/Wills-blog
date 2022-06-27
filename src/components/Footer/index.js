import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ImConnection } from 'react-icons/im';
import Articles from './FooterComponent/PopularArticles';
import popularArticle, { featuredArticle } from './FooterComponent/CommonFile';
import NewLetter from './FooterComponent/NewLetter';

function index() {
  return (
    <Container className="flex column">
      <ul className="social-footer flex j-between">
        <li>
          <a href="fs" target="_blank">
            <span>
              <FaFacebookF />
            </span>
            <p>Facebook</p>
          </a>
        </li>
        <li>
          <a href="fs" target="_blank">
            <span>
              <FaInstagram />
            </span>
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a href="fs" target="_blank">
            <span>
              <ImConnection />
            </span>
            <p>RSS</p>
          </a>
        </li>
        <li>
          <a href="fs" target="_blank">
            <span>
              <FaTwitter />
            </span>
            <p>Twiter</p>
          </a>
        </li>
      </ul>

      <div className="footer-highlights">
        <div className="popular-articles">
          <Articles article={popularArticle} name="Popular article" />
        </div>

        <div className="Featured">
          <Articles article={featuredArticle} name="Featured" />
        </div>

        <div className="Newsletter">
          <NewLetter />
        </div>
      </div>

      <div className="copy-right-links flex j-between">
        <p className="opacity">© Copyright - Newspaper Theme by KanuMike</p>
        <nav className="flex ">
          <Link to="none" className="foot-links">
            Home
          </Link>
          <Link to="none" className="foot-links">
            Tech
          </Link>
          <Link to="none" className="foot-links">
            Entertainment
          </Link>
          <Link to="none" className="foot-links">
            Finance
          </Link>
          <Link to="none" className="foot-links">
            Life
          </Link>
          <Link to="none" className="foot-links">
            Music
          </Link>
        </nav>
      </div>
    </Container>
  );
}

export default index;

const Container = styled.div`
  margin-top: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;

  .social-footer {
    width: 50%;
    margin: 0 auto;

    li {
      list-style: none;
      cursor: pointer;

      &:hover {
        span {
          border: 1px solid #fcb900;
        }
      }

      span {
        border: 1px solid #ffa301;
        padding: 8px 10px 3px 10px;
      }

      a {
        color: #f79e01;
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }
    }
    & li:nth-child(3) {
      svg {
        transform: rotate(45deg);
      }
    }
  }

  .footer-highlights {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
    width: 90%;
    margin: 0 auto;
  }

  .copy-right-links {
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    align-items: center;
    font-size: 0.8rem;
    p {
      word-spacing: 8px;
    }
    nav {
      gap: 1rem;

      .foot-links {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: #ffa301;
        }
      }
    }
  }
`;
