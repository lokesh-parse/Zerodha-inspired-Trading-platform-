import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container section-space">
      <div className="text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link className="btn btn-primary primary-action" to="/">Back to home</Link>
      </div>
    </main>
  );
}

export default NotFound;
