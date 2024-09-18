import React, { Component, ReactNode } from "react";
import LandingPage from "./landingpage.tsx";
import Navigasi from "./navigasi.tsx";
import gsap from "gsap";
import { animasiLandingPage } from "../animation/landingpage.ts";
import { animasiNavigasi } from "../animation/navigasi.ts";
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
      const tl = gsap.timeline({
        onComplete: () => console.log("COMPLETE : ", Date.now()),
      });
      await animasiLandingPage(tl);
      await animasiNavigasi(tl);
    });
  }
  render(): ReactNode {
    return (
      <div>
        <LandingPage />
        <div className="text-white bg-black  min-h-screen w-full">
          <Navigasi />
        </div>
      </div>
    );
  }
}

export default Dashboard;
