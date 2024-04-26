import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food & Drink .</p>
            </div>
            <p className="mid">
            Welcome to My Restaurant, where culinary excellence meets unparalleled hospitality. Since 1995, we have been dedicated to crafting unforgettable dining experiences that tantalize the senses and create lasting memories for our guests.

Our story began back in the days of 1995, when i set out to redefine the culinary landscape of Bengaluru. With a passion for service taste embarked on a journey to create a dining destination unlike any other.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;