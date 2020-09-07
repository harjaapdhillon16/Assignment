import React from "react";
import styled from "styled-components";

import { theme } from "../Config/theme";

const Container = styled.div`
  min-height: 3.5rem;
  input {
    width: 98%;
    height: 2.5rem;
    outline: none;
    background-color: transparent;
    border-radius: 100px;
    border-width: 2px;
    padding-left: 10px;
    font-size: 1.25rem;
  }
  background-color: ${theme.primaryColor};
  img {
    border-radius: 100px;
    height: 90% !important;
    width: 90% !important;
    object-fit: cover;
  }
  .icon {
    transform: translate(-0.5rem, 0.3rem);
  }
`;

const CreatePost = () => {
  return (
    <Container className='card mt-4 py-3'>
      <div className='columns is-multiline is-centered is-vcentered is-mobile is-gapless'>
        <div className='column is-1 has-text-centered my-1'>
          <img
            src='https://images.unsplash.com/photo-1561409625-df3c51c39c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            alt='profile'
          />
        </div>
        <div className='column is-10 has-text-centered'>
          <input placeholder='Whats on Your Mind ?' />
        </div>
        <div className='column is-11'>
          <div className='columns is-mobile is-gapless is-centered'>
            <div className='column is-4'>
              <h1 className='title is-5'>
                <span className='icon is-size-4'>
                  <i class='fas fa-video' />
                </span>
                Live Video
              </h1>
            </div>
            <div className='column is-4'>
              <h1 className='title is-5'>
                <span className='icon is-size-4'>
                  <i className='fas fa-camera-retro' />
                </span>
                Photo / Video
              </h1>
            </div>
            <div className='column is-4'>
              <h1 className='title is-5'>
                <span className='icon is-size-4'>
                  <i class='far fa-laugh-beam' />
                </span>
                Feeling / Activity
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CreatePost;
