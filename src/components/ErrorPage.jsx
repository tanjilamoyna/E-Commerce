import React from "react";

const ErrorPage = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something's Wrong.
          </p>

          <p className="mb-4 text-2xl tracking-tight font-medium text-black md:text-2xl">
            Ei Page a kichu nei..Url valo moto check kore pore abr try
            korben...apatoto "Good night"..🙂‍↔️
          </p>
          <p className="details">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a
            href="#"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
