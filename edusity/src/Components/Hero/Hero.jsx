import React from "react";
import "./Hero.css";
import arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam
          quasi distinctio aut minus dolore suscipit, reprehenderit eaque unde
          sapiente, non repellendus inventore maiores ut delectus cumque beatae
          est expedita!
        </p>
        <button className="btn">
          Explore More <img src={arrow} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
