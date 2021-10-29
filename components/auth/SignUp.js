import { Fragment } from 'react';
import { useState } from 'react';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

function SignUp() {
  const [isLogin, setIsLogin] = useState(true);

  // switch handler
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <Fragment>
      {/* Switch forms */}
      {!isLogin ? <SignUpPage /> : <LoginPage />}

      {/* Switching from login to signuo vice-versa */}
      <button type="button" onClick={switchAuthModeHandler}>
        {isLogin ? 'Create new account' : 'Login with existing account'}
      </button>
    </Fragment>
  );
}

export default SignUp;
