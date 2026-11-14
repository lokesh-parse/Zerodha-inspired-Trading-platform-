import React from "react";

function Signup() {
  return (
    <main className="container section-space signup-page text-center">
      <h1>Start investing with Zerodha</h1>
      <p className="lead">
        Open an account to invest in stocks, mutual funds, and more.
      </p>
      <a
        className="btn btn-primary primary-action"
        href="https://zerodha.com/open-account/"
      >
        Open an account
      </a>
    </main>
  );
}

export default Signup;