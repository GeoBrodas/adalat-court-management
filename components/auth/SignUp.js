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
      <div className="flex flex-wrap items-center justify-center my-4">
        <div className="relative w-3/12">
          <button
            type="button"
            onClick={switchAuthModeHandler}
            className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
          >
            {isLogin ? 'Create a new account' : 'Login with existing account'}
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUp;
