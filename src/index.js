import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// primaryColor = #42e2b6
// secondaryColor = #3fc49e
function App() {
  const testimonials = [
    {
      id: 1,
      name: "Xavier raez",
      image: "./minor-project/user-1.jpg",
      review:
        "The website was user-friendly and easy to navigate. The layout was intuitive, making it simple to find the medications I needed.",
      transform: "translate-x-[100%] ",
    },
    {
      id: 2,
      name: "Isabella Ramirez",
      image: "./minor-project/user-2.jpg",
      review:
        "I was impressed with the variety of medications available. They had a comprehensive selection, including both prescription and over-the-counter drugs.",
      transform: "translate-x-[300%]  ",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      image: "./minor-project/user-3.jpg",
      review:
        "The prescription process was straightforward. MedClicks required a valid prescription for prescription medications, ensuring a responsible and legal transaction.",
      transform: "translate-x-[500%]  ",
    },
  ];
  return (
    <>
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col ">
          <Nav />
          <Hero />
        </div>

        <Carousel slides={testimonials} />

        <Services />
      </div>
      <Footer />
    </>
  );
}
function Nav() {
  const [btnState, setBtnState] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassOpen = btnState ? "open" : "";
  let toggleClassHidden = btnState ? "flex" : "hidden";

  return (
    <div className={`${sticky ? "sticky" : ""}`}>
      <nav className="  flex items-center justify-between px-10   m-auto ">
        <img
          className="w-[12rem] cursor-pointer transition hover:scale-105 duration-500"
          src="./minor-project/icon1.png"
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
    </div>
  );
}
function Hero() {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center  gap-[10rem]  px-5 h-[50rem] lg:h-[40rem]
    mb-10  border-b"
    >
      <img
        className=" w-[25rem] lg:w-[35rem]  lg:pl-[5rem]  "
        src="./minor-project/heroimg.png"
        alt="heroimg"
      ></img>
      <div className="flex flex-col text-center lg:text-end items-center space-y-10 lg:space-y-20">
        <div className="sm:text-2xl  w-[15rem] md:text-4xl md:w-[25rem] lg:w-30  font-bold ">
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
        <button className=" button  lg:px-10 ">Buy Now</button>
      </div>
    </div>
  );
}
function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  const activateDot1 = () => {
    if (current !== 0) setCurrent(0);
  };
  const activateDot2 = () => {
    if (current !== 1) setCurrent(1);
  };
  const activateDot3 = () => {
    if (current !== 2) setCurrent(2);
  };

  return (
    <div className=" text-center">
      <h1 className="mb-[5rem] font-bold text-3xl">Testimonials</h1>
      <div className=" relative max-w-[100%] md:max-w-[60%] h-[35rem] m-auto z-99 overflow-hidden">
        <div
          className={`flex   justify-between transition ease-out duration-1000 absolute top-0 w-[100%]  h-50  `}
          style={{ transform: `translateX(-${100 * current}%)` }}
        >
          {slides.map((s) => {
            return (
              <div
                className={` ${s.transform}  w-[100%] flex flex-col items-center justify-between gap-3 lg:gap-10 relative`}
              >
                <div className="before:content-['\201C'] absolute text-[#42e2b6] top-0 left-[-1rem] text-8xl"></div>
                <div className="w-20 border  rounded-full overflow-hidden mt-10">
                  <img src={s.image} alt="" />
                </div>
                <h6 className="font-bold text:[8px] md:text-2xl lg:text-3xl">
                  {s.name}
                </h6>
                <p className="text-justify break-all text-[12px]  lg:text-lg ">
                  {s.review}
                </p>
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 h-[80%] md:h-[100%] w-full justify-between  flex  items-center text-black ">
          <button
            className="text-3xl hover:text-[#42e2b6] transform hover:scale-110 transition-all duration-500 focus:outline-none"
            onClick={previousSlide}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <button
            className="text-3xl hover:text-[#42e2b6] transform hover:scale-110 transition-all duration-500 focus:outline-none"
            onClick={nextSlide}
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
        <div className="absolute top-[70%] lg:top-[90%] left-[41%] lg:left-[44%] flex gap-5">
          <button
            className={`text-[10px] lg:text-lg hover:text-[#42e2b6] transition duration-500 transform hover:scale-110 focus:outline-none ${
              current == 0 ? "text-[#42e2b6] transform scale-110 " : ""
            } `}
            onClick={activateDot1}
          >
            <ion-icon name="ellipse-outline"></ion-icon>
          </button>
          <button
            className={`text-[10px] lg:text-lg hover:text-[#42e2b6] transition duration-500 transform hover:scale-110 focus:outline-none ${
              current == 1 ? "text-[#42e2b6] transform scale-110 " : ""
            } `}
            onClick={activateDot2}
          >
            <ion-icon name="ellipse-outline"></ion-icon>
          </button>
          <button
            className={`text-[10px] lg:text-lg hover:text-[#42e2b6] transition duration-500 transform hover:scale-110 focus:outline-none ${
              current == 2 ? "text-[#42e2b6] transform scale-110 " : ""
            } `}
            onClick={activateDot3}
          >
            <ion-icon name="ellipse-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="h-[17rem] mt-20 flex items-center justify-center md:h-[5rem]">
      <div className="bg-[#42e2b6] flex-col flex md:flex-row justify-between gap-10 rounded-2xl  p-10 absolute z-2 ">
        <div className="flex gap-5">
          <div className=" bg-[#C7FFF2] text-[#2E9E7F] flex items-center justify-center item rounded-[100%] px-5 py-[1.2rem] ">
            <ion-icon name="bicycle-outline"></ion-icon>
          </div>
          <div>
            <p className="text-lg">Free Delivery</p>
            <p className="font-light text-sm">lorem epsum</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className=" bg-[#C7FFF2] text-[#2E9E7F] flex items-center justify-center rounded-[100%] px-5 py-[1.2rem]">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
          <div>
            <p className="text-lg">Free Refund</p>
            <p className="font-light text-sm">lorem epsum</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className=" bg-[#C7FFF2] text-[#2E9E7F] flex items-center justify-center rounded-[100%] px-5 py-[1.2rem]">
            <ion-icon name="diamond-outline"></ion-icon>
          </div>
          <div>
            <p className="text-lg">Premium Quality</p>
            <p className="font-light text-sm">lorem epsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="bg-[#18232F] text-white px-10">
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
          <p className="text-[#9BA0A6]  text-center">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
        </div>
        <div className="flex flex-col items-center  gap-10">
          <span className="text-white text-3xl font-semibold">Info</span>
          <p className="text-[#9BA0A6]  text-center">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
        </div>
      </div>
      <p className="text-sm font-light text-[#666A71] pt-10 flex flex-col items-center justify-center gap-10 pb-5">
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
