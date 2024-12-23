import React from "react";
import Navbar from "../Components/Navbar";
import { Typography } from "@mui/material";
import "../App.css";
import { BsCodeSlash } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { PiHandshake } from "react-icons/pi";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { FaIgloo } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <Navbar />

      <div className="container-fluid main">
        <h1 className="text-white main-heading">Generative AI as a Service</h1>
        <Typography className="text-white main-subheading">
          Driving innovative AI Application Development and Rapid Prototyping
          for Enterprises
        </Typography>
        <Typography className="text-white main-subheading">
          and Startups with our factory of 250+ AI Bots
        </Typography>
        <button className="btn btn-primary mt-3 p-2">Learn More</button>
      </div>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-between">
          {iconCards.map((card, index) => (
            <div className="col-6 col-sm-4 col-md-2 mb-3" key={index}>
              <div
                className="card text-center iconhover animate-hover"
                style={{ width: "100%", border: "0px" }}
              >
                <div className="bg-white shadow p-4 rounded-circle">
                  {card.icon}
                </div>
                <h3 style={{ fontWeight: "bold", marginTop: "20px" }}>120+</h3>
                <p style={{ color: "gray" }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <div className="header">
          <h3 style={{ fontWeight: "bold" }}>What We Offer</h3>
          <span style={{ fontWeight: "bold", fontSize: "30px", color: "blue" }}>
            ...
            <GoDash style={{ marginTop: "6px", fontSize: "60px" }} />
          </span>
        </div>
        <div className="row d-flex justify-content-center gap-4">
          <div
            className="col-md-5 p-5 rounded demo1 card-hover"
            style={{ border: "2px solid #0D92F4" }}
          >
            <h5 className="animated-subheading">Gen AI - Rapid Prototyping</h5>
            <p className="animated-paragraph" style={{ color: "gray" }}>
              Transform your idea into a prototype in 8-12 weeks with our AI
              development. We enable innovation and sustainable growth through
              the fusion of technology and human expertise.
            </p>
            <span className="animated-read-more" style={{ color: "#0D92F4" }}>
              <FaArrowRightLong className="animated-arrow" />
              Read more
            </span>
          </div>
          <div
            className="col-md-5 p-5 rounded demo card-hover"
            style={{ backgroundColor: "#0D92F4" }}
          >
            <h5 className="animated-subheading text-white">
              Gen AI - Rapid Prototyping
            </h5>
            <p className="animated-paragraph text-white">
              Transform your idea into a prototype in 8-12 weeks with our AI
              development. We enable innovation and sustainable growth through
              the fusion of technology and human expertise.
            </p>
            <span className="animated-read-more text-white">
              <FaArrowRightLong className="animated-arrow" />
              Read more
            </span>
          </div>
        </div>
        <div className="row d-flex justify-content-center gap-4 mt-4">
          <div
            className="col-md-5 p-5 rounded demo card-hover"
            style={{ backgroundColor: "#0D92F4" }}
          >
            <h5 className="animated-subheading text-white">
              Gen AI - Rapid Prototyping
            </h5>
            <p className="animated-paragraph text-white">
              Transform your idea into a prototype in 8-12 weeks with our AI
              development. We enable innovation and sustainable growth through
              the fusion of technology and human expertise.
            </p>
            <span className="animated-read-more text-white">
              <FaArrowRightLong className="animated-arrow" />
              Read more
            </span>
          </div>
          <div
            className="col-md-5 p-5 rounded demo1 card-hover"
            style={{ border: "2px solid #0D92F4" }}
          >
            <h5 className="animated-subheading">Gen AI - Rapid Prototyping</h5>
            <p className="animated-paragraph" style={{ color: "gray" }}>
              Transform your idea into a prototype in 8-12 weeks with our AI
              development. We enable innovation and sustainable growth through
              the fusion of technology and human expertise.
            </p>
            <span className="animated-read-more" style={{ color: "#0D92F4" }}>
              <FaArrowRightLong className="animated-arrow" />
              Read more
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="header">
          <h3 style={{ fontWeight: "bold" }}>What We Offer</h3>
          <span style={{ fontWeight: "bold", fontSize: "30px", color: "blue" }}>
            ...
            <GoDash style={{ marginTop: "6px", fontSize: "60px" }} />
          </span>
        </div>
        <div className="row mt-5">
          <div
            className="col-md-3 d-flex flex-column text-center"
            style={{ marginTop: "230px" }}
          >
            <h5
              style={{
                backgroundColor: "#001A6E",
                padding: "10px",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Genarative AI Models
            </h5>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Generative Adver Sarial Networks
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Transformer models (GPT3, GPT 3.5 Turbo, LaMDA, Wu-Dao)
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column text-center">
            <h5
              style={{
                backgroundColor: "#001A6E",
                padding: "10px",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Genarative AI Models
            </h5>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
          </div>
          <div
            className="col-md-3 d-flex flex-column text-center"
            style={{ marginTop: "125px" }}
          >
            <h5
              style={{
                backgroundColor: "#001A6E",
                padding: "10px",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Genarative AI Models
            </h5>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
          </div>
          <div
            className="col-md-3 d-flex flex-column text-center"
            style={{ marginTop: "124px" }}
          >
            <h5
              style={{
                backgroundColor: "#001A6E",
                padding: "10px",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Genarative AI Models
            </h5>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
            <p
              style={{
                padding: "10px",
                border: "2px solid #0D92F4",
                borderRadius: "3px",
              }}
            >
              <PiTelegramLogo style={{ marginRight: "10px" }} />
              Representation Learning
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="header text-center">
          <h3 style={{ fontWeight: "bold" }}>Why Choose Us?</h3>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "blue",
            }}
          >
            ...
            <GoDash style={{ marginTop: "6px", fontSize: "60px" }} />
          </span>
        </div>
        <div className="row p-2" style={{ backgroundColor: "#001A6E" }}>
          <div className="col-12 col-md-10 d-flex justify-content-around mt-3">
            <p
              className="p-3 bg-white text-dark"
              style={{
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                marginRight: "10px",
                paddingRight: "10px",
                fontWeight: "bold",
              }}
            >
              Awift Solution
            </p>
            <p
              className="p-3 text-white"
              style={{
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                marginRight: "10px",
                fontWeight: "bold",
                backgroundColor: "#474E93",
              }}
            >
              Innovate Faster
            </p>
            <p
              className="p-3 text-white"
              style={{
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                marginRight: "10px",
                fontWeight: "bold",
                backgroundColor: "#474E93",
              }}
            >
              Industry Collaboration
            </p>
            <p
              className="p-3 text-white"
              style={{
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                marginRight: "10px",
                fontWeight: "bold",
                backgroundColor: "#474E93",
              }}
            >
              Efficiency Redefined
            </p>
            <p
              className="p-3 text-white"
              style={{
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                marginRight: "10px",
                fontWeight: "bold",
                backgroundColor: "#474E93",
              }}
            >
              Leading Excellence
            </p>
          </div>
        </div>
        <div className="row shadow p-4">
          <p style={{ color: "gray" }}>
            Unlock the future of streamlined service through InnoBoon’s
            cutting-edge AI bot factory. Experience unparalleled speed and
            efficiency as our advanced technology transforms your business
            operations.
          </p>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#211E3B" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <img
              src="https://innoboon.com/wp-content/uploads/2020/09/InnoBoon-Logo.png"
              alt="InnoBoon Logo"
              className="mt-5"
              style={{ maxWidth: "100%", maxHeight: "100%", width: "250px" }}
            />
          </div>
          <div className="row mt-5">
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <TbWorld style={{ color: "#2E5077", fontSize: "40px" }} />
              <p className="text-white mt-3">
                INDIA: Tidel Park, ELCOT SEZ, Coimbatore
              </p>
              <p className="text-white">
                USA: 1313 North Milpitas Blvd, Suite 150, CA 95035
              </p>
              <p className="text-white">USA: LLC 447 Broadway, New York</p>
              <p className="text-white">Netherlands: Hans Lodeizenstraat 72,</p>
              <p className="text-white">1321 SH Almere, Netherlands</p>
              <p className="text-secondary">Our Address</p>
            </div>
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <MdEmail style={{ color: "#2E5077", fontSize: "40px" }} />
              <p className="text-white mt-3">info@innoboon.com</p>
              <p className="text-secondary">Our Mailbox</p>
            </div>
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <IoCallSharp style={{ color: "#2E5077", fontSize: "40px" }} />
              <p className="text-white mt-3">+91 96264 00074</p>
              <p className="text-secondary">Our Phone</p>
            </div>
          </div>
          <div>
            <p className="row d-flex justify-content-center text-white">
              Copyright © 2024 Innoboon. All Rights Reserved. | Privacy Policy
            </p>
            <p className="d-flex justify-content-center text-dark gap-4 p-5">
              <FaTwitter
                className="rounded"
                style={{
                  backgroundColor: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
              <FaFacebookF
                className="rounded"
                style={{
                  backgroundColor: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
              <FaLinkedinIn
                className="rounded"
                style={{
                  backgroundColor: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
              <FaInstagram
                className="rounded"
                style={{
                  backgroundColor: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const iconCards = [
  {
    icon: <BsCodeSlash style={{ fontSize: "40px", color: "#074799" }} />,
    text: "Software Developer",
  },
  {
    icon: <FaIgloo style={{ fontSize: "40px", color: "#074799" }} />,
    text: "Software Developer",
  },
  {
    icon: <SlPeople style={{ fontSize: "40px", color: "#074799" }} />,
    text: "Software Developer",
  },
  {
    icon: <PiHandshake style={{ fontSize: "40px", color: "#074799" }} />,
    text: "Software Developer",
  },
  {
    icon: <BsEmojiHeartEyes style={{ fontSize: "40px", color: "#074799" }} />,
    text: "Software Developer",
  },
];
