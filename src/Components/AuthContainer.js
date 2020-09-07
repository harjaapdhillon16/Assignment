import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../Config/theme";
import Image from "../assets/images/education.jpg";

const Container = styled.div`
  section {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
  }
  .singUpForm {
    background-color: ${theme.primaryColor};
    padding-top: 5rem;
  }
  .edtech {
    padding-top: 5rem;
    max-height:100vh;
    @media screen and (max-width: 768px) {
      min-height: 10rem;
      padding-top: 2rem;
    }
  }
  .primaryButton {
    background-color: ${theme.black};
    color: ${theme.white};
    width: 12rem;
    height: 3.5rem;
    border-radius: 50px;
  }
  img {
    height: 60vh;
    width: 80%;
    object-fit: cover;
    border-radius: 20px;
  }
  .link {
    color: ${theme.link};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    margin-left: 0.2rem;
    transition: 0.2s;
    :hover {
      background-color: ${theme.black};
      color: ${theme.white};
    }
  }
  .homepage {
    margin-top: 0.5rem;
    border: 0.5px solid ${theme.black};
    display: inline-block;
    border-radius: 10px;
    padding: 0.4rem 0.5rem;
    background-color:black;
  }
`;

const AuthContainer = ({ children }) => {
  return (
    <Container className='columns is-gapless'>
      <div className='column is-4'>
        <section className='section has-text-centered edtech'>
          <h1 className='title is-1 has-text-weight-light underline'>
            ED TECH
          </h1>
          <h1 className='title is-4 has-text-weight-normal'>
            Empowering Digital Education
          </h1>
          <img src={Image} alt='education' />
          <Link to="/home">
            <h1 className='title is-5 homepage has-text-light'>
              Link to homepage
            </h1>
          </Link>
        </section>
      </div>
      <div className='column is-8'>
        <section className='section has-text-centered singUpForm'>
          {children}
        </section>
      </div>
    </Container>
  );
};
export default AuthContainer;
