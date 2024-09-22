import React, { Component, ReactNode } from "react";
import LandingPage from "./landingpage.tsx";
import Navigasi from "./navigasi.tsx";
import gsap from "gsap";
import { animasiLandingPage } from "../animation/landingpage.ts";
import { animasiNavigasi } from "../animation/navigasi.ts";
import SplitType from "split-type";
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
      const select = document.querySelectorAll(".content");
      const tl = gsap.timeline();
      await animasiLandingPage(tl);
      tl.to(".layout", {
        display: "block",
        onComplete: () => {
          ScrollTrigger.refresh(true);
        },
      });
      await animasiNavigasi(tl);
      select.forEach((char: any, i) => {
        const split = new SplitType(char, {
          types: "chars",
        });
        tl.fromTo(
          split.chars,
          {
            color: "#111827",
            opacity: 0.1,
          },
          {
            color: "#ffffff",
            stagger: 1,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: char,
              start: "top 30%",
              end: "bottom center",
              markers: true,
              scrub: true,
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
        <div className="layout hidden text-white bg-black w-full">
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
