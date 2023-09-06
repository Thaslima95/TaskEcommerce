import React from "react";

export default function SingleProductSide() {
  return (
    <>
      <div className="card shadow-sm">
        <div className="card-body">
          <figure className="d-flex">
            <div className="me-2">
              <img
                className="size-48x48 rounded"
                src="images/avatars/company.jpg"
                alt="logo"
              />
            </div>
            <figcaption>
              Supplier: <br /> Guanjoi Trading LLC{" "}
            </figcaption>
          </figure>
          <hr />
          <ul className="list-icon">
            <li>
              {" "}
              <img
                className="icon me-2 align-bottom"
                width="24"
                src="images/flags/flag-tr.png"
                alt=""
              />{" "}
              Istanbul, Turkiye{" "}
            </li>
            <li>
              {" "}
              <i className="icon me-2 text-muted fa fa-check-circle"></i>{" "}
              Verified Seller{" "}
            </li>
            <li>
              {" "}
              <i className="icon me-2 text-muted fa fa-globe"></i> Worldwide
              shipping{" "}
            </li>
          </ul>

          <div>
            <a href="#" className="btn btn-primary w-100 mb-2">
              Send inquiry
            </a>
            <a href="#" className="btn btn-light w-100 mb-2">
              Seller's profile
            </a>
            <a href="#" className="btn btn-light w-100">
              {" "}
              Add to wishlist{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
