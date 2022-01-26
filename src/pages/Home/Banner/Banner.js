import React from "react";
import Slide from "./Slide";
import "./Banner.css";

const Banner = () => {
  const allBanners = [
    {
      id: 1,
      title1: "Explore The Nature In",
      title2: "Your Own Way",
      description: "ADVENTURE IS FOR EVERYONE, TURN TRAVEL INTO A LIFESTYLE",
      img: "https://i.ibb.co/VMqH7Wt/5.jpg",
    },
    {
      id: 2,
      title1: "Explore The Nature In",
      title2: "Your Own Way",
      description: "ADVENTURE IS FOR EVERYONE, TURN TRAVEL INTO A LIFESTYLE",
      img: "https://i.ibb.co/QQMz2KS/1.jpg",
    },
    {
      id: 3,
      title1: "Explore The Nature In",
      title2: "Your Own Way",
      description: "ADVENTURE IS FOR EVERYONE, TURN TRAVEL INTO A LIFESTYLE",
      img: "https://i.ibb.co/JFLLTd4/4.jpg",
    },
    {
      id: 4,
      title1: "Explore The Nature In",
      title2: "Your Own Way",
      description: "ADVENTURE IS FOR EVERYONE, TURN TRAVEL INTO A LIFESTYLE",
      img: "https://i.ibb.co/tcpDtVF/6.jpg",
    },
    {
      id: 5,
      title1: "Explore The Nature In",
      title2: "Your Own Way",
      description: "ADVENTURE IS FOR EVERYONE, TURN TRAVEL INTO A LIFESTYLE",
      img: "https://i.ibb.co/kBLYDZW/7.jpg",
    },
    {
      id: 6,
      title1: "Explore The Nature In",
      title2: "Your Own Way",
      description: "ADVENTURE IS FOR EVERYONE, TURN TRAVEL INTO A LIFESTYLE",
      img: "https://i.ibb.co/hWjfdY4/8.jpg",
    },
  ];
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {allBanners.map((carousel, index) => (
          <Slide
            key={carousel._id}
            active={index === 0 ? true : false}
            carousel={carousel}
          />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
