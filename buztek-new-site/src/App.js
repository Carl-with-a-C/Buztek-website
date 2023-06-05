import "./sass/main.scss";
import { motion } from "framer-motion";
import gsap from "gsap";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";

import { useEffect, useState } from "react";

function App() {
  //landing animation
  useEffect(() => {
    const tl = gsap.timeline();
    let smx = gsap.context(() => {
      tl.to(".header", 1.25, {
        opacity: 1,
        ease: "power1.out",
      })
        .to(
          ".splash-heading",
          1,
          {
            translateY: 0,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          ".splash-image",
          1.25,
          {
            translateY: 0,
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            ease: "power2.out",
          },
          "-=0.75"
        )
        .to(
          ".nav-projects-container, .nav-links-container, .nav-logo-container, .splash-blurb",
          1,
          {
            translateY: 0,
            opacity: 1,
            ease: "power1.out",
            stagger: {
              amount: 0.5,
            },
          },
          "-=0.75"
        );
      // .to(
      //   ".landing-reveal-block-right",
      //   2,
      //   {
      //     translateX: "100%",
      //     ease: "power1.in",
      //   },
      //   "-=2"
      // )
      // .to(
      //   ".lower-header-container > h1",
      //   2.2,
      //   {
      //     translateX: 0,
      //     ease: "power1.out",
      //   },
      //   "-=1.1"
      // );

      return () => {
        smx.revert();
      };
    });
  });

  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Services />
      <Process />
      <Contact />
    </div>
  );
}

export default App;
