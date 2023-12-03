import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// primaryColor = #42e2b6
// secondaryColor = #3fc49e
function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
    </div>
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
          <div className="text-lg cursor-pointer  transition hover:scale-105 duration-500">
            Home
          </div>
          <div className="text-lg cursor-pointer transition hover:scale-105 duration-500">
            Store
          </div>
          <div className="text-lg cursor-pointer transition hover:scale-105 duration-500">
            Cart
          </div>
          <button className="text-lg hover:scale-105 bg-[#42e2b6] px-10 py-3 rounded-3xl transition hover:bg-[#3fc49e] duration-500 ">
            Sign up
          </button>
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
        <div className="hover:text-[#3fc49e]">Home</div>
        <div className="hover:text-[#3fc49e]">Store</div>
        <div className="hover:text-[#3fc49e]">Cart</div>
        <div className="text-lg bg-[#42e2b6] px-10 py-3 rounded-3xl transition hover:bg-[#3fc49e] duration-500 hover:text-black">
          Sign up
        </div>
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
        <button className=" text-lg hover:scale-105 bg-[#42e2b6] px-10 py-3 rounded-3xl transition hover:bg-[#3fc49e] duration-500 lg:ml-[26rem] ">
          Buy Now
        </button>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
