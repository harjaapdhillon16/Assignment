import React from "react";
import styled from "styled-components";

import { theme } from "../Config/theme";

const InputStyledComponent = styled.input`
  width: 100%;
  height: 3.5rem;
  font-size: 1.25rem;
  background-color: transparent;
  border-width: 0px;
  transform: translateY(-1rem);
  border-color: ${theme.black};
  border-bottom-width: 1px;
  border-radius: 0px;
  box-shadow: none;
  outline: none !important;

  :hover {
    border-color: ${theme.black};
  }
`;

const Input = (props) => (
  <InputStyledComponent {...props}/>
);
export default Input;
