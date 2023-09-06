import React from "react";

export default function DiscountBanner() {
  return (
    <section className="padding-bottom">
      <div className="container">
        <article
          className="card border-0 bg-primary bg-cover"
          style={{
            backgroundImage: url(images / banners / bg - warehouse.jpg),
          }}
        >
          <div className="card-body">
            <a href="#" className="mt-2 me-3 float-end btn btn-warning">
              Learn more
            </a>
            <h4 className="text-white">Super discount on more than 100 USD</h4>
            <p className="text-white mb-0">You ever write dummy info</p>
          </div>
        </article>
      </div>
    </section>
  );
}
