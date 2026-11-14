import React from "react";

const topics = [
  "Online Account Opening",
  "Offline Account Opening",
  "Company, Partnership and HUF Account Opening",
  "NRI Account Opening",
  "Charges at Zerodha",
  "Zerodha IDFC FIRST Bank 3-in-1 Account",
  "Getting Started",
];

function CreateTicket() {
  return (
    <section className="container section-space">
      <h2 className="fs-2 mb-4">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="support-card">
            <h3>Account Opening</h3>
            <ul>
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
