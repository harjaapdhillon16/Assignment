import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CreatePost from "../Components/CreatePost";

const Container = styled.div``;

const HomePage = () => {
  return (
    <Container className='columns is-gapless '>
      <div className='column is-3'>
        <Link to='/'>
          <h1 className='title is-3 has-text-link-dark px-3 py-3 has-text-weight-light'>Go to Signup</h1>
        </Link>
      </div>
      <div className='column is-6 has-text-centered pt-4'>
        <CreatePost />
      </div>
      <div className='column is-3'></div>
    </Container>
  );
};
export default HomePage;
