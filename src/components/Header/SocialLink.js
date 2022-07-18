import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialLink() {
  return (
    <Container className="flex ">
      <FaFacebookF className="social-icon" />
      <FaInstagram className="social-icon" />
      <FaTwitter className="social-icon" />
    </Container>
  );
}

export default SocialLink;

const Container = styled.div`
  gap: 1.6rem;

  .social-icon {
    font-size: 1.3rem;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: 778px) {
    display: none;
  }
`;
