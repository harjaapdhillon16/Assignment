import React from "react";
import { Link } from "react-router-dom";

import Input from "../Components/Input";
import AuthContainer from "../Components/AuthContainer";

const SignUpPage = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const ChangeValues = (keys, value) => {
    setValues({ ...values, [keys]: value });
  };
  return (
    <AuthContainer>
      <h1 className='title is-1 has-text-weight-light '>
        SignUp for An Account
      </h1>
      <div className=' columns is-multiline has-text-left  is-centered pt-4'>
        <div className='column is-8'>
          <h1 className='title is-3 has-text-weight-light'>Full Name</h1>
          <Input
            onChange={(event) => ChangeValues("name", event.target.value)}
            value={values.name}
            placeholder='Full Name'
          />
          <h1 className='title is-3 has-text-weight-light'>Email</h1>
          <Input
            onChange={(event) => ChangeValues("email", event.target.value)}
            value={values.email}
            placeholder='Email'
          />

          <h1 className='title is-3 has-text-weight-light'>Password</h1>
          <Input
            onChange={(event) => ChangeValues("password", event.target.value)}
            value={values.password}
            placeholder='Password'
            type='password'
          />
        </div>
        <div className='column is-8'>
          <button className='button is-medium primaryButton'>
            Create Account
          </button>
        </div>
      </div>
      <h1 className='title is-4 has-text-weight-light'>
        Already have an account ?{" "}
        <Link to='/login'>
          <span className='link'>Login</span>
        </Link>
      </h1>
    </AuthContainer>
  );
};
export default SignUpPage;
