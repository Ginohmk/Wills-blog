import styled from 'styled-components';

const TrendContainer = styled.div`
  gap: 2rem;

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

  .post {
    flex-direction: column;
    gap: 2rem;

    .card {
      gap: 1.5rem;
      align-items: flex-start;
      width: 100%;
      .img-container {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          &:hover {
            transform: scale(1.05);
            transition: transform 0.5s ease-in-out;
          }
        }
      }
      .content {
        width: 100%;
        h3 {
          margin-top: 0.8rem;
          font-size: 1.3rem;
          letter-spacing: 1.5px;
          word-wrap: wrap;
          cursor: pointer;

          &:hover {
            color: #ffa301;
          }
        }
        .content-date-year {
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
        p {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (max-width: 735px) {
    .card {
      flex-direction: column;
      .img-container {
        width: 100%;
      }

      .content {
        width: 100%;
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

    .post {
      .card {
        .content {
          h3 {
            font-size: 1rem;
          }

          p {
            font-size: 0.8rem;
          }

          .content-date-year {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
`;

export const TrendXContainer = styled.div`
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

        &:hover {
          transform: scale(1.05);
          transition: transform 0.5s ease-in-out;
          cursor: pointer;
        }

        img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
      }

      .post-details {
        h3 {
          font-size: 1.3rem;
          word-wrap: wrap;

          &:hover {
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
      .post-card {
        .post-details {
          h3 {
            font-size: 1rem;
          }

          p {
            font-size: 0.8rem;
          }

          .post-genre-date {
            font-size: 0.7rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 994px) {
    .posts {
      grid-template-columns: 1fr;
      .post-card {
        .img-container {
          img {
            height: 100%;
          }
        }
      }
    }
  }
`;

export default TrendContainer;
