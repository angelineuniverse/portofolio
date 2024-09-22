import React, { Component, ReactNode } from "react";
import LandingPage from "./landingpage.tsx";
import Navigasi from "./navigasi.tsx";
import gsap from "gsap";
import { animasiLandingPage } from "../animation/landingpage.ts";
import { animasiNavigasi } from "../animation/navigasi.ts";
import SplitType from "split-type";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.animation = this.animation.bind(this);
  }
  componentDidMount(): void {
    this.animation();
  }
  animation() {
    gsap.context(async () => {
      const tl = gsap.timeline();

      await animasiLandingPage(tl);
      const lenis = new Lenis({
        lerp: 0.07,
      });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      const select = document.querySelectorAll(".content");
      await animasiNavigasi(tl);
      tl.from(".content", {
        opacity: 0,
        color: "#000",
      });
      await select.forEach((char: any, i) => {
        const split = new SplitType(char, {
          types: "chars",
        });
        tl.fromTo(
          split.chars,
          {
            color: "#111827",
            opacity: 0.01,
            scale: 2,
          },
          {
            color: "#ffffff",
            stagger: 1,
            delay: 1,
            duration: 3,
            scale: 1,
            ease: "none",
            opacity: 1,
            scrollTrigger: {
              trigger: char,
              start: "top 30%",
              end: "bottom 40%",
              markers: true,
              scrub: 1,
              toggleActions: "play play reverse reverse",
            },
          }
        );
      });
    });
  }
  render(): ReactNode {
    return (
      <div>
        <LandingPage />
        <div className="layout bg-black w-full">
          <Navigasi />
          <div className="mt-80 h-auto flex justify-center w-full">
            <p className="content w-6/12 font-intermedium text-3xl text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className=" h-screen"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
