import React from "react";
import vectorGraphics from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="homeTwo">
        <img src={vectorGraphics} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="homeThree" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At TECHYSTAR, we provide innovative and reliable technology
            solutions for businesses of all sizes. Our team of experts is
            dedicated to delivering exceptional service and ensuring that our
            clients have the tools they need to succeed in today's rapidly
            evolving digital landscape. Whether you need help with cloud
            migration, software development, cybersecurity, or data analytics,
            we have the experience and knowledge to help you achieve your goals.
            We work with a variety of industries, including healthcare, finance,
            manufacturing, education, and retail, and we have a proven track
            record of success. Let us help you stay ahead of the competition and
            reach your full potential with our cutting-edge technology
            solutions. Contact us today to learn more.
          </p>
        </div>
      </div>
      <div className="homeFour" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
