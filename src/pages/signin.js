import React, { useState } from 'react';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Form } from '../components';
import { enableMultiTabIndexedDbPersistence } from '@firebase/firestore';

export default function Signip() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInValid = password === '' || emailAddress === '';

  const handleSignIn = (event) => {
    event.preventDefault();
    // Firebase work here
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} mothod="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="./signup">Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            {' '}
            This page is protected by Google CAPTCHA to ensure you are not a
            robot. Learn more
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
