import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// primaryColor = #42e2b6
// secondaryColor = #3fc49e
function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Hero />
      </div>
      <Footer />
    </>
  );
}
function Nav() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassOpen = btnState ? "open" : "";
  let toggleClassHidden = btnState ? "flex" : "hidden";

  return (
    <>
      <nav className="flex items-center justify-between px-10 ">
        <img
          className="w-60 cursor-pointer transition hover:scale-105 duration-500"
          src="icon1.png"
          alt="icon"
        ></img>

        <div className="sm:hidden  lg:flex items-center justify-end gap-20 ">
          <button className="text-lg   transition hover:scale-105 duration-500">
            Home
          </button>
          <button className="text-lg  transition hover:scale-105 duration-500">
            Store
          </button>
          <button className="text-lg  transition hover:scale-105 duration-500">
            Cart
          </button>
          <button className="button">Sign up</button>
        </div>
        <div className="lg:hidden">
          <button
            id="menu-btn"
            className={` z-40 ${toggleClassOpen} block hamburger lg:hidden focus:outline-none`}
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      <menu
        id="menu"
        className={`absolute bg-black top-0 bottom-0 left-0 ${toggleClassHidden} flex-col items-center justify-center   w-full min-h-screen py-1 space-y-10 text-lg text-white uppercase  `}
      >
        <button className="hover:text-[#3fc49e]">Home</button>
        <button className="hover:text-[#3fc49e]">Store</button>
        <button className="hover:text-[#3fc49e]">Cart</button>
        <button className="button hover:text-black">Sign up</button>
      </menu>
    </>
  );
}
function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  gap-[6rem]  px-5 h-[50rem] lg:h-[40rem] ">
      <img
        className=" w-[25rem] lg:w-[35rem]  lg:pl-[5rem]  "
        src="heroimg.png"
        alt="heroimg"
      ></img>
      <div className="flex flex-col text-center lg:text-end items-center space-y-10 lg:space-y-20">
        <div className="sm:text-2xl  w-[15rem] md:text-4xl md:w-[25rem] lg:w-30 lg:text-5xl font-bold ">
          Lorem
          <span className=" bg-[#42e2b6] bg-opacity-50 rounded-lg px-5 mx-2 ">
            ipsum
          </span>
          dolor sesit
          <span className="bg-[#42e2b6] bg-opacity-50 rounded-lg px-5 mx-2 ">
            amet
          </span>
          ,conse as adipiscing
        </div>
        <button className=" button lg:ml-[26rem] ">Buy Now</button>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="bg-[#18232F] text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   pt-20 pb-10 gap-10 ">
        <div className="flex flex-col items-center  gap-10">
          <span className="text-3xl text-white font-semibold">Med Clicks</span>

          <p className="text-[#9BA0A6] w-[20rem] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
          <button className="button w-[10rem] ">Sign Up</button>
        </div>
        <div className="flex flex-col items-center  gap-10">
          <span className="text-white text-3xl font-semibold">Contact</span>
          <p className="text-[#9BA0A6] w-[20rem] text-center">
            Labim Mall, Lalitpur, Nepal <br />
            9832124430 <br />
            contact@medclicks.com <br />
            www.medclicks.com <br />
          </p>
          <div className="flex gap-10 ">
            <button className="icon">
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
            <button className="icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
            <button className="icon">
              <ion-icon name="logo-youtube"></ion-icon>
            </button>
            <button className="icon">
              <ion-icon name="logo-github"></ion-icon>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center  gap-10">
          <span className="text-white text-3xl font-semibold">Info</span>
          <p className="text-[#9BA0A6] w-[20rem] text-center">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
        </div>
        <div className="flex flex-col items-center  gap-10">
          <span className="text-white text-3xl font-semibold">Info</span>
          <p className="text-[#9BA0A6] w-[20rem] text-center">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
        </div>
      </div>
      <p className="text-sm font-light text-[#666A71] pt-10 flex flex-col items-center justify-center gap-10">
        {" "}
        &copy; Copyright 2023 Lorem epsum siter
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
