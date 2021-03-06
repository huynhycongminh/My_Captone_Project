import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Service extends Component {
  render() {
    return (
      <section className="services">
        <header className="shopping-tool">
          <h1 className="shopping-tool-title-header">Service</h1>
        </header>
        <div className="shopping-tool-wrapper">
          <article className="shopping-tool-article">
            <NavLink to="/Price" href className="shopping-tool-link" title="Price">
              <img
                src="/image/Price.png"
                alt=""
                className="shopping-tool-icon"
              />
              <h1 className="shopping-tool-title">Price</h1>
              <p className="shopping-tool-content">
                Detailed price list of each model of Audi
              </p>
            </NavLink>
          </article>
          <article className="shopping-tool-article">
            <NavLink to="/Compare" href className="shopping-tool-link" title="Price">
              <img
                src="/image/compare (1).png"
                alt=""
                className="shopping-tool-icon"
              />
              <h1 className="shopping-tool-title">CAR COMPARISON</h1>
              <p className="shopping-tool-content">
                Compare detailed information of each Audi model
              </p>
            </NavLink>
          </article>
          <article className="shopping-tool-article">
            <NavLink to="/Register" className="shopping-tool-link" title="Price">
              <img
                src="/image/book.png"
                alt=""
                className="shopping-tool-icon"
              />
              <h1 className="shopping-tool-title">BOOK A TEST DRIVE</h1>
              <p className="shopping-tool-content">
                Book a test drive for Audi cars
              </p>
            </NavLink>
          </article>
        </div>
      </section>
    );
  }
}
