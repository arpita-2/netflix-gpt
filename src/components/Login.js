import Header from "./Header";
import { useState } from "react";

const Login = () => {
  //we need state variable to do this whenever we call this function
  //so we set the signUpPage default value true
  const [signInPage, setSignInPage] = useState(true);

  //if somebody click on this function or call this function it should change into sign up form
  //so basically , it defaults show the true value but if the function is clicked , it will show the false value
  const toggleSignInForm = () => {
    return setSignInPage(!signInPage);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {signInPage ? "Sign In" : "Sign Up"}
        </h1>

        {!signInPage && (
          // so here, if it is not signInPage then in Sign up page it will show this input
          <input
            type="text"
            placeholder="Username"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full">
          {signInPage ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {signInPage
            ? "New to Netflix? Sign Up now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

/**
 * CSS
 * relative = A relatively positioned element is an element whose computed position value is relative .
 * The top and bottom properties specify the vertical offset from its normal position; the left and right properties
 * specify the horizontal offset.
 */

export default Login;
