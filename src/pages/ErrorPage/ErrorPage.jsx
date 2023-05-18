import React from "react";
import errorLottie from "../../assets/errorpage/90344-spider-404.json";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md text-center">
        <Lottie
          className="mx-auto"
          animationData={errorLottie}
          loop={true}
        />
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <h2 className="mb-8 font-extrabold text-9xl text-rose-700">
          <span className="sr-only">Error</span>
          {status || 404}
        </h2>
        <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
          {error?.message}
        </p>
        <Link to="/">
          <button className="btn bg-rose-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-rose-800">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
