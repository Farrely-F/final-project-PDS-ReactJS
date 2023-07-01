import React from "react";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";

function Typing() {
  return (
    <>
      <TypeIt
        className="font-bold"
        getBeforeInit={(instance) => {
          instance.pause(1000).type("Job").pause(750).delete(3).pause(500).type("Office").pause(750).delete(6).pause(500).type("Vacancy").pause(500);

          // Remember to return it!
          return instance;
        }}
        options={{
          loop: true,
          speed: 150,
        }}
      />
    </>
  );
}

function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-5xl font-medium">Find Your Dream {Typing()}</h1>
            <p className="mb-5">
              Welcome to WorkNow, where opportunities meet talent. Find the job that fits your aspirations and unlocks your true potential. Whether you're just starting your career or seeking new horizons, we've got you covered.
            </p>
            <Link to={"/vacancy"}>
              <a className="btn btn-primary btn-md">Seek Opportunity</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
