import React from "react";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-primary p-24 flex flex-col gap-2 text-center text-white text-base rounded-sm shadow-md">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-blue font-bold underline underline-offset-4">
          <Link to="/">Go to Home Page</Link>
        </p>
      </div>
    </section>
  );
};
export default Error;
