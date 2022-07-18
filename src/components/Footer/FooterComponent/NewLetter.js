import React from 'react';
import styled from 'styled-components';

function NewLetter() {
  return (
    <Container>
      <h2 className="opacity">Newsletter</h2>

      <div className="sub-container flex column">
        <p className="notice-sub">
          Subscribe to get the latest news, offers and special announcements.
        </p>

        <div className="form-main-container">
          <form className="flex column">
            <input type="text" placeholder="Your email address" />
            <button type="submit"> Subscribe </button>
          </form>
          <p className="opacity">
            By subscribing, you are accepting to receive promotions.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default NewLetter;

const Container = styled.div`
  .sub-container {
    gap: 1rem;

    .notice-sub {
      font-size: 0.8rem;
    }

    .form-main-container {
      form {
        input {
          width: 100%;
          height: 40px;
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid #888;
          border-radius: 5px;
          background-color: transparent;
          color: #fff;

          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          &:focus {
            outline: none;
          }
        }
        button {
          width: 100%;
          margin: 0 auto;
          margin-top: 1rem;
          border: none;
          color: #fff;
          background-color: #222;
          height: 40px;
          font-size: 0.9rem;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.5s ease-in-out;

          &:hover {
            background-color: #ffa301;
          }
        }
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;
