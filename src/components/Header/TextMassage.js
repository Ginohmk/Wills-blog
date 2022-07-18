import React from 'react';
import styled from 'styled-components';

function TextMassage() {
  const textMsg = [
    {
      Top: 'Popular News At The Tip Of Your Fingers.',
      Down: 'Feel The Rush...',
    },
    { Top: 'You Ask For Updates And You Get It.', Down: 'Reliabliility...' },
    {
      Top: 'Globalize You Reach For Information.',
      Down: 'At Your Comfort.',
    },
  ];

  return (
    <Container className="hero-text">
      <h1>{textMsg[0].Top}</h1>
      <p>{textMsg[0].Down}</p>
    </Container>
  );
}

export default TextMassage;

const Container = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto;
  margin-top: 20rem;
  letter-spacing: 0.2rem;

  h1 {
    font-size: 2.7rem;
    position: relative;
    left: 0;
    transition: all 2s ease-in-out;
    animation: heroTextDisplay 0.4s ease-in-out;
  }

  @keyframes heroTextDisplay {
    0% {
      left: 200px;
    }

    25% {
      left: 150px;
    }

    50% {
      left: 100px;
    }

    75% {
      left: 50px;
    }

    100% {
      left: 0;
    }
  }

  p {
    margin-top: -40px;
    margin-left: 30px;
    font-size: 2rem;
    transition: all 2s ease-in-out;
    animation: lowerHeroText 0.9s ease-in-out;
  }

  @keyframes lowerHeroText {
    from {
      opacity: 0;
    }

    75% {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1025px) {
    margin-top: 13rem;
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1.7rem;
      margin-top: -30px;
    }
  }

  @media screen and (max-width: 897px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      margin-top: -20px;
    }
  }

  @media screen and (max-width: 777px) {
    h1 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1rem;
      margin-top: -20px;
    }
  }

  @media screen and (max-width: 698px) {
    margin-top: 13rem;
  }

  @media screen and (max-width: 473px) {
    h1 {
      font-size: 1.2rem;
    }

    p {
      margin-top: -9px;
    }
  }
`;
